let isSideBar = true;

const ColorBoxLayouts = ({ children, left, right }) => {
  return (
    <section>
      {children}
      {/* {left}
      {right} */}

      {isSideBar ? left : right}
    </section>
  );
};

export default ColorBoxLayouts;
