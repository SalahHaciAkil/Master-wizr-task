import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import classes from "./thumbnaiIcons.module.scss";
const ThumbnaiIcons = ({ data, setActiveItemId, activeItemId }) => {
  const listRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const activeItemIndex = data.findIndex((x) => x.id === activeItemId);
    const imageWidth = +Number(
      imgRef.current.getClientRects()[0].width
    ).toFixed(0);
    const scrollValue = activeItemIndex * imageWidth;
    listRef.current.scrollLeft = scrollValue;
  }, [activeItemId, data]);
  return (
    <>
      <ul ref={listRef} className={classes["thumbnails-list"]}>
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
              <img ref={imgRef} src={item.thumbnailUrl} alt={item.title} /> {}
            </div>

            <p style={{ fontSize: "20px" }}>{item.title.split(" ")[0]}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ThumbnaiIcons;
