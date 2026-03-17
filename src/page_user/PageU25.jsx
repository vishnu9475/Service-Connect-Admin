import React from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../componants_user/Component";
import ReviewForm from "../componants_user/ReviewForm";

export default function PageU25() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <Component4 
                title={"Review"} 
                theme='black'
                
            />
            <ReviewForm />
        </div>
    )
}