import "./AddPaper.css";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  bold,
  italic,
  link,
  quote,
  code,
  image,
  unorderedListCommand,
  orderedListCommand
} from "@uiw/react-md-editor";

export default function AddPaper() {
  const [value, setvalue] = useState();
  const [title, setTitle] = useState();
  const [conf, setConf] = useState();
  const [auth, setAuth] = useState();
  const [status, setStatus] = useState("");
  const his = useHistory();

  const handleSubmit = (e) => {
    const paper = { title, conf, auth, value };
    setStatus("Working");
    fetch("https://webhook.site/41f54c41-b303-4af2-a663-7115a3de8506", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify(paper)
    }).then(() => {
      setStatus("Paper added");
      console.log("added");
      setTimeout(() => {
        his.push("/papers");
      }, 2000);
    });
  };

  return (
    <div className="main">
      <h1>Add New Paper</h1>
      <div className="container">
        <div className="fieldsContainer">
          <form className="form">
            <div className="field">
              <label>Title</label>
              <input onChange={(e) => setTitle(e.target.value)} type="text" />
            </div>
            <div className="field">
              <label>Authors</label>
              <input onChange={(e) => setAuth(e.target.value)} type="text" />
            </div>
            <div className="field">
              <label>Conference/Journal</label>
              <input onChange={(e) => setConf(e.target.value)} type="text" />
            </div>
          </form>
        </div>
        <div className="buttonContainer">
          <button onClick={handleSubmit} className="button">
            Submit
          </button>
          <div className="status">{status}</div>
        </div>
      </div>

      <div className="MDfield">
        <label>Notes</label>
        <div className="editor">
          <MDEditor
            value={value}
            onChange={setvalue}
            height={300}
            commands={[
              bold,
              italic,
              title,
              link,
              quote,
              code,
              image,
              unorderedListCommand,
              orderedListCommand
            ]}
          />
        </div>
      </div>
    </div>
  );
}
