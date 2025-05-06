"use client"
import { useEffect, useState } from "react";

const useActiveSection = (sectionIds, threshold = 0.5) => {
   const [activeSection, setActiveSection] = useState(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (
                  entry.isIntersecting &&
                  entry.intersectionRatio >= threshold
               ) {
                  setActiveSection(entry.target.id);
               }
            });
         },
         {
            threshold: threshold,
            rootMargin: "0px 0px -50% 0px",
         }
      );

      sectionIds.forEach((id) => {
         const element = document.getElementById(id);
         if (element) observer.observe(element);
      });

      return () => {
         sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.unobserve(element);
         });
      };
   }, [sectionIds, threshold]);

   return activeSection;
};

export default useActiveSection;
