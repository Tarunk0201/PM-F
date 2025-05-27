// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-[#8647b9]  text-white px-4 md:px-8 py-3 shadow-md flex items-center justify-between flex-wrap">
//       <div className="flex items-center w-[600px] px-4">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <img src="/logo.png" alt="Company Logo" className="h-10 w-10" />
//         </div>

//         {/* Search bar */}
//         <div className="flex-1 ml-42">
//           <div className="relative w-full max-w-none">
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-white bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition duration-200"
//             />
//           </div>
//         </div>
//       </div>


//       {/* Right: User Info */}
//       <div
//         className="relative flex items-center gap-2 cursor-pointer flex-shrink-0"
//         onMouseEnter={() => setDropdownOpen(true)}
//         onMouseLeave={() => setDropdownOpen(false)}
//       >
//         <CgProfile size={25} />
//         <span className=" font-sans hidden md:inline">Monu Parmar</span>

//         {/* Dropdown */}
//         <div
//           className={`absolute top-12 right-0 bg-white text-black rounded-md shadow-lg w-40 z-10 transition-all duration-300 ease-in-out ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
//             }`}
//         >
//           <ul className="flex flex-col p-2">
//             <li className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer">
//               Profile
//             </li>
//             <li className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer">
//               Logout
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-[#8647b9] text-white px-4 md:px-8 py-3 shadow-md flex items-center justify-between flex-wrap">
//       {/* Left side: Logo + Search */}
//       <div className="flex items-center flex-grow min-w-0">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <img src="/logo.png" alt="Company Logo" className="h-10 w-10" />
//         </div>   
//       </div>

//       <div className="flex flex-grow ">
//         {/* Search bar */}
//       <div className="flex ml-50 min-w-0 max-w-lg">
//           <div className="relative w-full max-w-full">
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-white bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition duration-200 min-w-0"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Right side: User info */}
//       <div
//         className="relative flex items-center gap-2 cursor-pointer flex-shrink-0 ml-4"
//         onMouseEnter={() => setDropdownOpen(true)}
//         onMouseLeave={() => setDropdownOpen(false)}
//       >
//         <CgProfile size={25} />
//         <span className="font-sans hidden sm:inline">Monu Parmar</span>

//         {/* Dropdown */}
//         <div
//           className={`absolute top-12 right-0 bg-white text-black rounded-md shadow-lg w-40 z-10 transition-all duration-300 ease-in-out ${
//             dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
//           }`}
//         >
//           <ul className="flex flex-col p-2">
//             <li className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer">
//               Profile
//             </li>
//             <li className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer">
//               Logout
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";

// const SIDEBAR_WIDTH = 220; // in px, adjust as needed

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     // <nav
//     //   className="bg-[#8647b9] text-white px-4 md:px-8 py-3 shadow-md flex items-center justify-between relative"
//     //   style={{ minHeight: "56px" }} // to prevent collapse because of absolute children
//     // >
//     <nav
//   className="fixed top-0 left-0 w-full h-16 bg-[#8647b9] z-40 flex items-center px-4 md:px-8 shadow-md"
// >

//       {/* Logo fixed at left */}
//       <div
//         className="flex items-center flex-shrink-0 absolute left-0 top-0 h-full px-4"
//         style={{ width: SIDEBAR_WIDTH }}
//       >
//         <img src="/logo.png" alt="Company Logo" className="h-10 w-10" />
//       </div>

//       {/* Search bar pushed right by sidebar width */}
//       <div
//         className="flex-grow max-w-xl ml-auto min-w-0"
//         style={{ marginLeft: SIDEBAR_WIDTH + 16 }} // +16 for some extra spacing
//       >
//         <div className="relative w-full min-w-0">
//           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-white bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition duration-200"
//           />
//         </div>
//       </div>

//       {/* Right side: User info */}
//       <div
//         className="relative flex items-center gap-2 cursor-pointer flex-shrink-0 ml-4"
//         onMouseEnter={() => setDropdownOpen(true)}
//         onMouseLeave={() => setDropdownOpen(false)}
//       >
//         <CgProfile size={25} />
//         <span className="font-sans hidden sm:inline">Monu Parmar</span>

//         {/* Dropdown */}
//         <div
//           className={`absolute top-12 right-0 bg-white text-black rounded-md shadow-lg w-40 z-10 transition-all duration-300 ease-in-out ${
//             dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
//           }`}
//         >
//           <ul className="flex flex-col p-2">
//             <li className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer">
//               Profile
//             </li>
//             <li className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer">
//               Logout
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const SIDEBAR_WIDTH = 220;

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-[#8647b9] z-40 px-4 md:px-8 shadow-md">
      <div className="flex items-center justify-between w-full">
        {/* Logo fixed at left */}
        <div
          className="flex items-center flex-shrink-0 absolute left-0 top-0 h-full px-4"
          style={{ width: SIDEBAR_WIDTH }}
        >
          <img src="/logo.png" alt="Company Logo" className="h-10 w-10" />
        </div>

        {/* Search bar pushed right by sidebar width */}
        <div
          className="flex-grow mt-3 max-w-xl ml-auto min-w-0"
          style={{ marginLeft: SIDEBAR_WIDTH + 16 }}
        >
          <div className="relative w-full min-w-0">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-white bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>
        </div>

        {/* Right side: User info */}
        <div
          className="relative mt-3 flex items-center gap-2 cursor-pointer flex-shrink-0 ml-4"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <CgProfile size={25}  />
          <span className="font-sans hidden text-white sm:inline">Monu Parmar</span>

          {/* Dropdown */}
          <div
            className={`absolute top-12 right-0 bg-white text-black rounded-md shadow-lg w-40 z-10 transition-all duration-300 ease-in-out ${
              dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul className="flex flex-col p-2">
              <li className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer">
                Profile
              </li>
              <li className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
