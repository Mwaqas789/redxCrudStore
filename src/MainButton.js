import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
const MainButton = () => {
  return (
    <div>
      <Link to="/home" className="LinkColor">
        <Button className="StudentsCrudBtn">Students Cruds</Button>
      </Link>
    </div>
  );
};

export default MainButton;
