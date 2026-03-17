import React from 'react'


import Component4 from '../componants_user/Component4'
import SecuritySettings111 from '../componants_user/SecuritySettings111'

const Page_44 = () => {
    return (
        <div className="h-screen flex flex-col bg-[#FFFFFF]">
            <Component4
                title="SECURITY"
                theme="black"
                showBack
            />

            {/* Content area */}
            <div className="flex-1">
                <SecuritySettings111/>
            </div>
        </div>
    )
}

export default Page_44