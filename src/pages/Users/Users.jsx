import React from "react";
import { useEffect } from "react";

import { Button } from "../../components/Button";

const Users = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container users">
        <div>
          <Button text="Add user" />
        </div>
      </div>
    </>
  );
};

export default Users;
