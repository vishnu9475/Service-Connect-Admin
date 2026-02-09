import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import PaymentRequestForm from "../componants/alaka/PaymentRequestForm";

function PaymentRequestPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF] overflow-x-hidden">

      
      <SideMenu />

      
      <main className="ml-0 lg:ml-[260px] transition-all duration-300">
        <AdminMain
          title="Payment Request Form"
          userName="Abc"
          userRole="Admin"
        >
         
          <div className="px-6 py-8">

            
            <div className="max-w-3xl mx-auto">
              <PaymentRequestForm />
            </div>

          </div>
        </AdminMain>
      </main>

    </div>
  );
}

export default PaymentRequestPage;
