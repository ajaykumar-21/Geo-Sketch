import { useEffect } from "react";

// useIntersectionObserver - A custom React hook to run a callback
const useIntersectionObserver = (ref, callback) => {
  useEffect(() => {
    // Get the DOM element from the ref
    const target = ref.current;
    if (!target) return;

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is visible (intersecting)
        if (entry.isIntersecting) {
          callback();
          observer.disconnect(); // Stop observing after triggering once
        }
      },
      { threshold: 0.25 } // Trigger when 25% of the element is visible
    );

    // Start observing the target element
    observer.observe(target);

    // Cleanup when component unmounts or ref/callback changes
    return () => observer.disconnect();
  }, [ref, callback]);
};

export default useIntersectionObserver;
