import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `target` when element enters viewport.
 */
export function useCounter(target: number, duration = 1600) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const isFloat = target % 1 !== 0;

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(isFloat ? Math.round(target * eased * 10) / 10 : Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(update);
      else setCount(target);
    }

    requestAnimationFrame(update);
  }, [started, target, duration]);

  return { ref, count };
}
