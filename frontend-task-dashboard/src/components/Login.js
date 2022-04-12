import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
const theme = createTheme();

export default function Login() {
  const history = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const postLogin = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/api/auth/login", user)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history("/dashboard");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
useEffect(() => {
  if(localStorage.getItem("token")){
    history("/dashboard")
  }
}, []);
  return (
    <ThemeProvider theme={theme}>
      <Container className="div" component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={postLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <div style={{ display: "flex" }}>
              <Grid container justifyContent="flex-start">
                <Grid item>
                  <Link to="/admin" variant="body2">
                    Admin Login
                  </Link>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  Don't have an account?{" "}
                  <Link to="/register" variant="body2">
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
