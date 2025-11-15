import {useState, useEffect} from 'react'
const CountingNumber = ({ target, suffix = "", duration = 1200, isInView }: {
    target: number;
    suffix?: string;
    duration?: number;
    isInView: boolean;
  }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (!isInView) return;
  
      let start = 0;
      let raf = 0 as number | undefined as unknown as number;
      let startTs: number | null = null;
  
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  
      const step = (ts: number) => {
        if (startTs === null) startTs = ts;
        const elapsed = ts - startTs;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const current = Math.floor(start + (target - start) * eased);
        setCount(current);
        if (progress < 1) {
          raf = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
  
      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, [target, duration, isInView]);
  
    return <>{count}{suffix}</>;
  };

  export default CountingNumber;