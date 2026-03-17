import React from "react";
import Component4 from "../componants_user/Component4";
import JobLists from "../componants_user/JobList";
import BottomNavBar from "../componants_user/BottomNavBar";
import { useNavigate } from "react-router-dom";

export default function PageU27() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <Component4 
                title={"Jobs"} 
                theme='black' 
                showSearch='true'
                    
            />
            <JobLists />
            < BottomNavBar />
        </div>
    )
}