import React from 'react'
import { Routes, Route, } from "react-router-dom";

// Admin side

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
import SuperAdminList from "./page_admin/SuperAdminList.jsx";
import AddSuperAdmin from "./page_admin/AddSuperAdmin.jsx"

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
import SubscribeDetails from './page_admin/SubscribeDetails.jsx' 
import SubscribeEditPage from './page_admin/SubscribeEditPage.jsx'

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

// Service side
//AYUSH
// import StartPage from "./componants_service/ayush/Pages/S01_LAUNCHING"
import StartPage from "./page_service/S01_LAUNCHING.jsx"
import Login from "./page_service/S02_LOGIN.jsx"
import CreateNewPassword from "./page_service/S03_CREATE_NEW_PIN";
import OTPVerification from "./page_service/S04_OTP";
import SuccessRedirect from "./page_service/S08_CONGRATULATIONS";
import Profile from "./page_service/S06_FILL_YOUR_PROFILE";

import ForgotPassword from "./page_service/S09_FORGOT PASSWORD";
import ForgotOtpVerification  from "./page_service/S10_VERIFY_FORGOT_PASSWORD";
import ConfirmPassword from "./page_service/S11_CREATE_NEW_PASSWORD"
import ForgotSuccessRedirect from "./page_service/Page61.jsx";


//reshma

import AccountSuccess from "./page_service/S12_Congradulations.jsx"
import Page62 from "./page_service/S13_PaymentMethods.jsx"
import S17_E_RECIEPT_EDIT from "./page_service/S17_E_RECIEPT_EDIT.jsx";
import S14_AddNewCard from "./page_service/S14_AddNewCard.jsx";
import S18_CheckoutSuccess from "./page_service/S18_CheckOutSuccess.jsx";
import S19_Dashboard from "./page_service/S19_Dashboard.jsx";
import S20_MyServices from "./page_service/S20_MyServices.jsx";
import S22_Requests from "./page_service/S22_Requests.jsx";
import S25_Bookings_Appoinments from "./page_service/S25_Bookings_Appoinments.jsx";
import S27_ActiveServices from "./page_service/S27_ActiveServices.jsx";
import Page14 from "./page_service/U14_Search.jsx"

//yaswanth
import PageS41 from './page_service/PageS41'
import PageS42 from './page_service/PageS42'
import PageS43 from './page_service/PageS43'
import PageS44 from './page_service/PageS44'
import PageS45 from './page_service/PageS45'
import PageS46 from './page_service/PageS46'
import PageS47 from './page_service/PageS47'
import PageS48 from './page_service/PageS48'
import PageS49 from './page_service/PageS49'
import PageS51 from './page_service/PageS51'
import Page145 from './page_service/Page145'
import Page146 from './page_service/Page146'

// import PageS52 from './page_service/PageS52'
// import PageS22 from './page_service/PageS22'
// import PageS20 from './page_service/PageS20'
// import PageS30 from './page_service/PageS30'
// import PageS28 from './page_service/PageS28'
// import PageS34 from './page_service/PageS34'

import PageS38 from './page_service/PageS38'
import PageS39 from './page_service/PageS39'
import PageS37 from './page_service/PageS37'
import Missing147 from './page_service/Missing147'
import Missing148 from './page_service/Missing148'
import Missing149 from './page_service/Missing149'
import Missing150 from './page_service/Missing150'
import Missing151 from './page_service/Missing151'
import Missing152_logout from './page_service/Missing152_logout'
import Missing153 from './page_service/Missing153'
import Missing154 from './page_service/Missing154'
import Home from './page_service/Home'


{/* new changes  */}
import ServiceList from "./componants_service/yaswanth/ServiceList";
import JobLists from "./componants_service/yaswanth/JobLists";

//adhil
import S21_EditService from "./page_service/S21_EditService.jsx";
import S23_RequestService from "./page_service/S23_RequestService.jsx";
import S26_ServiceDetailss from "./page_service/S26_ServiceDetailss.jsx";
import S28_Form from "./page_service/S28_Form.jsx";
import S31_ServiceLeadDetails from "./page_service/S31_ServiceLeadDetails.jsx";
import Add_Lead_Balance_Sevice from "./page_service/Add_Lead_Balance_Service.jsx";
import S29_Form from "./page_service/S29_Form.jsx";
import S30_Leads from "./page_service/S30_Leads.jsx";
import Page81 from "./page_service/S32_ViewContact.jsx"; ``
import S24_AcceptandInvoice from "./page_service/S24_AcceptandInvoice.jsx";
import S34_Financal from "./page_service/S34_Financal.jsx";
import S35__TRANSACTIONS from "./page_service/S35__TRANSACTIONS.jsx";
import S36_COMPLAINTS from "./page_service/S36_COMPLAINTS.jsx";

