import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Contacts from "./components/Contacts/Contacts";
import From from "./components/Form/From";
import Header from "./components/Header/Header";

function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <>
      <div dir="rtl" className="w-full h-screen bg-gray-100 ">
        <Header title={"وب اپلیکشن مدیریت مخاطبین"} />
        <div className=" grid grid-cols-2  gap-14 w-full p-1 overflow-hidden">
          <From  setContacts={setContacts}/>
          <Contacts contacts={contacts} setContacts={setContacts} />
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
