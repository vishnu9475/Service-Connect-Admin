import React from 'react'

import NotificationSettings110 from '../componants_user/NotificationSettings110';
import Component4 from '../componants_user/Component';

const Page_43 = () => {
    return (
        <div className="h-screen flex flex-col bg-[#FFFFFF]">
            <Component4
                title="NOTIFICATIONS SETTINGS"
                theme="black"
                showBack 
            />

            {/* Content area */}
            <div className="flex-1">
                <NotificationSettings110/>
            </div>
        </div>
        )
}

export default Page_43;