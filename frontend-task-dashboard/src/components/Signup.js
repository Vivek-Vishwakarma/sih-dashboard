import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import "../App.css"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel } from "@mui/material";
import axios from "axios";

const theme = createTheme();

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
  });

  const postRegister = async (e) => {
    e.preventDefault()
    console.log(user)
    await axios
    .post("http://localhost:5000/api/auth/register", user)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


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
          <Box
            component="form"
            onSubmit={postRegister}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
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
                  <select onChange={handleChange} name="department" id="dep">
                    <option>Department *</option>
                    <option value="it">IT</option>
                    <option value="cmpn">CMPN</option>
                    <option value="extc">EXTC</option>
                  </select>
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
                  autoComplete="new-password"
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
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
