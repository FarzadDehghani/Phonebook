import { Route, Routes } from "react-router-dom";
import { ContactDetail } from "./pages/ContactDetail";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import EditContact from "./pages/EditContact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-contact" element={<NewContact />} />
        <Route path="/contactdetail/:contactId" element={<ContactDetail />} />
        <Route path="/editcontact/:contactId" element={<EditContact />} />
      </Routes>
    </>
  );
};
export default App;

import "../src/assets/css/button.css"
import "../src/assets/css/home.css"
import "../src/assets/css/contact.css"
import "../src/assets/css/contactlist.css"
import "../src/assets/css/newcontact.css"
import "../src/assets/css/contactform.css"
import "../src/assets/css/contactdetail.css"
import "../src/assets/css/contactdetail-comp.css"
import "../src/assets/css/editcontact.css"
import "../src/assets/css/editcontact-comp.css"