import React from "react";
import Navbar from "./resumes/Navbar";

interface LayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;