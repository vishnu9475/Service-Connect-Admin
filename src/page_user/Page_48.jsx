import React from 'react'
// import InvitationList_68 from '../componants_service/invitationList_68';
import Component4 from '../componants_user/Component4';
import Invite from "../componants_user/Invite"

const Page_48 = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-300">
            <Component4
                title="INVITE FRIEND"
                theme="black"
                showBack
                
            />

            {/* Content area */}
            <div className="flex-1 ">
                {/* <InvitationList_68 /> */}
                <Invite/>

            </div>
        </div>)
}

export default Page_48;