//Arjun 
import S52Security from "./page_service/S52_SECURITY";
import S53InboxChats from "./page_service/S53_INDOX_CHATS";
import S54InboxChatsMessages from "./page_service/S54_INDOX_CHATS_MESSAGES";
import S404ErrorPage from "./page_service/S404_Error_Page";
import S403AccessDenied from "./page_service/S403_Access_Denied";

import SResetPassword from "./page_service/SRESET_PASSWORD";
import SVerifyResetPassword from "./page_service/SVERIFY_RESET_PASSWORD";
import SResetNewPassword from "./page_service/SRESET_NEW_PASSWORD";
import SResetCongratulations from "./page_service/SRESET_CONGRATULATIONS";
import Page63 from "./page_service/S15_PaymentMethods.jsx";
import Ereciept from "./componants_service/reshma/Ereciept.jsx";
import Page16 from "./page_service/U16_Filter.jsx";
import SuccessMessage from "./componants_service/reshma/SuccessMessage.jsx";
import Page11 from "./page_service/Frame10000826.jsx";
import RegisterService from "./page_service/S07_REGISTER_SERVICE.jsx";
import PageU28 from "./page_service/Missing149";

// User Side
// Original Page Imports
import U18_Request_Service from "./page_user/U18_Request_Service";
import U17_PROVIDER_PROFILE from "./page_user/U17_PROVIDER_PROFILE";
import U19Bookings from "./page_user/U19_Bookings";
import U20_Booking_Details from "./page_user/U20_Booking_Details";
import U21_PAYMENT_METHODS from "./page_user/U21_PAYMENT_METHODS";
import U21_B_ADD_NEW_CARD from "./page_user/U21_B_ADD_NEW_CARD";
import U22PaymentSuccessMessage from "./page_user/U22_PAYMENT_SUCCESS_MESSAGE";
import U23EReceipt from "./page_user/U23_E_RECEIPT";

// New Page Imports
import Page1 from "./page_user/Page1";
import Page2 from "./page_user/Page2";
import Page3 from "./page_user/Page3";
import Page4 from "./page_user/Page4";
import Page5 from "./page_user/Page5";
import Page6 from "./page_user/Page6";
import Page7 from "./page_user/Page7";
import Page8 from "./page_user/Page8";
import Sucess from "./page_user/Sucess";

// New "Pages-dha" Imports                    added exrea digits due dupicates
import Page111 from "./page_user/Page11.jsx"; 
import Page12 from "./page_user/Page12.jsx";
import Page13 from "./page_user/Page13.jsx";
import Page144 from "./page_user/Page14.jsx";
import Page15 from "./page_user/Page15.jsx";
import Page166 from "./page_user/Page16.jsx";
import Page17 from "./page_user/SirviceprovidersPage.jsx";
import Page18 from "./page_user/SirvicesPage.jsx";

// New Pages by Abhishek
import PageU24 from "./page_user/PageU24.jsx";
import PageU25 from "./page_user/PageU25.jsx";
import PageU26 from "./page_user/PageU26.jsx";
import PageU27 from "./page_user/PageU27.jsx";
import PageU288 from "./page_user/PageU28.jsx";
import PageU29 from "./page_user/PageU29.jsx";
import PageU30 from "./page_user/PageU30.jsx";
import PageU31 from "./page_user/PageU31.jsx";
import PageMU1 from "./page_user/PageMU1.jsx";
import PageU32 from "./page_user/PageU32.jsx";
import PageU33 from "./page_user/PageU33.jsx";
import PageU37 from "./page_user/PageU37.jsx";
import PageM14 from "./page_user/PageM14.jsx";
import PageU36 from "./page_user/PageU36.jsx";
import PageU40 from "./page_user/PageU40.jsx";
import PageU44 from "./page_user/PageU44.jsx";
import PageU39 from "./page_user/PageU39.jsx";

import PageU48 from "./page_user/PageU48.jsx";
import Logout from "./page_user/Logout.jsx";

import Profile2 from "./page_user/Profile.jsx";
import Settings from "./page_user/Settings.jsx";
import History from "./page_user/History.jsx";
import PageU45 from "./page_user/PageU45.jsx";
import PageU43 from "./page_user/PageU43.jsx";
import Privacy from "./page_user/Privacy.jsx";
import PageU38 from "./page_user/PageU38.jsx";

import Page_45 from "./page_user/Page_45.jsx";
import Page_41 from "./page_user/Page_41.jsx";
import Page_43 from "./page_user/Page_43.jsx";
import Page_44 from "./page_user/Page_44.jsx";
import Page_46 from "./page_user/Page_46.jsx";
import Page_48 from "./page_user/Page_48.jsx";
import Page9 from "./page_user/Page9.jsx";
import OfferPage from "./page_user/OfferPage.jsx";
import PageU35 from "./page_user/pageU35.jsx";



