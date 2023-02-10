import React, { useState, useEffect } from 'react';

const useOnScreen = (ref: { current: Element; }): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      }
    );
    if (el) {
      observer.observe(el);
    }
    return () => {
      observer.unobserve(el);
    };
  }, []);
  return isIntersecting;
}

export default useOnScreen;