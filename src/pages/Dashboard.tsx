import { useEffect, useState } from 'react';
import { Navbar } from '../components/NavBar';
import { Sidebar } from '../components/SideBar';
import { DataTable } from '../components/DataTable';
import { DataItem } from '../types/DataItem';

// Mock data - in a real app, this would come from an API
const mockData: DataItem[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 2 === 0 ? 'Admin' : 'User',
  status: i % 3 === 0 ? 'inactive' : 'active',
}));

export function Dashboard() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    // Simulate API call
    setData(mockData);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto">
            <DataTable data={data} />
          </div>
        </main>
      </div>
    </div>
  );
}


// import { useEffect, useState } from 'react';
// import { Navbar } from '../components/NavBar';
// import { Sidebar } from '../components/SideBar';
// import { DataTable } from '../components/DataTable';
// import { DataItem } from '../types/DataItem';

// // Mock data - in a real app, this would come from an API
// const mockData: DataItem[] = Array.from({ length: 50 }, (_, i) => ({
//   id: i + 1,
//   name: `User ${i + 1}`,
//   email: `user${i + 1}@example.com`,
//   role: i % 2 === 0 ? 'Admin' : 'User',
//   status: i % 3 === 0 ? 'inactive' : 'active',
// }));

// export function Dashboard() {
//   const [data, setData] = useState<DataItem[]>([]);

//   useEffect(() => {
//     // Simulate API call
//     setData(mockData);
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
//         <Sidebar />
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex flex-1 flex-col">
//         {/* Navbar */}
//         <header className="w-full bg-white shadow-md">
//           <Navbar />
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 overflow-auto bg-gray-100 p-6">
//           <div className="max-w-7xl mx-auto">
//             <DataTable data={data} />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
