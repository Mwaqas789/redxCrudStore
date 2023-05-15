import React, { useState } from "react";
import { Button } from "antd";
import { addStudents } from "../../Store/Slices/CrudSlices";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [name, setname] = useState();
  const [email, setemail] = useState();

  const dispatch = useDispatch();
  const CrudDataStore = useSelector((state) => state.Crud);

  const handelSubmit = (event) => {
    event.preventDefault();
    alert("Successfully Adding Data");
    navigate("/home");
    dispatch(
      addStudents({
        id: CrudDataStore?.length
          ? CrudDataStore[CrudDataStore?.length - 1].id + 1
          : 0,
        name,
        email,
      })
    );
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center border mt-5 mainDiv bg-light">
      <div className="w-50 p-5  ">
        <h1 style={{ color: "green" }}>Add New Students</h1>
        <form onSubmit={handelSubmit}>
          <div>
            <label htmlFor="name" style={{ color: "green" }}>
              Name:
            </label>
            <input
              onChange={(e) => setname(e.target.value)}
              type="text"
              name="name"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="email" style={{ color: "green" }}>
              Email:
            </label>
            <input
              onChange={(e) => setemail(e.target.value)}
              type="email"
              name="email"
              className="form-control fontColor"
            />
          </div>
          <br />
          <Button htmlType="submit" className="colorButton">
            Submit
          </Button>
          <Link to="/home" className="">
            <Button className="colorButtonBack">Back</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
