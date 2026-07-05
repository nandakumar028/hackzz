import { motion, type Easing } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: Easing | Easing[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  const defaultFrom = useMemo(
    () => ({
      filter: 'blur(10px)',
      opacity: 0,
      y: direction === 'top' ? -30 : 30,
    }),
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
      },
    ],
    []
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshot = animationTo ?? defaultTo;

  const keyframes = useMemo(
    () => buildKeyframes(fromSnapshot, toSnapshot),
    [fromSnapshot, toSnapshot]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const handleComplete = () => {
    animatedCount.current += 1;
    if (animatedCount.current === elements.length && onAnimationComplete) {
      onAnimationComplete();
    }
  };

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          initial={fromSnapshot}
          animate={inView ? keyframes : fromSnapshot}
          transition={{
            delay: (index * delay) / 1000,
            duration: stepDuration * toSnapshot.length,
            ease: easing,
          }}
          onAnimationComplete={handleComplete}
          style={{
            display: 'inline-block',
            willChange: 'transform, filter, opacity',
          }}
        >
          {segment === ' ' ? '\u00A0' : segment}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
