import React from 'react';
import { ReactDOM } from 'react';
import { useState, useEffect } from 'react';

function SearchNow() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');
  const [searchParam] = useState([
    'title',
    'description',
  ]);
  const [filterParam, setFilterParam] = useState([
    'All',
  ]);

  useEffect(() => {
    fetch(
      'https://64d61f3d754d3e0f1361a33b.mockapi.io/Furniture/hi/utinure'
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
        }
      );
  }, []);

  const data = Object.values(items);

  const [show, setShow] = useState(false);

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

            <span className="sr-only">
              Search countries here
            </span>
          </label>
        </div>
        {show && (
          <div className="absolute z-5 bg-white card-grid flex flex-col gap-[60px] w-[200px] h-[200px] overflow-y-auto top-[70px]">
            {search(data)?.map((item) => (
              <div className="flex flex-row gap-[2px] h-[50px]">
                <img
                  src={item.image}
                  className="w-[30px] h-[30px]"
                />
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[12px]">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SearchNow;
