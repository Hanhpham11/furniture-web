import axios from 'axios';
import { json } from 'body-parser';
import { Link } from 'react-router-dom';
import React, {
  useState,
  useEffect,
} from 'react';

function Pagination() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] =
    useState(1);
  const [itemsPerPage, setitemsPerPage] =
    useState(16);

  const [pageNumberLimit, setpageNumberLimit] =
    useState(1);
  const [
    maxPageNumberLimit,
    setmaxPageNumberLimit,
  ] = useState(4);
  const [
    minPageNumberLimit,
    setminPageNumberLimit,
  ] = useState(0);
  const pages = [];
  for (
    let i = 1;
    i <= Math.ceil(data.length / itemsPerPage);
    i++
  ) {
    pages.push(i);
  }
  // ham hien thi so trang
  const indexOfLastItem =
    currentPage * itemsPerPage;
  const indexOfFirstItem =
    indexOfLastItem - itemsPerPage;
  const pageItems = data.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const logData = async () => {
    const res = await axios
      .fetch(
        'https://64d61e33754d3e0f1361a0ec.mockapi.io/products'
      )
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  useEffect(() => {
    logData();
  }, []);
  const dislayData = (data) => {
    return (
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className=" card container w-full my-5 mx-8 text-left  "
          >
            <div>
              <div className="item  ">
                <img
                  alt=""
                  src={item.url}
                  style={{
                    width: 285,
                    height: 301,
                  }}
                />
                <div className="add w-[285px] h-[301px]">
                  <button
                    // onClick={() => Add1(item)}
                    className="  bottom-2 left-2 border-solid border h-[48px] w-[202px]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <Link to={'/detail/' + item.id}>
                <p className="py-2 text-[20px]">
                  {item.type}
                </p>
              </Link>
              <p>{item.name}</p>
              <span className="text-[18px]">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return <div>Pagination</div>;
}

export default Pagination;
