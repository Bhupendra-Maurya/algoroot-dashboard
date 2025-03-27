// import { LayoutDashboard, User, FileText, Settings } from 'lucide-react';
// import { NavLink } from 'react-router-dom';

// export function Sidebar() {
//   return (
//     <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col justify-between">
//       <nav className="space-y-2">
//         <NavLink
//           to="/dashboard"
//           className={({ isActive }) =>
//             `flex items-center space-x-2 p-2 rounded-lg ${
//               isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
//             }`
//           }
//         >
//           <LayoutDashboard className="h-5 w-5" />
//           <span>Dashboard</span>
//         </NavLink>

//         <NavLink
//           to="/profile"
//           className={({ isActive }) =>
//             `flex items-center space-x-2 p-2 rounded-lg ${
//               isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
//             }`
//           }
//         >
//           <User className="h-5 w-5" />
//           <span>Profile</span>
//         </NavLink>

//         <NavLink
//           to="/reports"
//           className={({ isActive }) =>
//             `flex items-center space-x-2 p-2 rounded-lg ${
//               isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
//             }`
//           }
//         >
//           <FileText className="h-5 w-5" />
//           <span>Reports</span>
//         </NavLink>
//       </nav>

//       {/* Settings Button at the Bottom */}
//       <div className="mt-auto">
//         <NavLink
//           to="/settings"
//           className={({ isActive }) =>
//             `flex items-center space-x-2 p-2 rounded-lg ${
//               isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
//             }`
//           }
//         >
//           <Settings className="h-5 w-5" />
//           <span>Settings</span>
//         </NavLink>
//       </div>
//     </aside>
//   );
// }



// import { LayoutDashboard, User, FileText, Settings, Menu } from "lucide-react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// export function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile Hamburger Button */}
//       <button
//         className="md:hidden p-2 fixed top-4 left-4 z-50 bg-gray-800 text-white rounded-lg"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <Menu className="h-6 w-6" />
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`bg-gray-800 text-white fixed md:relative z-40 min-h-screen w-64 p-4 flex flex-col justify-between transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0`}
//       >
//         {/* Navigation Links */}
//         <nav className="space-y-2">
//           <NavLink
//             to="/dashboard"
//             className={({ isActive }) =>
//               `flex items-center space-x-2 p-2 rounded-lg ${
//                 isActive ? "bg-gray-700" : "hover:bg-gray-700"
//               }`
//             }
//           >
//             <LayoutDashboard className="h-5 w-5" />
//             <span>Dashboard</span>
//           </NavLink>

//           <NavLink
//             to="/profile"
//             className={({ isActive }) =>
//               `flex items-center space-x-2 p-2 rounded-lg ${
//                 isActive ? "bg-gray-700" : "hover:bg-gray-700"
//               }`
//             }
//           >
//             <User className="h-5 w-5" />
//             <span>Profile</span>
//           </NavLink>

//           <NavLink
//             to="/reports"
//             className={({ isActive }) =>
//               `flex items-center space-x-2 p-2 rounded-lg ${
//                 isActive ? "bg-gray-700" : "hover:bg-gray-700"
//               }`
//             }
//           >
//             <FileText className="h-5 w-5" />
//             <span>Reports</span>
//           </NavLink>
//         </nav>

//         {/* Settings Button */}
//         <div className="mt-auto">
//           <NavLink
//             to="/settings"
//             className={({ isActive }) =>
//               `flex items-center space-x-2 p-2 rounded-lg ${
//                 isActive ? "bg-gray-700" : "hover:bg-gray-700"
//               }`
//             }
//           >
//             <Settings className="h-5 w-5" />
//             <span>Settings</span>
//           </NavLink>
//         </div>
//       </aside>

//       {/* Overlay for mobile view */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </>
//   );
// }


import { LayoutDashboard, User, FileText, Settings, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2 fixed top-6 left-6 z-50 bg-gray-800 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <aside
        className={`bg-gray-800 text-white fixed md:relative z-40 min-h-screen w-64 p-6 flex flex-col justify-between transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="mt-10 md:mt-0">
          <nav className="space-y-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-lg ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-lg ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </NavLink>

            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-lg ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              <FileText className="h-5 w-5" />
              <span>Reports</span>
            </NavLink>
          </nav>
        </div>

        <div className="mt-auto">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded-lg ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </NavLink>
        </div>
      </aside>

      {isOpen && (
        <div
          // className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
