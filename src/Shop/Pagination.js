import React, {
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import '../css/Pagination.css';
import { useShopContext1 } from '../component/ShopContext1';

function Pagination() {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] =
    useState(1);
  const [itemsPerPage, setitemsPerPage] =
    useState(16);

  const [pageNumberLimit, setpageNumberLimit] =
    useState(3);
  const [
    maxPageNumberLimit,
    setmaxPageNumberLimit,
  ] = useState(4);
  const [
    minPageNumberLimit,
    setminPageNumberLimit,
  ] = useState(0);
  // logic for getting total number of pages
  const pages = [];
  for (
    let i = 1;
    i <= Math.ceil(data.length / itemsPerPage);
    i++
  ) {
    pages.push(i);
  }

  // logic for displaying a number of items per page
  const indexOfLastItem =
    currentPage * itemsPerPage;
  const indexOfFirstItem =
    indexOfLastItem - itemsPerPage;
  const pageItems = data.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  //fetching data from an api

  useEffect(() => {
    fetch(
      'https://64d61e33754d3e0f1361a0ec.mockapi.io/products',
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  // add to cart
  const { cart, setCart } = useShopContext1();
  const Add1 = (hello) => {
    setCart([hello, ...cart]);
  };
  // format price
  const formatter = new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    },
  );
  const displayData = (data) => {
    return (
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  md:gap-[10px] gap-[30px] mx-[30px] font-sans md:mx-[30px]  ">
        {data.length > 0 &&
          data.map((todo, index) => {
            return (
              <div
                key={index}
                className=" card h-[440px]"
              >
                <div className="item">
                  <img
                    alt=""
                    src={todo.url}
                    style={{
                      width: 284,
                      height: 301,
                    }}
                    className="md:h-full md:w-48"
                  />
                  <div className="add w-[285px] h-[301px]">
                    <button
                      onClick={() => Add1(todo)}
                      className="  bottom-2 left-2 border-solid border h-[48px] w-[202px]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-[16px] infor ">
                  <Link to={'/detail/' + todo.id}>
                    <p className=" text-[20px] ">
                      {todo.name}
                    </p>
                  </Link>
                  <p className="text-[18px] py-2 text-[#898989]">
                    {todo.type}
                  </p>
                  <p>{data.name}</p>
                  <span className="text-[18px] ">
                    {formatter.format(todo.price)}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  // logic for displaying page numbers
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pages.map(
    (number) => {
      if (
        number < maxPageNumberLimit + 1 &&
        number > minPageNumberLimit
      ) {
        return (
          <li
            key={number}
            id={number}
            onClick={handleClick}
            className={
              currentPage == number
                ? 'active'
                : null
            }
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
    },
  );

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(
        maxPageNumberLimit + pageNumberLimit,
      );
      setminPageNumberLimit(
        minPageNumberLimit + pageNumberLimit,
      );
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if (
      (currentPage - 1) % pageNumberLimit ==
      0
    ) {
      setmaxPageNumberLimit(
        maxPageNumberLimit - pageNumberLimit,
      );
      setminPageNumberLimit(
        minPageNumberLimit - pageNumberLimit,
      );
    }
  };

  return (
    <div>
      {displayData(pageItems)}
      <ul className="pageNumbers">
        <li className="">
          <button
            onClick={handlePrevbtn}
            disabled={
              currentPage == pages[0]
                ? true
                : false
            }
          >
            Previous
          </button>
        </li>

        {renderPageNumbers}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={
              currentPage ==
              pages[pages.length - 1]
                ? true
                : false
            }
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
