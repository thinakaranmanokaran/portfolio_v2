import { useEffect } from "react";
import Lenis from 'lenis';

const UseSmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5, // Adjust the scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      smooth: true, // Enable smooth scrolling
      direction: "vertical", // Scroll direction (vertical or horizontal)
    });

    // Animation loop
    const animate = (time) => {
      lenis.raf(time); // Update Lenis on each frame
      requestAnimationFrame(animate); // Request the next frame
    };

    requestAnimationFrame(animate); // Start the animation loop

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default UseSmoothScroll;
