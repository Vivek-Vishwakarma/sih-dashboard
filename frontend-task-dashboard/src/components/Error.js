import React from 'react'
import Alert from '@mui/material/Alert';
import "../App.css"
const Error = ({message}) => {
  return (
    <>
        <Alert className="alert" variant="filled" severity="error">{message}</Alert>
    </>
  )
}

export default Error