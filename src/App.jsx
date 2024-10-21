import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {teamMembers} from "./components/TeamExperts";
import DoctorProfile from "./components/DoctorProfile.jsx";
import "./scss/Loader.scss";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Services = React.lazy(() => import("./components/Services"));
const LazySubServices = React.lazy(() =>
  import("./components/SubServices/SubServices")
);

function App() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <div className="main">
      <Router>
        <Suspense
          fallback={
            <div>
              <Navbar />
              <div className=" flex my-48 mx-auto justify-center w-screen">
                <h1 className="text-5xl mr-5">Loading</h1>
                <MultiColorLoader />
              </div>
              <Footer />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<About />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:subServices" element={<LazySubServices />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/doctor-profile/:doctorId"
              element={<DoctorProfileWrapper />} // Use wrapper for passing doctor props
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

// DoctorProfileWrapper to pass the selected doctor data
const DoctorProfileWrapper = () => {
  const doctorId = window.location.pathname.split("/")[2]; // Get the doctorId from URL
  const doctor = teamMembers[doctorId]; // Use doctorId to fetch the relevant doctor
  return doctor ? (
    <DoctorProfile doctor={doctor} />
  ) : (
    <div className="text-center">Doctor Not Found</div>
  );
};

const NotFound = () => {
  return (
    <>
      <Navbar />
      <NotFoundBody />
      <Footer />
    </>
  );
};

const MultiColorLoader = () => {
  return (
    <div className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export const NotFoundBody = () => {
  return (
    <div className="min-h-[55vh] flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest animate-bounce">
        404
      </h1>

      <div className="bg-blue-500 px-2 text-sm rounded rotate-12 absolute animate-pulse">
        Page Not Found
      </div>

      <div className="mt-5">
        <Link
          to="/"
          className="relative inline-block text-sm font-medium text-blue-600 group"
        >
          <span className="absolute inset-0 w-full h-full transition-transform duration-300 scale-105 group-hover:scale-100 bg-blue-500 rounded-lg"></span>
          <span className="relative block px-8 py-3 bg-white border border-current rounded-lg group-hover:bg-blue-500 group-hover:text-white">
            Go Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default App;
