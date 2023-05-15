import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../Store/Slices/UserSlices";

const DisPlayUser = () => {
  const Dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.user;
  });

  const DeleteUser = (id) => {
    Dispatch(removeUser(id));
  };
  // const [editUser, setEditUser] = useState();
  // const EditUser = () => {};
  //   console.log(data);
  return (
    <>
      {data.map((user, id) => {
        return (
          <div>
            <ul style={{ color: "green" }} key={id}>
              {user}
              <Button className="btn-delete">
                <DeleteOutlined
                  className="delete-icon"
                  onClick={() => DeleteUser(id)}
                />
                {/* <EditOutlined className="delete-icon" onClick={EditUser} /> */}
              </Button>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default DisPlayUser;
