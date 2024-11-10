import React from "react";
import { UserProvider } from "./context/UserContext";
import UserList from "./components/UserList";
import UserDialog from "./components/UserDialog";
import "./App.css"
import { Box, Container, Typography } from "@mui/material";

const App = () => (
  <UserProvider>
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" my={2}>
        <Typography variant="h4" gutterBottom>
          User Management
        </Typography>
      </Box>
      <UserList />
      <UserDialog />
    </Container>
  </UserProvider>
);

export default App;
