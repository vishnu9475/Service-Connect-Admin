import React from "react";
import { useNavigate } from "react-router-dom";

import ServiceRequest from "../componants_user/ServiceRequest1";
import Component4 from "../componants_user/Component4";

export default function PageU28() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            
            <Component4
            title={"Service Details"}
            theme="black"/>
            <div className="py-5 px-4">
                <ServiceRequest />
            </div>
            
        </div>
    )
}