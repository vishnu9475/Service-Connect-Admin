import React from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "../componants_service/reshma/AppHeader";
import ServiceRequest from "../componants_service/reshma/ServiceRequest1";

export default function PageU28() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-200 font-sans">
            <AppHeader
                title={"Service Details"} 
                theme='black'
                onBackClick={() => navigate("/page27")}
            />
            <ServiceRequest />
        </div>
    )
}