import React from 'react';
import { ReactDOM } from 'react';
import { useState, useEffect } from 'react';
import { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchPage from './SearchPage';
import { useShopContext6 } from './ShopContext1';
function SearchNow(callBack) {
  const { list2, setList2 } = useShopContext6();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');
  const [searchParam] = useState([
    'productname',
    'type',
  ]);

  const [filterParam, setFilterParam] = useState([
    'All',
  ]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      'https://64d61e33754d3e0f1361a0ec.mockapi.io//products',
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  const data = Object.values(items);
  const [updated, setUpdated] = useState('');
  const [show, setShow] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate('/SearchPage');
      setList2(search(data));
    }
  };

  function search(items) {
    return items.filter((item) => {
      if (item.region == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == 'All') {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) {
    return (
      <p>
        {error.message}, if you get this error,
        the free API I used might have stopped
        working, but I created a simple example
        that demonstrate how this works,{' '}
        <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
          {' '}
          check it out{' '}
        </a>{' '}
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <div>
              <input
                onClick={() => setShow(!show)}
                type="search"
                onKeyDown={handleKeyDown}
                name="search-form"
                id="search-form"
                className="search-input border border-solid border-[1px] border-gray-300 rounded-[5px] h-[30px] w-[200px]"
                placeholder="Search for..."
                value={q}
                onChange={(e) =>
                  setQ(e.target.value)
                }
              />
            </div>
          </label>
        </div>

        {show && (
          <div className="absolute z-50 bg-white card-grid flex flex-col gap-[20px] w-[200px] h-[200px] overflow-y-auto top-[70px]">
            {search(data)?.map((item) => (
              <div className="flex flex-row gap-[2px] h-[50px]">
                <img
                  src={item.url}
                  className="w-[30px] h-[30px]"
                />
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[12px]">
                    {item.productname}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {item.type}
                  </p>
                </div>
              </div>
            ))}
            <div
              className=" fixed inset-0  bg-opacity-40 z-[5]"
              onClick={() => setShow(false)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default SearchNow;
