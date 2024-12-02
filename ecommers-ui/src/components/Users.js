import React, { useState, useEffect } from "react";
import ApiService, { ApiUrls } from "../services/ApiService";
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TableContainer,
  Paper,
  IconButton,
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await ApiService.get(ApiUrls.GetUsers);
    setUsers(response.data);
  };

  const handleOpen = (
    user = { id: null, username: "", email: "", password: "" }
  ) => {
    setCurrentUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleSubmit = async () => {
    if (currentUser.id) {
      await ApiService.put(
        ApiUrls.UpdateUser(currentUser.user_id),
        currentUser
      );
    } else {
      await ApiService.post(ApiUrls.CreateUser, currentUser);
    }
    fetchUsers();
    handleClose();
  };

  const handleDelete = async (id) => {
    await ApiService.deleteCall(ApiUrls.DeleteUser(id));
    fetchUsers();
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" fontWeight="bold" color="primary">
          User Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpen()}
        >
          Add User
        </Button>
      </Box>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.light" }}>
              <TableCell
                sx={{ fontWeight: "bold", color: "primary.contrastText" }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "primary.contrastText" }}
              >
                Username
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "primary.contrastText" }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "primary.contrastText" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.user_id} hover>
                <TableCell>{user.user_id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpen(user)}
                    aria-label="edit"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(user.user_id)}
                    aria-label="delete"
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {currentUser.user_id ? "Edit User" : "Add User"}
        </DialogTitle>
        <DialogContent>
          <TextField
            name="username"
            label="Username"
            value={currentUser.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="email"
            label="Email"
            value={currentUser.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={currentUser.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {currentUser.user_id ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Users;
