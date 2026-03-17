import React from 'react'
// import AppHeader_4 from '../componants_service/AppHeader_4';
// import Faq_50 from '../componants_service/Faq_50';
import HelpCenter_49 from '../componants_user/HelpCenter_49';
import Component4 from '../componants_user/Component4';

const Page_41 = () => {
    return (
        // <div className="relative ">
        //     <AppHeader_4 title="Help Center"
        //         theme="black"
        //         showBack
        //         showSearch
        //         showMenu />

        //         {/* <Faq_50/> */}
        //         <HelpCenter_49/>
        // </div>

        <div className="h-screen flex flex-col bg-gray-100">
            <Component4
            title="Help Center"
                theme="black"
                showBack
                showSearch
                showMenu/>

            {/* Content area */}
            <div className="flex-1 overflow-y-auto">
                <HelpCenter_49 />
            </div>
        </div>
    )
}

export default Page_41;