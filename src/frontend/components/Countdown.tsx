import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => {
    const targetDate = new Date("2026-07-24T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  });

  useEffect(() => {
    const targetDate = new Date("2026-07-24T00:00:00").getTime();
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex gap-4 sm:gap-6 justify-center my-8 select-none">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
        { label: "Secs", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-neutral-900/80 border border-neutral-800 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group">
            {/* Glowing bottom border */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white">
              {formatNumber(item.value)}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest mt-2">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
