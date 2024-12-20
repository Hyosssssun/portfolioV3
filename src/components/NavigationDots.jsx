import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {["home", "about", "projects", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: "#F89B47" } : {}}
        >
          {}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
