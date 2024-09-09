import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <Header />
        
        {/* Content */}
        <Content />
      </div>
    </div>
  );
};

export default App;
