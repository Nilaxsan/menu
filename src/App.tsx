import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./Signin";
import Forgot from "./forget";
import Otp from "./otp";
import Reset from "./reset";
import ResetSuccess from "./resetSux";
import Register from "./Register";
import StudentForm from "./StudentForm";
import Conform from "./StuConfirmation";
import CreateAcc from "./CreareAcc";
import TutorForm1 from "./TutorForm1";
import TutorForm2 from "./TutorForm2";
import TutorForm3 from "./TutorForm3";
import Sidebar from "./Tutor/Sidebar";
import Dashboard from "./Tutor/Dashboard";
import Editprofile from "./Tutor/Editprofile";
import Requestlist from "./Tutor/Requestlist";
import Message from "./Tutor/Message";
import Paymentdetail from "./Tutor/Paymentdetail";
import Coinbank from "./Tutor/Coinbank";
import Invitefriend from "./Tutor/Invitefriend";
import Settings from "./Tutor/Settings";
import Help from "./Tutor/Help";

import Sidebarst from "./Student/SidebarSt";
import DashboardSt from "./Student/DashboardSt";
import EditprofileSt from "./Student/EditprofileSt";
import SearchSt from "./Student/Search";
import Helpst from "./Student/Help";
import Settingst from "./Student/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/resetpassword" element={<Reset />} /> 
        <Route path="/resetSux" element={<ResetSuccess />} />
        <Route path="/register" element={<Register />} />
        <Route path="/studentform" element={<StudentForm />} />
        <Route path="/tutorform1" element={<TutorForm1 />} />
        <Route path="/tutorformcontinue" element={<TutorForm2 />} />
        <Route path="/tutorformcontinue1" element={<TutorForm3 />} />
        <Route path="/confirmation" element={<Conform />} />
        <Route path="/createaccount" element={<CreateAcc />} />

        {/* Tutor Routes */}
        <Route path="/Tutor/*" element={<TutorRoutes />} />
        {/* Student Routes */}
        <Route path="/Student/*" element={<StudentRoutes />} />
      </Routes>
    </Router>
  );
}

function TutorRoutes() {
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "64px" }}>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/editprofile" element={<Editprofile />} />
          {/* <Route path="/studentlist" element={<Studentlist />} /> */}
          <Route path="/requestlist" element={<Requestlist />} />
          <Route path="/message" element={<Message />} />
          <Route path="/coinbank" element={<Coinbank />} />
          <Route path="/paymentdetail" element={<Paymentdetail />} />
          <Route path="/invitefriend" element={<Invitefriend />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </>
  );
}


function StudentRoutes() {
  return (
    <>
      <Sidebarst />
      <div style={{ marginLeft: "64px" }}>
        <Routes>
          <Route path="/Dashboard" element={<DashboardSt />} />
          <Route path="/editprofile" element={<EditprofileSt />} />
          <Route path="/requestlist" element={<Requestlist />} />
          <Route path="/message" element={<Message />} />
          <Route path="/settings" element={<Settingst />} />
          <Route path="/help" element={<Helpst />} />
          <Route path="/Search" element={<SearchSt />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
