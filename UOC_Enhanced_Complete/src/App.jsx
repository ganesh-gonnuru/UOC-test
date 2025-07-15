import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UniversitiesPage from "./UniversitiesPage";
import Header from "./Header";
import TabBar from "./TabNavigation";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import IELTSMockTest from "./IELTS/IELTSMockTest";
import Gallery from "./Gallery";
import AboutUs from "./AboutUs";

export default function App() {
  return (
    <>
      <Header />
      <TabBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<UniversitiesPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/ielts" element={<IELTSMockTest />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* ✅ Fixed path */}
        <Route path="/student-gallery" element={<Gallery />} /> {/* ✅ Fixed path */}
      </Routes>

      <Footer />
    </>
  );
}
