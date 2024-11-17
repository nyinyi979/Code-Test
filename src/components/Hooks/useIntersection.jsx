import { useEffect } from "react";

/**
 * 
 * @param querySelector Input classname or ID of the element
 * @param animationType scale, slide_left, slide_right, fade
 * @returns 
 */
const useIntersection = (querySelector, animationType="scale") => {
  return useEffect(() => {
    const target = document.querySelector(querySelector);
    target.classList.add(`not_${animationType}`)
    function handleIntersection(entries) {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(`not_${animationType}`);
          entry.target.classList.add(`${animationType}`);
        }
      });
    }
    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(target);
  }, []);
};

export default useIntersection