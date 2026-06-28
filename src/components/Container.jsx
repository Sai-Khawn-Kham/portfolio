import React from "react";

const Container = ({ children, className = "", styles = {}, id = "" }) => {
  return (
    <section
      id={id}
      style={styles}
      className={`px-3 md:px-10 xl:px-0 xl:w-[1190px] mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
