import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import UserDetailBanner1 from "../componants/alaka/UserDetailBanner1";
import RegisteredServices from "../componants/alaka/RegisteredServices";
import AdsQuickView from "../componants/alaka/AdsQuickView";
import { useNavigate } from "react-router-dom";

function ServiceProviderVerificationPage() {
  const navigate = useNavigate();

  const handleVerify = () => {
    const confirmVerify = window.confirm(
      "Are you sure you want to VERIFY this service provider?"
    );

    if (!confirmVerify) return;

    console.log("Service Provider Verified");

    // ✅ DIRECT NAVIGATION (NO ALERT)
    navigate("/DserviceProvidersVerificationForm");
  };

  const handleDecline = () => {
    const confirmDecline = window.confirm(
      "Are you sure you want to DECLINE this service provider?"
    );

    if (!confirmDecline) return;

    console.log("Service Provider Declined");
  };

  return (
    <div className="min-h-screen bg-[#F3F4FF] overflow-x-hidden">

      <SideMenu />

      <main className="ml-0 lg:ml-[260px] transition-all duration-300">
        <AdminMain title="Service Provider Verification">

          <div className="max-w-[900px] mx-auto px-4 py-6 space-y-6">

            <UserDetailBanner1 />
            <RegisteredServices />
            <AdsQuickView />

            <div className="space-y-3 pt-4">
              <button
                onClick={handleVerify}
                className="w-full h-[48px] bg-[#0F6D1D] text-white font-semibold rounded-md"
              >
                VERIFY
              </button>

              <button
                onClick={handleDecline}
                className="w-full h-[48px] bg-[#D83434] text-white font-semibold rounded-md"
              >
                DECLINE
              </button>
            </div>

          </div>
        </AdminMain>
      </main>

    </div>
  );
}

export default ServiceProviderVerificationPage;
