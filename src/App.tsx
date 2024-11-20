import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About"; // Make sure path is correct
import Contact from "./components/Contact"; // Make sure path is correct
import {CustomeBar} from './components/ui/Custome-Bar'
import PersonalPage from "./components/PersonalPage";

function App() {
 



  return (
    <>
   
      <CustomeBar />

      <div className=" h-screen mx-auto  py-4">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/character/:id" element={<PersonalPage/>} />
      
        </Routes>
      </div>

     
    </>
  );
}

function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RootApp;
