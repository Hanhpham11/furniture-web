import React from 'react';
import './TranserImage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Slideshow(list) {
  const [images, setImages] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      'https://64d61f3d754d3e0f1361a33b.mockapi.io/Furniture/hi/Bed',
      {
        params: {
          filter: {
            order: ['id DESC'],
          },
        },
      },
    );
    if (response.status === 200) {
      // console.log(response);
      setImages(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const getImage = images.filter(
    (item) => item.name === list.list[0].name,
  );
  const delay = 2500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === getImage.length - 1
            ? 0
            : prevIndex + 1,
        ),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${
            -index * 100
          }%, 0, 0)`,
        }}
      >
        {getImage.map((item, index) => (
          <div className="slide" key={index}>
            <img
              src={item.image}
              className="w-[372px] h-[486px]"
            />
          </div>
        ))}
      </div>

      <div className="slideshowDots ">
        {getImage.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${
              index === idx ? ' active' : ''
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slideshow;
