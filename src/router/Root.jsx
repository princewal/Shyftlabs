import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Root