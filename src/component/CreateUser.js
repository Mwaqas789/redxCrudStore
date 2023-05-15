import React from "react";
import { Button } from "antd";
import "../App.css";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../Api";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/Slices/UserSlices";
import DisPlayUser from "./DisPlayUser";
import MainButton from "../MainButton";
const CreateUser = () => {
  const Dispatch = useDispatch();
  const AddNewUser = (result) => {
    Dispatch(addUser(result));
    console.log(result);
  };
  return (
    <>
      <div className="container border mt-5 bg-light mainDiv">
        <h1 className="Heading-name">Well Come To Cruds Application </h1>
        <div className="admin-table">
          <div className="admin-subtitle" style={{ color: "green" }}>
            List Of User Details
            <MainButton />
          </div>
          <Button
            onClick={() => AddNewUser(fakeUserData())}
            style={{ backgroundColor: "green", color: "white" }}
          >
            Add New User
          </Button>
        </div>
        <ul>
          <DisPlayUser />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </>
  );
};

export default CreateUser;
