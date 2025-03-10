// MainLayout.js
import React from 'react';

function Navbar() {
  return (
    <div className="bg-gray-800 text-white flex items-center p-4">
      <h1 className="text-lg font-bold">Logo</h1>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-gray-100 p-4 border-r border-gray-300">
      <h2 className="text-xl font-semibold mb-4">Documents</h2>
      <ul className="space-y-2">
        <li className="hover:text-blue-600 cursor-pointer">Document 1</li>
        <li className="hover:text-blue-600 cursor-pointer">Document 2</li>
        <li className="hover:text-blue-600 cursor-pointer">Document 3</li>
      </ul>
    </div>
  );
}

function Body({ children }) {
  return (
    <div className="p-4">
      { children }
    </div>
  );
}

function MainLayout({ children }) {
  return (
    <div className="grid grid-rows-[60px_1fr] grid-cols-[250px_1fr] h-screen">
      <div className="row-span-1 col-span-2">
        <Navbar />
      </div>
      <div className="row-span-2 col-span-1">
        <Sidebar />
      </div>
      <div className="row-span-2 col-span-1">
        <Body children={ children }/>
      </div>
    </div>
  );
}

export default MainLayout;
