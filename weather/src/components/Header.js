import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = ({ hasHiddenAuthButtons, username }) => {
  
  const history = useHistory();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("balance");
    window.location.reload(); 
  };

  const handleBackToExplore = () => {
    history.push("/");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  const handleLogin = async () => {
    history.push("/login");
  };

  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon" />
      </Box>
      {username ? (
        <Box sx={{
          display: "flex",
          position: "absolute",
          right: "3%",
          alignItems: "center",
          padding: "16px",
          gap: "1rem"
        }}>
          <Avatar alt={username} src="avatar.png" />
          <p className="username-text"> {username}</p>
          <Button
            className="logout-button"
            onClick={handleLogout}
            variant="outlined"
          >
            LOGOUT
          </Button>
        </Box>
      ) : (
        <Box sx={{
          display: "flex",
          position: "absolute",
          right: "3%",
          alignItems: "center",
          padding: "16px",
          gap: "1rem"
        }}>
          {location.pathname !== "/register" && location.pathname !== "/login" && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
              className={`register-button ${hasHiddenAuthButtons ? "hidden" : ""}`}
            >
              REGISTER
            </Button>
          )}
          {location.pathname !== "/register" && location.pathname !== "/login" && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              className={`login-button ${hasHiddenAuthButtons ? "hidden" : ""}`}
            >
              LOGIN
            </Button>
          )}
        </Box>
      )}
      {location.pathname !== "/" && location.pathname !== "/products" && (
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={handleBackToExplore}
        >
          Back to Explore
        </Button>
      )}
    </Box>
  );
};

export default Header;
