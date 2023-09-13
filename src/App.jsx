import { useState } from "react";
import "./App.css";
import { Data } from "./components/data";

function App() {
  const [active, setActive] = useState(null);
  return (
    <>
      {/* <div className="container">
        <div
          className={`panel ${active ? "active" : " "}`}
          onClick={(e) => setActive((current) => !current)}
          style={{ backgroundImage: "url(/images/Ballon.avif)" }}
        >
          <h3>Ballon</h3>
        </div>
        <div
          className={`panel ${active ? "active" : " "}`}
          onClick={(e) => setActive((current) => !current)}
          style={{ backgroundImage: "url(/images/camera.avif)" }}
        >
          <h3>Camera</h3>
        </div>
        <div
          className={`panel ${active ? "active" : " "}`}
          onClick={(e) => setActive((current) => !current)}
          style={{ backgroundImage: "url(/images/flowerport.avif)" }}
        >
          <h3>Flower</h3>
        </div>
        <div
          className={`panel ${active ? "active" : " "}`}
          onClick={(e) => setActive((current) => !current)}
          style={{ backgroundImage: "url(/images/icecream.avif)" }}
        >
          <h3>Ice-Cream</h3>
        </div>
        <div
          className={`panel ${active ? "active" : " "}`}
          onClick={(e) => setActive((current) => !current)}
          style={{ backgroundImage: "url(/images/Bridge.avif)" }}
        >
          <h3>Bridge</h3>
        </div>
      </div> */}
        <h4 style={{textAlign: "center", fontSize: "25px"}}>Click on the image to see the expanding effect</h4>
      <div className="container">
        {Data?.map((item) => {
          return (
            <div
              className={`panel ${active == item && "active"}`}
              onClick={() => setActive(item)}
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
