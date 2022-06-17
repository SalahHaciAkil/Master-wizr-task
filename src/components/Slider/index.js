import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import classes from "./slider.module.scss";
const Slider = ({ data, activeItemId, setActiveItemId }) => {
  const sliderRef = useRef();
  const imageRef = useRef();
  const scrollByValue = useRef();
  const [startTouchX, setStartTouchX] = useState(0);

  scrollByValue.current = (value) => {
    sliderRef.current.scrollLeft = value;
  };

  const scrollRight = () => {
    const imageWidth = +Number(
      imageRef.current.getClientRects()[0].width
    ).toFixed(0);
    let scrollToValue = sliderRef.current.scrollLeft + imageWidth;

    scrollToValue = Math.ceil(scrollToValue / imageWidth) * imageWidth;

    if (scrollToValue > (data.length - 1) * imageWidth) {
      scrollByValue.current(0);
      return setActiveItemId(data[0].id);
    }

    scrollByValue.current(scrollToValue);

    const index = scrollToValue / imageWidth;
    setActiveItemId(data[index].id);
  };
  const scrollLeft = () => {
    const imageWidth = +Number(
      imageRef.current.getClientRects()[0].width
    ).toFixed(0);

    let scrollToValue = sliderRef.current.scrollLeft - imageWidth;

    scrollToValue = Math.ceil(scrollToValue / imageWidth) * imageWidth;

    if (scrollToValue < 0) {
      scrollByValue.current((data.length - 1) * imageWidth);
      return setActiveItemId(data[data.length - 1].id);
    }
    scrollByValue.current(scrollToValue);
    const index = scrollToValue / imageWidth;
    setActiveItemId(data[index].id);
  };

  const handleOnTocuhEnd = (e) => {
    const endTouchX = e.changedTouches[0].screenX;
    if (endTouchX < startTouchX) scrollRight();
    else scrollLeft();
  };

  useEffect(() => {
    if (activeItemId === "") return;
    let index = data.findIndex((item) => item.id === activeItemId);
    const imageWidth = imageRef.current.getClientRects()[0].width;
    scrollByValue.current(index * imageWidth);
  }, [activeItemId, data]);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ fontSize: "50px", marginRight: "100px", cursor: "pointer" }}
          onClick={scrollLeft}
          className={classes["navigation-icon"]}
        >
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div
          onTouchEnd={(e) => handleOnTocuhEnd(e)}
          onTouchStart={(e) => {
            setStartTouchX(e.changedTouches[0].screenX);
          }}
          ref={sliderRef}
          className={classes["slider-container"]}
        >
          {data.map((item) => (
            <div key={item.id} className={classes["image-bx"]}>
              <img ref={imageRef} src={item.url} alt={item.title} />
            </div>
          ))}
        </div>

        <div
          style={{ fontSize: "50px", marginLeft: "100px", cursor: "pointer" }}
          onClick={scrollRight}
          className={classes["navigation-icon"]}
        >
          <i className="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
    </>
  );
};

export default Slider;
