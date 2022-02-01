import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAction from "../NewUser/api";
import "./UserList.css";

const UserList = () => {
  const loadedData = useAction();
  const [data, setData] = useState(loadedData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const Status = ({ type }) => {
    return <div className={"statusResponse " + type}>{type}</div>;
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.img && (
              <img className="userListImg" src={params.row.avatar} alt="" />
            )}
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        if (params.row.active === "yes") {
          return<Status type = "active" /> ;
        }
        else{
          return<Status type = "deactive" />;
        }
      },
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />

      <div>
        {loadedData.map((value) => {
          return (
            <ul key={value.id}>
              <li>
                <b>{value.username}</b>
              </li>
              <li>{value.fullName}</li>
              <li>{value.email}</li>
              <li>{value.password}</li>
              <li>{value.phone}</li>
              <li>{value.address}</li>
              <li>{value.gender}</li>
              <li>{value.active}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
