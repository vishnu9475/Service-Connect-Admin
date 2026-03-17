import React from "react";
import { useNavigate } from "react-router-dom";

import ReviewList from "../componants_user/ReviewList";
import Component4 from "../componants_user/Component4";

export default function PageU26() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <Component4
            title={"reviews"}
            theme="black"
            showSearch
            showFilter/>
            <ReviewList />
        </div>
    )
}