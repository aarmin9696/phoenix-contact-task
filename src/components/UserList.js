import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";

const UserList = () => {
  const { users, setSelectedUser, loading } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <Paper
      sx={{
        width: "90%",
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <List>
            {currentUsers.length > 0 ? (
              currentUsers.map(({ user },index) => (
                <ListItem
                  button
                  key={user.userId}
                  onClick={() => setSelectedUser(user)}
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                    marginBottom: "8px",
                    padding: "16px",
                    transition: "background 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      user.firstName || user.lastName
                        ? `${user.firstName || ""} ${user.lastName || ""}`
                        : "No Name"
                    }
                    secondary={user.email || "No Email"}
                  />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No Users Found!" />
              </ListItem>
            )}
          </List>

          {totalPages > 1 && (
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                variant="outlined"
                sx={{ padding: "8px 16px" }}
              >
                Previous
              </Button>

              <Box
                component="span"
                sx={{ alignSelf: "center", fontWeight: "bold" }}
              >
                Page {currentPage} of {totalPages}
              </Box>

              <Button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                variant="outlined"
                sx={{ padding: "8px 16px" }}
              >
                Next
              </Button>
            </Box>
          )}
        </>
      )}
    </Paper>
  );
};

export default UserList;
