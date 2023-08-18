import React, {
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import axios from 'axios';
import './Details.css';
function Details() {
  let { id } = useParams();
  const [detail, setDetail] = useState({});
  const getDetail = async () => {
    const response = await axios.get(
      'https://64d61e33754d3e0f1361a0ec.mockapi.io//products/' +
        id
    );
    if (response.status === 200) {
      setDetail(response.data);
    }
    console.log(response);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      <Header />
      <div className="w-full pl-[99px] flex flex-row gap-[14px] px-[38px] bg-[#F9F1E7] h-[100px] items-center">
        <div className=" container flex my-3">
          <div className="flex">
            <p className="leading-[24px] text-[16px] text-gray-400">
              Home
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z"
                fill="black"
              />
            </svg>
            <p className="text-[#9F9F9F]">Shop</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z"
                fill="black"
              />
            </svg>
            <p className="h=[37px]">|</p>
            <div>
              {detail && <p>{detail.type}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
