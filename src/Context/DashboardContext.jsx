import React, { createContext, useContext, useState } from "react";

// Create a Context
const DashboardContext = createContext();

// Custom Hook to use the Context
export const useDashboard = () => useContext(DashboardContext);

// Provider Component
export const DashboardProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "John Doe", avatar: "JD" });

    return (
        <DashboardContext.Provider value={{ user, setUser }}>
            {children}
        </DashboardContext.Provider>
    );
};
