import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import MenuItem from "./Menu/MenuItem";
import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";
import SellerMenu from "./Menu/SellerMenu";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [role, isLoading] = useRole();
  const [isActive, setActive] = useState(false);
  console.log(role, isLoading);
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };


  if(isLoading) return <h1>loading</h1>
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            {/* <Link to="/">
            <h1 className="text-3xl">
                  <span className="text-4xl text-green-700">M</span>edi
                  <span className=" text-green-600">Snap</span>
                </h1>
            </Link> */}

            <Link to={"/"} className="text-3xl font-extrabold">
            <div className="flex justify-center items-center">
              <div>
                <span>
                  <img
                    className="w-14 h-10"
                    src="https://i.ibb.co/PwmGpGb/medi-snap-logo.jpg"
                    alt=""
                  />
                </span>
              </div>
              <div>
                <span className="text-4xl text-green-700">M</span>edi
                <span className=" text-green-600">Snap</span>
              </div>
            </div>
          </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-6 py-2 shadow-lg rounded-lg justify-center items-center bg-green-100 mx-auto">
              {/* <Link to="/">
                <h1 className="text-3xl font-extrabold">
                  <span className="text-4xl text-green-700">M</span>edi
                  <span className=" text-green-600">Snap</span>
                </h1>
              </Link> */}

              <Link to={"/"} className="text-3xl font-extrabold">
            <div className="flex justify-center items-center">
              <div>
                <span>
                  <img
                    className="w-14 h-10"
                    src="https://i.ibb.co/PwmGpGb/medi-snap-logo.jpg"
                    alt=""
                  />
                </span>
              </div>
              <div>
                <span className="text-4xl text-green-700">M</span>edi
                <span className=" text-green-600">Snap</span>
              </div>
            </div>
          </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 ">
          
          <Link to={"/"} className="text-3xl font-extrabold md:hidden">
            <div className="flex justify-center items-center">
              <div>
                <span>
                  <img
                    className="w-14 h-10"
                    src="https://i.ibb.co/PwmGpGb/medi-snap-logo.jpg"
                    alt=""
                  />
                </span>
              </div>
              <div>
                <span className="text-4xl text-green-700">M</span>edi
                <span className=" text-green-600">Snap</span>
              </div>
            </div>
          </Link>
            {/*  Menu Items */}
            <nav>
              {role === "admin" && <AdminMenu />}

              {/* Statistics */}
              {/* <MenuItem
                label='Statistics'
                address='/dashboard'
                icon={BsGraphUp}
              /> */}
              {role === "user" && <UserMenu />}
              {role === "seller" && <SellerMenu />}
            
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <MenuItem
            label="Profile"
            address="/dashboard/profile"
            icon={FcSettings}
          />

          <Link
            to="/login"
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
