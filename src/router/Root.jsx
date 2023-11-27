import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <footer className="footer">
        <div>
          Made by Waleed for Shyft Labs. 
        </div>
      </footer>
    </div>
  )
}

export default Root