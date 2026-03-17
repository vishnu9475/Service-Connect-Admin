import InvitationList from '../componants_service/yaswanth/InvitationList';
import AppHeader from '../componants_service/yaswanth/AppHeader'


const Missing153 = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-300">
            <AppHeader
                title="INVITE FRIEND"
                theme="black"
                showBack
                showFilter
                showSearch
            />

            {/* Content area */}
            <div className="flex-1 ">
                <InvitationList />

            </div>
        </div>)
}

export default Missing153;