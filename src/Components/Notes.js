import "./Notes.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

export default function Notes() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(0);

  const { id } = useParams();
  useEffect(() => {
    let link = "https://gorest.co.in/public/v1/posts/" + id;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setStatus(1);
      })
      .catch((err) => {
        setData("error");
        console.log(err);
      });
  });

  return (
    <div className="main">
      <h1>Notes</h1>
      {status === 1 && (
        <div className="notebox">
          <h3>{data.title}</h3>
          <div className="notes">
            <MDEditor.Markdown source={data.body} />
          </div>
        </div>
      )}
    </div>
  );
}