function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelect />} />
      {/* starting page */}
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
      <Route path="/superadminlist" element={<SuperAdminList />} />
      <Route path="/addsuperadmin" element={<AddSuperAdmin />} />

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
      <Route path="/subscribedetails" element={<SubscribeDetails />} />
      <Route path="/subscribeeditpage" element={<SubscribeEditPage />} />

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


      {/* service side */}
      {/* //AYUSH */}
      {/* starting page */}
      <Route path="/service" element={<StartPage />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/createpin" element={<CreateNewPassword />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/success" element={<SuccessRedirect />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/forgot-otp-verification" element={<ForgotOtpVerification />} />
      <Route path="/forgot-success-redirect" element={< ForgotSuccessRedirect/>} />
      


      {/* adhil */}
      <Route path="/73" element={<S21_EditService />} />
      <Route path="/74" element={<S23_RequestService />} />
      <Route path="/75" element={<S26_ServiceDetailss />} />
      <Route path="/76" element={<S28_Form />} />
      <Route path="/77" element={<S31_ServiceLeadDetails />} />
      <Route path="/78" element={<Add_Lead_Balance_Sevice />} />
      <Route path="/79" element={<S24_AcceptandInvoice />} />
      <Route path="/80" element={<S29_Form />} />
      <Route path="/800" element={<S30_Leads />} />
      <Route path="/81" element={<Page81 />} />
      <Route path="/82" element={<S23_RequestService />} />
      <Route path="/83" element={<S34_Financal />} />
      <Route path="/84" element={<S35__TRANSACTIONS />} />
      <Route path="/85" element={<S36_COMPLAINTS />} />


      {/* reshma */}

      <Route path="/page62" element={<Page62/>} />
      <Route path="/page63" element={<Page63/>} />
      <Route path="/page61" element={<SuccessRedirect/>} />
      <Route path="/page56" element={<RegisterService/>} />
      <Route path="/page29" element={<PageU28/>} />
      <Route path="/page11" element={<Page11/>} />
      <Route path="/successmessage" element={<SuccessMessage/>} />
      <Route path="/filter" element={< Page16/>} />
      <Route path="/search" element={< Page14/>} />
      <Route path="/ereciept" element={< Ereciept/>} />
      <Route path="/65" element={<S17_E_RECIEPT_EDIT />} />
      <Route path="/66" element={<S14_AddNewCard />} />
      <Route path="/67" element={<S18_CheckoutSuccess />} />
      <Route path="/68" element={<S19_Dashboard />} />
      <Route path="/page69" element={<S20_MyServices />} />
      <Route path="/page70" element={<S22_Requests />} />
      <Route path="/page71" element={<S25_Bookings_Appoinments />} />
      <Route path="/72" element={<S27_ActiveServices />} />
      <Route path="/12" element={<AccountSuccess />} />
      <Route path="/13" element={<Page62 />} />
      <Route path="/14" element={<S14_AddNewCard />} />
      <Route path="/15" element={<Page63 />} />

          
      {/* yaswanth */}
      <Route path="/s41" element={<PageS41 />} />
      <Route path="/s42" element={<PageS42 />} />
      <Route path="/s43" element={<PageS43 />} />
      <Route path="/s44" element={<PageS44 />} />
      <Route path="/s45" element={<PageS45 />} />
      <Route path="/s46" element={<PageS46 />} />
      <Route path="/s47" element={<PageS47 />} />
      <Route path="/s48" element={<PageS48 />} />
      <Route path="/s49" element={<PageS49 />} />
      <Route path="s51" element={<PageS51 />} />
      <Route path="/145" element={<Page145 />} />
      <Route path="/146" element={<Page146 />} />
      <Route path="/missing147" element={<Missing147 />} />
      <Route path="/missing148" element={<Missing148 />} />
      <Route path="/missing149" element={<Missing149 />} />
      <Route path="/missing150" element={<Missing150 />} />
      <Route path="/missing151" element={<Missing151 />} />
      <Route path="/missing152_logout" element={<Missing152_logout />} />
      <Route path="/missing153" element={<Missing153 />} />
      <Route path="/missing154" element={<Missing154 />} />
      <Route path="/home" element={<Home />} />
      
      
      {/* <Route path="/s20" element={<PageS20 />} /> */}
      {/* <Route path="/s22" element={<PageS22 />} /> */}
      {/* <Route path="/s28" element={<PageS28 />} /> */}
      {/* <Route path="/s30" element={<PageS30 />} /> */}
      {/* <Route path="/s34" element={<PageS34 />} /> */}
      {/* <Route path="/s52" element={<PageS52 />} /> */}
      <Route path="/s37" element={<PageS37 />} />
      <Route path="/s38" element={<PageS38 />} />
      <Route path="/s39" element={<PageS39/>} />

      {/* new changes  */}
      <Route path="/pageu33" element={<ServiceList />} />
      <Route path="/u27" element={<JobLists />} />

      {/* AUTH & PUBLIC PAGES */}
      <Route path="/S52_SECURITY" element={<S52Security />} />
      <Route path="/S53_INDOX_CHATS" element={<S53InboxChats />} />
      <Route path="/S54_INDOX_CHATS_MESSAGES/:chatId" element={<S54InboxChatsMessages/>} />
      
      {/* Error pages*/}
      <Route path="/S403_Access_Denied" element={<S403AccessDenied />} />
      <Route path="/S404_Error_Page" element={<S404ErrorPage/>} />

      {/* Reset password pages*/}
      <Route path="/SRESET_PASSWORD" element={<SResetPassword/>}/>
      <Route path="/SVERIFY_RESET_PASSWORD" element={<SVerifyResetPassword/>}/>
      <Route path="/SRESET_NEW_PASSWORD" element={<SResetNewPassword/>}/>
      <Route path="/SRESET_CONGRATULATIONS" element={<SResetCongratulations/>}/>
      <Route path="*" element={<S404ErrorPage/>} />


      {/* User side */}
      {/* Original Routes */}
          <Route
            path="/U18_Request_Service"
            element={<U18_Request_Service />}
          />
          <Route
            path="/U17_PROVIDER_PROFILE/*"
            element={<U17_PROVIDER_PROFILE />}
          />
          <Route path="/U19Bookings/*" element={<U19Bookings />} />
          <Route
            path="/U20_Booking_Details/*"
            element={<U20_Booking_Details />}
          />
          <Route
            path="/U21_PAYMENT_METHODS/*"
            element={<U21_PAYMENT_METHODS />}
          />
          <Route
            path="/U21_B_ADD_NEW_CARD/*"
            element={<U21_B_ADD_NEW_CARD />}
          />
          <Route
            path="/U22PaymentSuccessMessage/*"
            element={<U22PaymentSuccessMessage />}
          />
          <Route path="/U23EReceipt/*" element={<U23EReceipt />} />

          

          {/* New Page Routes */}
          {/* starting page */}
          <Route path="/user" element={<Page2 />} />

          <Route path="/page1" element={<Page1 />} />
          
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/page11" element={<Page111 />} />
          <Route path="/page12" element={<Page12 />} />
          <Route path="/page13" element={<Page13 />} />
          <Route path="/page14" element={<Page144 />} />
          <Route path="/page15" element={<Page15 />} />
          <Route path="/page16" element={<Page166 />} />
          <Route path="/SirviceProvidersPage" element={<Page17 />} />
          <Route path="/SirvicesPage" element={<Page18 />} />
          <Route path="/offers" element={<OfferPage />} />
           <Route path="/page35" element={<PageU35 />} />


          {/* New Pages Routes by Abhishek */}
          <Route path="/page24" element={<PageU24 />} />
          <Route path="/pageM1" element={<PageM14 />} />
          <Route path="/page25" element={<PageU25 />} />
          <Route path="/page26" element={<PageU26 />} />
          <Route path="/page27" element={<PageU27 />} />
          <Route path="/page28" element={<PageU288 />} />
          <Route path="/page29" element={<PageU29 />} />
          <Route path="/page30" element={<PageU30 />} />
          <Route path="/page31" element={<PageU31 />} />
          <Route path="/page32" element={<PageMU1 />} />
          <Route path="/pageM32" element={<PageU32 />} />
          <Route path="/pageM33" element={<PageU33 />} />
          <Route path="/pageM37" element={<PageU37 />} />

          {/*---------- U32-U40 by Abiya----------------- */}
          <Route path="/pageu36" element={<PageU36 />} />
          <Route path="/pageu40" element={<PageU40 />} />
          <Route path="/pageu44" element={<PageU44 />} />
          <Route path="/pageu39" element={<PageU39 />} />
          {/* <Route path="/pageu41" element={<PageU41 />}>
            <Route index element={<Faq_50 />} />
            <Route path="faq" element={<Faq_50 />} />
            <Route path="contact" element={<ContactUs_51 />} />
          </Route> */}
          <Route path="/pageu48" element={<PageU48 />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile2 />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
          <Route path="/pageu45" element={<PageU45 />} />
          <Route path="/pageu43" element={<PageU43 />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/pageu38" element={<PageU38 />} />

          {/*----------------------- thanzeeh pages u41-u48--------------------------------  */}

          <Route path="/Page_41" element={<Page_41 />} />
          <Route path="/Page_45" element={<Page_45 />} />

          <Route path="/Page_43" element={<Page_43 />} />

          <Route path="/Page_44" element={<Page_44 />} />
          <Route path="/Page_46" element={<Page_46 />} />

          <Route path="/Page_48" element={<Page_48 />} />

    </Routes>
  )
}

export default App
