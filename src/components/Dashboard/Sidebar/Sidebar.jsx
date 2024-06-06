// import { useState } from 'react'
// import { GrLogout } from 'react-icons/gr'
// import { FcAdvertising, FcSettings } from 'react-icons/fc'
// import { AiFillMedicineBox, AiOutlineBars } from 'react-icons/ai'
// import { NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { TbCategory, TbPaywall, TbReportAnalytics, TbUsers } from 'react-icons/tb'
// import useAuth from '../../../hooks/useAuth'
// import useRole from '../../../hooks/useRole'

// const Sidebar = () => {
//   const { logOut } = useAuth()
//   const [role, isLoading] = useRole()
//   const [isActive, setActive] = useState(false)

//   // Sidebar Responsive Handler
//   const handleToggle = () => {
//     setActive(!isActive)
//   }
//   return (
//     <>
//       {/* Small Screen Navbar */}
//       <div className='bg-green-50 text-gray-800 flex justify-between md:hidden'>
//         <div>
//           <div className='block cursor-pointer p-4 font-bold'>
//             <Link to='/'>
//               <img
//                 // className='hidden md:block'
//                 src='https://i.ibb.co/4ZXzmq5/logo.png'
//                 alt='logo'
//                 width='100'
//                 height='100'
//               />
//             </Link>
//           </div>
//         </div>

//         <button
//           onClick={handleToggle}
//           className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
//         >
//           <AiOutlineBars className='h-5 w-5' />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-green-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
//           isActive && '-translate-x-full'
//         }  md:translate-x-0  transition duration-200 ease-in-out`}
//       >
//         <div>
//           <div>
//             <div className='w-full hidden md:flex px-6 py-2 shadow-lg rounded-lg justify-center items-center bg-green-100 mx-auto'>
//               <Link to='/'>
//               <h1 className="text-3xl"><span className="md:text-6xl text-green-700">M</span>edi<span className="md:text-5xl text-green-600">Snap</span></h1>
//               </Link>
//             </div>
//           </div>

//           {/* Nav Items */}
//           <div className='flex flex-col justify-between flex-1 mt-6'>
//             {/* Conditional toggle button here.. */}

//             {/*  Menu Items */}
//             <nav>

//               {/* Manage Users */}
//               { role === 'Admin' && <NavLink
//               to='manageUsers'
//               className={({ isActive }) =>
//                 `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//                   isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
//                 }`
//               }
//             >
//               <TbUsers className='w-5 h-5' />

//               <span className='mx-4 font-medium'>Manage Users</span>
//             </NavLink>
//               }

//               {/* Category */}
//               <NavLink
//                 to='category'
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//                     isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
//                   }`
//                 }
//               >
//                 <TbCategory className='w-5 h-5' />

//                 <span className='mx-4 font-medium'>Category</span>
//               </NavLink>
//               {/* Payment */}
//               <NavLink
//                 to='payment'
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//                     isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
//                   }`
//                 }
//               >
//                 <TbPaywall className='w-5 h-5' />

//                 <span className='mx-4 font-medium'>Payment Management</span>
//               </NavLink>
//               {/* Sales Report */}
//               <NavLink
//                 to='salesReport'
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//                     isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
//                   }`
//                 }
//               >
//                 <TbReportAnalytics className='w-5 h-5' />

//                 <span className='mx-4 font-medium'>Sales Report</span>
//               </NavLink>
//               {/* Advertise */}
//               <NavLink
//                 to='advertise'
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//                     isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
//                   }`
//                 }
//               >
//                 <FcAdvertising className='w-5 h-5' />

//                 <span className='mx-4 font-medium'>Advertise</span>
//               </NavLink>

//               {/* Salers Menu */}

//  {/* Manage Medicines */}
//               <NavLink
//                 to='manageMedicines'
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//                     isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
//                   }`
//                 }
//               >
//                 <AiFillMedicineBox className='w-5 h-5' />

//                 <span className='mx-4 font-medium'>Manage Medicines</span>
//               </NavLink>
//  {/* Payment History */}
//               <NavLink
//                 to='paymentHistory'
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//                     isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
//                   }`
//                 }
//               >
//                 <TbPaywall className='w-5 h-5' />

//                 <span className='mx-4 font-medium'>Payment History</span>
//               </NavLink>
//  {/* Ask For Advertisement */}
//               <NavLink
//                 to='askForAdvertisement'
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//                     isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
//                   }`
//                 }
//               >
//                 <FcAdvertising className='w-5 h-5' />

//                 <span className='mx-4 font-medium'>Ask For Advertisement</span>
//               </NavLink>

//               {/* User Menu */}

//                {/* Payment History */}
//                <NavLink
//                 to='userPaymentHistory'
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//                     isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
//                   }`
//                 }
//               >
//                 <TbPaywall className='w-5 h-5' />

//                 <span className='mx-4 font-medium'>User Payment History</span>
//               </NavLink>

//             </nav>
//           </div>
//         </div>

//         <div>
//           <hr />

//           {/* Profile Menu */}
//           <NavLink
//             to='/dashboard/profile'
//             className={({ isActive }) =>
//               `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//                 isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
//               }`
//             }
//           >
//             <FcSettings className='w-5 h-5' />

//             <span className='mx-4 font-medium'>Profile</span>
//           </NavLink>
//           <Link to='/login'
//             onClick={logOut}
//             className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
//           >
//             <GrLogout className='w-5 h-5' />

//             <span className='mx-4 font-medium'>Logout</span>
//           </Link>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Sidebar

import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
// import ToggleBtn from '../../shared/Button/ToggleBtn'
import useRole from "../../../hooks/useRole";
import MenuItem from "./Menu/MenuItem";
import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";
import SellerMenu from "./Menu/SellerMenu";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [role, isLoading] = useRole();
  const [isActive, setActive] = useState(false);
  // const [toggle, setToggle] = useState(true)
  console.log(role, isLoading);
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  // const toggleHandler = event => {
  //   setToggle(event.target.checked)
  // }

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
            <h1 className="text-3xl">
                  <span className="md:text-6xl text-green-700">M</span>edi
                  <span className="md:text-5xl text-green-600">Snap</span>
                </h1>
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
              <Link to="/">
                <h1 className="text-3xl">
                  <span className="md:text-6xl text-green-700">M</span>edi
                  <span className="md:text-5xl text-green-600">Snap</span>
                </h1>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}
            {/* {role === 'seller' && (
              <ToggleBtn toggleHandler={toggleHandler} toggle={toggle} />
            )} */}

            {/*  Menu Items */}
            <nav>
              {role === "Admin" && <AdminMenu />}

              {/* Statistics */}
              {/* <MenuItem
                label='Statistics'
                address='/dashboard'
                icon={BsGraphUp}
              /> */}
              {role === "User" && <UserMenu />}
              {role === "Seller" && <SellerMenu />}
              {/* ? (
                toggle ? (
                  <SellerMenu />
                ) : (
                  <UserMenu />
                )
              ) : undefined} */}
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
