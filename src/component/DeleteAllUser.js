import { Button } from "antd";
import React from "react";
import { deleteUser } from "../Store/Slices/UserSlices";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {
  const Dispatch = useDispatch();
  const DeleteAllUsers = () => {
    Dispatch(deleteUser());
  };
  return (
    <>
      <div>
        <br />
        <Button className="Clear_button mb-4" onClick={DeleteAllUsers}>
          Clear User
        </Button>
      </div>
    </>
  );
};

export default DeleteAllUser;
