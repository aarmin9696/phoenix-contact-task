import React, { createContext, useState, useEffect } from "react";
import { fetchUsers, updateUser } from "../API/userService";
import Swal from "sweetalert2";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
    setLoading(true);
  }, []);

  const loadUsers = async () => {
    try {
      const response = await fetchUsers();
      setUsers(response.data.members);
      setLoading(false);
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Failed to Load Users",
            text: "There was an error loading the user data.",
          });
          setLoading(false);
    }
  };

  const updateUserDetails = async (userId, updatedData) => {
    try {
      const response = await updateUser(userId, updatedData);
      if (response.success) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.user.userId === userId
              ? { ...user, user: { ...user.user, ...updatedData } }
              : user
          )
        );
        setSelectedUser(null);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        selectedUser,
        setSelectedUser,
        updateUserDetails,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
