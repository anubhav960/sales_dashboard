import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar"
import Header from "./Components/Header/Header"
import Charts from "./Components/Charts/Charts"
import BottomSection from "./Components/BottomSection/BottomSection"
let App = () => {
  return (
    <div className="grid grid-cols-11 pr-10 pt-3 gap-6">
      <div className="col-span-2">
        <Sidebar/>
      </div>
      <div className="col-span-9 ml-8">
        <Navbar /> 
        <Header />
        <Charts />
        <BottomSection />
      </div>
        
    </div>
  );
};

export default App;
