import React from "react";
import { useEffect } from "react";

const Settings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container settings"></div>
    </>
  );
};

export default Settings;
