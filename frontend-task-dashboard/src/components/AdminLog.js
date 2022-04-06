import React, { useState } from "react";
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

export default function AdminLog() {
  const history = useNavigate();
  const [admin, setAdmin] = useState({enteredPass: ""});
  const adminLogin = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/api/admin/login",admin)
      .then((response) => {
        localStorage.setItem("admin", response.data.success);
        history("/admin/dashboard");
        console.log(admin)
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
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
            Admin Log in
          </Typography>
          <Box component="form" onSubmit={adminLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              name="enteredPass"
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
                  <Link to="/" variant="body2">
                    User Login
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
