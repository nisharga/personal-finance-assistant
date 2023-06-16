import "./App.css";
import Login from "./Components/Login";
import Result from "./Components/Result";
import MyForm from "./Components/Form";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [sitelooks, setSiteLooks] = useState("");
  const [tips, setTips] = useState("");
  return (
    <>
     {/* Nisharga Kabir  */}
      <Login />
      <MyForm
        setResult={setResult}
        setSiteLooks={setSiteLooks}
        setTips={setTips}
      ></MyForm>
      <Result result={result} sitelooks={sitelooks} tips={tips} />
    </>
  );
}

export default App;
