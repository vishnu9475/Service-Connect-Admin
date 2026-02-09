import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import PaymentSchedule from "../componants/alaka/PaymentSchedule";
import PaymentForm from "../componants/alaka/PaymentForm";


function Payoutschedule() {
 
  return (
    <div className="min-h-screen bg-[#F3F4FF]">

      {/* SIDEBAR */}
      <SideMenu />

      {/* MAIN CONTENT */}
      <main className="lg:ml-[260px]">
        <AdminMain
          title="Payout Schedule"
          userName="Nabila"
          userRole="Admin"
        >
          {/*  ONE WIDTH CONTROLLER */}
          <div className="max-w-3xl mx-auto space-y-6">

            <PaymentSchedule />
            <PaymentForm />

          </div>
        </AdminMain>
      </main>

    </div>
     
  );
}

export default Payoutschedule;
