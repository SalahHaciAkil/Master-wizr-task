import React from "react";
import classes from "./thumbnaiIcons.module.scss";
const ThumbnaiIcons = ({ data, setActiveItemId, activeItemId }) => {
  return (
    <>
      <ul className={classes["thumbnails-list"]}>
        {data.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => setActiveItemId(item.id)}
              className={`${classes["image-box"]} ${
                activeItemId === item.id && classes["active"]
              }`}
            >
              <img src={item.thumbnailUrl} alt={item.title} /> {}
            </div>

            <p style={{ fontSize: "20px" }}>{item.title.split(" ")[0]}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ThumbnaiIcons;
