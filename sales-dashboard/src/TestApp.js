import { useState } from "react";
import Tejas from "./Components/Tejas/Tejas"
import Tanishq from "./Components/Tanishq/Tanishq"

function App() {

  let [tejas, changeTejas] = useState(true);
  let [tanishq, changeTanishq] = useState(false);

  return (
    <div>

      <div className="flex flex-row space-x-3">
        <button className="grow text-center text-3xl bg-indigo-700 p-4 rounded hover:bg-indigo-600 text-white" onClick={()=>{changeTanishq(false); changeTejas(true)}}>Tejas</button>
        <button className="grow text-center text-3xl bg-indigo-700 p-4 rounded hover:bg-indigo-600 text-white" onClick={()=>{changeTanishq(true); changeTejas(false)}}>Tanishq</button>
      </div>

      <div>
        { tejas && <Tejas/>}  
        { tanishq && <Tanishq/>}  
      </div>

    </div>

  );
}

export default App;
