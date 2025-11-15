import { useEffect, useRef, useState } from 'react';

type TypingTextProps = {
  text: string;
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
  className?: string;
};

// Simple looping type/delete effect for a single phrase
export default function TypingText({
  text,
  typingSpeedMs = 1500,
  deletingSpeedMs = 1000,
  pauseMs = 1200,
  className,
}: TypingTextProps) {
  const [display, setDisplay] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const step = () => {
      if (!isDeleting) {
        const next = text.slice(0, display.length + 1);
        setDisplay(next);
        if (next === text) {
          timeoutRef.current = window.setTimeout(() => {
            setIsDeleting(true);
          }, pauseMs);
          return;
        }
        timeoutRef.current = window.setTimeout(step, typingSpeedMs);
      } else {
        const next = text.slice(0, Math.max(0, display.length - 1));
        setDisplay(next);
        if (next.length === 0) {
          timeoutRef.current = window.setTimeout(() => {
            setIsDeleting(false);
          }, typingSpeedMs);
          return;
        }
        timeoutRef.current = window.setTimeout(step, deletingSpeedMs);
      }
    };

    frameRef.current = window.requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [display, isDeleting, text, typingSpeedMs, deletingSpeedMs, pauseMs]);

  return (
    <span className={className}>
      {display}
      <span className="inline-block w-[0.06em] ml-1 bg-current animate-pulse" style={{ height: '0.9em' }} />
    </span>
  );
}


