import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../component/GlobalContext";

export default function Page2() {
  const { name, updateName } = useContext(GlobalContext);
  const [input, setInput] = useState(name);
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
    <div style={{margin:"50px"}}>
      <h1>Welcome To Page 2</h1>
      <label>Edit Name</label>
      <input
       style={{
        padding:"5px 10px"
      }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={styleBtn}  onClick={() => updateName(input)}>Save</button>
      <button  style={styleBtn} onClick={() => navigate("/")}>Page 1</button>

      <p>Current Name: {name}</p>
    </div>
  );
}
