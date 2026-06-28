"use client"
import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
   const [activeSection, setActiveSection] = useState(null);

   useEffect(() => {
      const observerOptions = {
         root: null,
         // This creates a precise target zone near the top center of the screen
         rootMargin: "-20% 0px -60% 0px", 
         threshold: 0,
      };

      const observerCallback = (entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setActiveSection(entry.target.id);
            }
         });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions)

      sectionIds.forEach((id) => {
         const element = document.getElementById(id);
         if (element) observer.observe(element);
      });

      return () => observer.disconnect();
   }, [sectionIds]);

   return activeSection;
};

export default useActiveSection;
