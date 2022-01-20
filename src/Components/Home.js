import { Button } from "@mui/material";
import "./Home.css";
import { useHistory } from "react-router-dom";

export default function Home() {
  const his = useHistory();
  return (
    <div className="home">
      <div className="head">
        <h1>Welcome to EZLogs</h1>
      </div>
      <div className="para">
        <p>An easy way to keep track of your literature review.</p>
      </div>
      <div className="actions">
        <div className="btn">
          <button onClick={() => his.push("/papers")}>View Papers</button>
        </div>
        <div className="btn">
          <button onClick={() => his.push("/add")}>Add Papers</button>
        </div>
      </div>
    </div>
  );
}
