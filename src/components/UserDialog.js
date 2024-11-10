import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import Swal from "sweetalert2";

const UserDialog = () => {
  const { selectedUser, setSelectedUser, updateUserDetails } =
    useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (selectedUser) {
      setFirstName(selectedUser.firstName);
      setLastName(selectedUser.lastName);
    }
  }, [selectedUser]);

  if (!selectedUser) return null;

  const handleUpdate = () => {
    updateUserDetails(selectedUser.userId, { firstName, lastName })
      .then(() => {
        // Show success alert
        Swal.fire({
          icon: "success",
          title: "Update Successful",
          text: "The user details were updated successfully!",
          confirmButtonText: "OK",
        });
        setSelectedUser(null);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        // Optional: Show error alert
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "There was an issue updating the user details.",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <Dialog open={Boolean(selectedUser)} onClose={() => setSelectedUser(null)}>
      <DialogTitle>User Details</DialogTitle>
      <DialogContent>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          style={{ marginTop: 8 }}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          style={{ marginTop: 16 }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          sx={{ padding: "8px 16px" }}
          onClick={() => setSelectedUser(null)}
        >
          Cancel
        </Button>
        <Button
          sx={{ padding: "8px 16px" }}
          onClick={handleUpdate}
          variant="contained"
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDialog;
