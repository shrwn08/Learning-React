import { Button, CircularProgress, Stack, TextField, Link as MuiLink } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { config } from "../App";
import Footer from "./Footer";
import Header from "./Header";
import "./Login.css";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateInput(formData)) {
      await login(formData);
    }
  };

  const login = async (formData) => {
    try {
      setLoading(true);
      const data ={
        username : formData.username,
        password : formData.password
      }
      const response = await axios.post(`${config.endpoint}/auth/login`, data);
      console.log(response);
      if (response.status === 201 && response.data.success) {
        persistLogin(response.data.token, response.data.username, response.data.balance);
        enqueueSnackbar("Logged in successfully!", { variant: "success" });
        localStorage.setItem("username", data.username);
        history.push("/products");
      } else {
        enqueueSnackbar(response.data.message, { variant: "error" });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        enqueueSnackbar(error.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Something went wrong. Check that the backend is running, reachable and returns valid JSON.", { variant: "error" });
      }
    } finally {
      setLoading(false);
    }
  };

  const validateInput = (data) => {
    if (!data.username) {
      enqueueSnackbar("Username is a required field", { variant: "warning" });
      return false;
    }
    if (!data.password) {
      enqueueSnackbar("Password is a required field", { variant: "warning" });
      return false;
    }
    return true;
  };

  const persistLogin = (token, username, balance) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("balance", balance.toString());
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("balance");
    history.push("/");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Header 
        hasHiddenAuthButtons={true} 
        username={localStorage.getItem("username")}
        buttonText="Back to explore" 
        toggleButtonText={() => {}} 
      />
      <Box className="content">
        <Stack spacing={2} className="form" component="form" onSubmit={handleSubmit}>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />
            {loading ? (<CircularProgress size={24} />) :
             ( <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >LOGIN TO QKART  </Button>)}
         
          <Box mt={2} textAlign="center">
          Don't have an account? 
          <MuiLink component={Link} to="/register" color="primary">
            Register now
          </MuiLink>
        </Box>
        </Stack>
        
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;
