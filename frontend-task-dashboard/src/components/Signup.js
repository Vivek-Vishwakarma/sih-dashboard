import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
const theme = createTheme();

export default function Signup() {
  const history = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
  });

  const postRegister = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios
      .post("http://localhost:5000/api/auth/register", user)
      .then((response) => {
        console.log(response);
        history("/dashboard")
        localStorage.setItem("token", response.data.token)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // const departments = [
  //   {
  //     key: 0,
  //     value: "CMPN",
  //   },
  //   {
  //     key: 1,
  //     value: "IT",
  //   },
  //   {
  //     key: 1,
  //     value: "EXTC",
  //   },
  // ];

  return (
    <ThemeProvider theme={theme}>
      <Container className="div" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={postRegister} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="name"
                  required
                  fullWidth
                  onChange={handleChange}
                  id="firstName"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  onChange={handleChange}
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-helper-label">Department *</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={user.department}
                  fullWidth
                  name="department"
                  label="Department *"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Department *</em>
                  </MenuItem>
                  <MenuItem value="cmpn">CMPN</MenuItem>
                  <MenuItem value="it">IT</MenuItem>
                  <MenuItem value="extc">EXTC</MenuItem>
                </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              onSubmit={postRegister}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                Already have an account?{" "}
                <Link to="/login" variant="body2">
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
