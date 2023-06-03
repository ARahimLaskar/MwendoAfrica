import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function PrivateRoute({ children }) {
  const isLogin = useSelector((store) => {
    return store.isLogin;
  });
  const navigate = useNavigate();

  if (!isLogin) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Login To Continue!",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        return navigate("/");
      }
    });
  } else {
    return children;
  }
}
