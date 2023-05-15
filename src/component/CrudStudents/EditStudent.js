import React, { useState } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UpdateStudents } from "../../Store/Slices/CrudSlices";

const EditStudent = () => {
  const navegate = useNavigate();
  const { id } = useParams();
  const CrudDataStore = useSelector((state) => state.Crud);
  const existStudents = CrudDataStore.filter((item) => item.id == id);
  // console.log(CrudDataStore, "ffffffffffffffffffff");
  console.log(existStudents);
  const { name, email } = existStudents?.length
    ? existStudents[0]
    : { name: "", email: "" };

  const [UpdateName, setUpdatName] = useState(name);
  const [UpdateEmail, setUpdateEmail] = useState(email);
  const dispatch = useDispatch();
  const handelUpdate = (event) => {
    event.preventDefault();
    dispatch(
      UpdateStudents({
        id: id,
        name: UpdateName,
        email: UpdateEmail,
      })
    );
    alert("Successfully Update Data");
    navegate("/home");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center mt-5">
      <div className="w-50 p-5 CreateStudents">
        <h1 style={{ color: "green" }}>Update Students</h1>
        <form onSubmit={handelUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={UpdateName}
              onChange={(e) => setUpdatName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={UpdateEmail}
              onChange={(e) => setUpdateEmail(e.target.value)}
            />
          </div>
          <br />
          <Button htmlType="submit" className="colorButton">
            Update
          </Button>

          <Link to="/home" className="">
            <Button className="colorButtonBack">Back</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
