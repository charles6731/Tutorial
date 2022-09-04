import React,{ useEffect } from "react";
import {useNavigate} from "react-router-dom"

function dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        // If users try to go dashboard with logging in redirect back to login
        if (!token) navigate("/login");
    }, []);
  return (
    <div>
      dashboard
    </div>
  )
}

export default dashboard
