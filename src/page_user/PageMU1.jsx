import React from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../componants_user/Component";
import PaymentOptions from "../componants_user/Payment";

export default function PageU31() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-200 font-sans">
            <Component4 
                title={"Payment Options"} 
                theme='black'
                onBackClick={() => navigate(-1)}
                />
            <PaymentOptions />
        </div>
    )
}