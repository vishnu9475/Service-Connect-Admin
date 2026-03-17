import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceRequestDetails from "../componants_user/ServiceRequestDetails";
import Component4 from "../componants_user/Component4";

export default function PageU29() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <Component4 title={"Complaint Form"} theme="black" />
            <ServiceRequestDetails />
        </div>
    )
}