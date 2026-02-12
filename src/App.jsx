import React from 'react'
import { Routes, Route, } from "react-router-dom";

// vishnu
import DealerList from './page_admin/DealerList.jsx'
import DealerDetails from './page_admin/DealerDetails.jsx'
import AddDealer from './page_admin/AddDealer.jsx'
import ServiceProviderList from './page_admin/ServiceProviderList.jsx'
import ServiceProvider from './page_admin/ServiceProvider.jsx'
import AddServiceProvider from './page_admin/AddServiceProvider.jsx'
import AddNewService from './page_admin/AddNewService.jsx'
import RoleAndP from './page_admin/RoleAndP.jsx'
import ServiceProviderDetails from './page_admin/ServiceProviderDetails.jsx'
import Adminlogin from './page_admin/Adminlogin.jsx'
import RoleSelect from './page_admin/RoleSelect.jsx';

// neja
import Franchisee from "./page_admin/Franchisee";
import FranchiseeDetails from "./page_admin/FranchiseeDetails";
import FranchiseeForm from "./page_admin/FranchiseeForm";
import FranchiseeCategory from "./page_admin/FranchiseeCategory";
import ServiceHistory from "./page_admin/ServiceHistory";
import TransactionHistory from "./page_admin/TransactionHistory";
import TransactionView from "./page_admin/TransactionView";
import ServiceTypeDetails from "./page_admin/ServiceTypeDetails";
import Category from "./page_admin/Category";
import AddCategory from "./page_admin/AddCategory";

// alaka
import PayoutSchedule from "./page_admin/PayoutSchedule";
import PaymentSchedule from "./page_admin/PaymentSchedule";
import DealersDashboard from "./page_admin/DealersDashboard";
import DServiceProviderManagement from "./page_admin/DServiceProviderManagement";
import DServiceProvider from "./page_admin/DServiceProvider";
import DServiceProvidersVerificationForm from "./page_admin/DServiceProvidersVerificationForm";
import DpaymentRequestForm from "./page_admin/DPaymentRequestForm";
import FranchiseeDashboard from "./page_admin/FranchiseeDashboard";

// midhun
import SubCategory from './page_admin/SubCategory.jsx'
import NewSubCategory from './page_admin/NewSubCategory.jsx'
import AdsManagement from './page_admin/AdsManagement.jsx'
import Newadd from './page_admin/NewAdd.jsx'
import GeneralSettings from './page_admin/GeneralSettings.jsx'
import Notification from './page_admin/Notification.jsx'
import Financial from './page_admin/Financial.jsx'
import Accounts from './page_admin/Accounts.jsx'


// arjun
import Dashboard from './page_admin/Dashboard.jsx'
import Users from './page_admin/Users.jsx'
import Userdetails from './page_admin/Userdetails.jsx'
import Addnewuser from './page_admin/Addnewuser.jsx'
import AccBookingDetails from './page_admin/AccBookingDetails.jsx'
import OngBookingDetails from './page_admin/OngBookingDetails.jsx'
import ComBookingsDetails from './page_admin/ComBookingdetails.jsx'
import IncBookingDetails from './page_admin/IncBookingDetails.jsx'
import DecBookingDetails from './page_admin/DecBookingDetails.jsx'
import Adminprofile from './page_admin/Adminprofile.jsx'
import AccBookings from './page_admin/AccBookings.jsx'
import OngBookings from './page_admin/OngBookings.jsx'
import ComBookings from './page_admin/ComBookings.jsx'
import IncBookings from './page_admin/IncBookings.jsx'
import DecBookings from './page_admin/DecBookings.jsx'
import AdminMessages from './page_admin/AdminMessages.jsx'
import ComplaintsList from './page_admin/ComplaintsList.jsx'
import AllBookings from './page_admin/AllBookings.jsx'
import Chat from './page_admin/Smessage.jsx'




function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelect />} />
      <Route path="/admin" element={<Adminlogin />} />

      <Route path="/dealerlist" element={<DealerList />} />
      <Route path="/adddealer" element={<AddDealer />} />
      <Route path="/dealerdetails" element={<DealerDetails />} />
      <Route path="/serviceproviderList" element={<ServiceProviderList />} />
      <Route path="/addserviceprovider" element={<AddServiceProvider />} />
      <Route path="/serviceprovider" element={<ServiceProvider />} />
      <Route path="/serviceproviderdetails" element={<ServiceProviderDetails />} />
      <Route path="/addnewservice" element={<AddNewService />} />
      <Route path="/roleandp" element={<RoleAndP />} />

      <Route path="/franchisee" element={<Franchisee/>}/>
      <Route path="/franchiseedetails" element={<FranchiseeDetails/>}/>
      <Route path="/franchiseeform" element={<FranchiseeForm/>}/>
      <Route path="/franchiseecategory" element={<FranchiseeCategory/>}/>
      <Route path="/servicehistory" element={<ServiceHistory/>}/>
      <Route path="/transactionhistory" element={<TransactionHistory/>}/>
      <Route path="/transactionview" element={<TransactionView/>}/>
      <Route path="/servicetypedetails" element={<ServiceTypeDetails/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/addcategory" element={<AddCategory/>}/>

      <Route path="/payoutschedule" element={<PayoutSchedule />} />
      <Route path="/paymentschedule" element={<PaymentSchedule />} />
      <Route path="/dealersdashboard" element={<DealersDashboard/>} />
      <Route path="/dserviceprovidermanagement" element={<DServiceProviderManagement/>} />
      <Route path="/dserviceprovider" element={<DServiceProvider/>}/>
      <Route path="/dserviceprovidersverificationform" element={<DServiceProvidersVerificationForm/>} /> 
      <Route path="/dpaymentrequestform" element={<DpaymentRequestForm />} />
      <Route path="/franchiseedashboard" element={<FranchiseeDashboard />} />

      <Route path="/subcategory" element={<SubCategory />} />
      <Route path="/newsubcategory" element={<NewSubCategory />} />
      <Route path="/adsmanagement" element={<AdsManagement />} />
      <Route path="/newadd" element={<Newadd/>} />
      <Route path="/generalsettings" element={<GeneralSettings/>} />
      <Route path="/notification" element={<Notification/>}/>
      <Route path="/financial" element={<Financial/>} /> 
      <Route path="/accounts" element={<Accounts />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/userdetails" element={<Userdetails />} />
      <Route path="/addnewuser" element={<Addnewuser />} />
      <Route path="/combookingsdetails" element={<ComBookingsDetails/>} />
      <Route path="/incbookingdetails" element={<IncBookingDetails/>}/>
      <Route path="/decbookingdetails" element={<DecBookingDetails/>}/>
      <Route path="/ongbookingdetails" element={<OngBookingDetails/>}/>
      <Route path="/accbookingdetails" element={<AccBookingDetails/>}/>
      <Route path="/adminprofile" element={<Adminprofile/>} />
      <Route path="/accbookings" element={<AccBookings/>}/>
      <Route path="/ongBookings" element={<OngBookings/>} /> 
      <Route path="/combookings" element={<ComBookings />} />
      <Route path="/incbookings" element={<IncBookings />} />
      <Route path="/decbookings" element={<DecBookings/>} />
      <Route path="/adminmessages" element={<AdminMessages/>} />
      <Route path="/complaintslist" element={<ComplaintsList/>}/>
      <Route path="/allbookings" element={<AllBookings/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
  )
}

export default App
