import From from "./components/Form/From";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div dir="rtl" className="w-full h-screen bg-gray-100 ">
        <Header title={"وب اپلیکشن مدیریت مخاطبین"} />
        <div className=" grid grid-cols-2  gap-14 w-full p-5">
          <From />
        </div>
      </div>
    </>
  );
}

export default App;
