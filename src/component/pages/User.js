import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { url } from "./Url";

function User() {
  const [user_data, setuser_data] = useState([]);
  useEffect(() => {
    const init = async () => {
      const data = await axios.get(`${url}/get-user`);
      if (data) {
        setuser_data(data.data);
      }
    };
    init();
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <div className="text-3xl font-bold py-20 text-center">User Table</div>
      <div className="max-w-[50%]  mx-auto mt-7">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>S.NO.</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user_data &&
                  user_data.map((res, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{res.username}</TableCell>
                        <TableCell>{res.email}</TableCell>
                        <TableCell>Subscribed</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            {user_data.length > 0 ? (
              ""
            ) : (
              <div className="text-center py-20">No data to show ...</div>
            )}
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}

export default User;
