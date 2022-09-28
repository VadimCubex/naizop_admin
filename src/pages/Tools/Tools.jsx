import React from "react";
import { useEffect } from "react";
import classNames from "classnames";

const Tools = ({ container = true, className }) => {
  const ToolsClass = classNames(
    "tools-page",
    { container: container },
    className
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={ToolsClass}></div>
    </>
  );
};

export default Tools;
