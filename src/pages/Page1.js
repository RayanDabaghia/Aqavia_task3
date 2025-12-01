import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../component/GlobalContext";

export default function Page1() {
  const { updateName } = useContext(GlobalContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const styleBtn={
        padding:"5px 10px",
        margin:"0 10px",
        background:"blue",
        color:"white",
        border:"none",
                cursor:"pointer"

      }
  return (
    <div style={{
      margin:"50px"
    }}>
      <h1>Welcome To Page 1</h1>
            <label>Enter Name</label>

      <input
      style={{
        padding:"5px 10px"
      }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={styleBtn} onClick={() => { updateName(input); 
      navigate("/page2"); 
        console.log(input)
      }}>
        Submit
      </button>
      <button style={styleBtn} onClick={() => navigate("/page2")}>Page 2</button>
    </div>
  );
}
