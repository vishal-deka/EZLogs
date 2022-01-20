import "./MainPage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        setData("error");
        console.log(err);
      });
  }, []);

  return (
    <div className="main">
      <h1>Current papers</h1>
      <div className="papers">
        {data.map((paper) => (
          <div className="paperbox" key={paper.id}>
            <span className="title">
              <Link className="link2" to={`/notes/${paper.id}`}>
                {paper.title}
              </Link>
            </span>
            <br />
            <span className="authors">User id: {paper.user_id}</span>
            <br />
            <span className="conf">Some conference</span>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
