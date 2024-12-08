import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    
    return (
        <div className="flex min-h-screen flex-col ">
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;