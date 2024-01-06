"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
{
  /* <div className="container">
  <div className="row row-cols-3">
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">{str.substring(0, 100) + "..."}</p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
        <div style={{ marginTop: "6px" }}>
          <button style={btnStyle}>UPDATE</button>
          <button style={btnStyle}>DELETE</button>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
const Page = () => {
  const [data, setData] = useState([]);
  let str =
    "The apple mango is a friendship and a banana is a monster because it is banana and apple is the king which i like the mosnt indeed";
  const btnStyle = {
    padding: "5px 20px",
    marginRight: "12px",
    borderRadius: "6px",
    backgroundColor: "black",
    color: "white",
  };
  async function getData() {
    try {
      const getAllData = await axios.get("http://localhost:3000/api/blog");
      setData(getAllData.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  //   getData();

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {data.length
            ? data.map((e) => (
                <div key={e.id} className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">
                      {`${e.content}`.substring(0, 100) + "..."}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                    <div style={{ marginTop: "6px" }}>
                      <button style={btnStyle}>UPDATE</button>
                      <button style={btnStyle}>DELETE</button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Page;
