
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           
           <div className="w-11/12 mx-auto p-5">
           <Outlet></Outlet>
           </div>

           <Footer></Footer>

        </div>
    );
};

export default MainLayout;