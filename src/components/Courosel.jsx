import React from "react";

const Courosel = () => {
  const arr = [
    "home-item-1.jpg",
    "home-item-2.mp4",
    "home-item-3.jpg",
    "home-item-4.mp4",
  ];
  const arr2 = [
    "home-item-5.mp4",
    "home-item-6.jpg",
    "home-item-7.mp4",
    "home-item-8.jpg",
  ];
  return (
    <div className="couroselParent">
      <div className="couroselOne">
        {arr.map((item, i) => {
          if (i % 2 == 0)
            return (
              <div
                key={i}
                className="box"
                style={{
                  backgroundImage: `url('/${item}')`,
                  backgroundSize: "contain",
                }}
              ></div>
            );
          else
            return (
              <div
                key={i}
                className="box"
                style={{
                  //   backgroundImage: `url('/public/${"home-item-3"}.jpg')`,
                  //   backgroundSize: "contain",
                  padding: "unset",
                }}
              >
                <video
                  width={"100%"}
                  preload="auto"
                  autoPlay
                  loop
                  muted="muted"
                  volume="0"
                >
                  <source src={`/${item}`} type="video/mp4" />
                </video>
              </div>
            );
        })}
      </div>
      <div className="couroselOne">
        {arr2.map((item, i) => {
          if (i % 2 !== 0)
            return (
              <div
                key={i}
                className="box"
                style={{
                  backgroundImage: `url('/${item}')`,
                  backgroundSize: "contain",
                }}
              ></div>
            );
          else
            return (
              <div
                key={i}
                className="box"
                style={{
                  //   backgroundImage: `url('/public/${"home-item-3"}.jpg')`,
                  //   backgroundSize: "contain",
                  padding: "unset",
                }}
              >
                <video
                  width={"100%"}
                  preload="auto"
                  autoPlay
                  loop
                  muted="muted"
                  volume="0"
                >
                  <source src={`/${item}`} type="video/mp4" />
                </video>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Courosel;
