import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudents } from "./Store/Slices/CrudSlices";
// import axios from "axios";
// axios
//   .get("https://645f31759d35038e2d1e99e2.mockapi.io/crud")
//   .then(function (response) {
//     console.log(response, "wwwwwwwwwwwwwwwwwwwwwww");
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {});

const HomePage = () => {
  const CrudDataStore = useSelector((state) => state.Crud);
  const dispatch = useDispatch();

  const handelDelete = (id) => {
    dispatch(deleteStudents({ id: id }));
  };
  return (
    <div className="container border mt-5 bg-light mainDiv">
      <h2 style={{ textAlign: "center", marginTop: "50px", color: "green" }}>
        Khawarr Crud System
      </h2>
      <Link to="/create">
        <Button className="colorButton">Create New Users +</Button>
      </Link>
      <table className="table border mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {CrudDataStore.map((item, index) => (
            <tr key={index}>
              <td className="fontColor">{item.id}</td>
              <td className="fontColor">{item.name}</td>
              <td className="fontColor">{item.email}</td>
              <td>
                <Link to={`/edit/${item.id}`}>
                  <Button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      margin: "5px",
                    }}
                  >
                    Update Srudent
                  </Button>
                </Link>
                <Button
                  style={{
                    backgroundColor: "Red",
                    color: "white",
                    margin: "5px",
                  }}
                  onClickCapture={() => handelDelete(item.id)}
                >
                  Delete Srudent
                </Button>
                <Link to="/" className="LinkColor">
                  <Button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    Back To Home Page
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
