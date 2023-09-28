import React, { useMemo } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const About2 = () => {
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      'https://64d61f3d754d3e0f1361a33b.mockapi.io/Furniture/hi/utinure',
      {
        params: {
          filter: {
            order: ['id DESC'],
          },
        },
      },
    );
    if (response.status === 200) {
      console.log(response);
      setPosts(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const post2 = posts.slice(0, 3);
  console.log(post2);
  const [post0 = post2, setPost0] = useState();

  const Post1 = (targetId, nextId) => {
    const post1 = posts.filter(
      (item) =>
        item.id <= nextId && item.id > targetId,
    );
    setPost0(post1);
  };
  return (
    <div className="w-full flex flex-row gap-[30px] px-[100px] pt-[106px] h-auto overflow-hidden">
      <div className="flex flex-col w-[817px]">
        {post0?.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              className="w-[817px] h-[500px] mt-[54px]"
            />
            <div className="flex flex-row gap-[7px] mt-[17px]">
              <img
                src="/images/image users.png"
                className="w-[20px] h-[20px]"
              />
              <p className="leading-[24px] text-[16px] text-[#9F9F9F]">
                Admin
              </p>
              <img
                src="/images/image calender.png"
                className="w-[20px] h-[20px] ml-[28px] "
              />
              <p className="leading-[24px] text-[16px] text-[#9F9F9F]">
                14 Oct 2022
              </p>
              <img
                src="/images/icon wood.png"
                className="w-[20px] h-[20px] ml-[28px]"
              />
              <p className="leading-[24px] text-[16px] text-[#9F9F9F]">
                Handmake
              </p>
            </div>
            <p className="leading-[45px] text-[30px] text-black mt-[15px]">
              {item.title}
            </p>
            <p className="leading-[22.5px] text-[15px] text-[#9F9F9F] mt-[12px]">
              {item.description}
            </p>
            <p className="leading-[24px] text-[16px] text-black mt-[30px]">
              Read more
            </p>
            <div className="w-[77px] h-[1px] bg-black mt-[12px] " />
          </div>
        ))}
        <div className="flex flex-row gap-[38px] mt-[54px] ml-[424px]">
          <button
            onClick={() => Post1(0, 3)}
            className="w-[60px] h-[60px] rounded-[10px] text-center bg-[#F9F1E7] focus:bg-amber-200"
          >
            1
          </button>
          <button
            onClick={() => Post1(3, 6)}
            className="w-[60px] h-[60px] rounded-[10px] text-center bg-[#F9F1E7] focus:bg-amber-200"
          >
            2
          </button>
          <button
            onClick={() => Post1(6, 9)}
            className="w-[60px] h-[60px] rounded-[10px] text-center bg-[#F9F1E7] focus:bg-amber-200"
          >
            3
          </button>
          <button
            onClick={() => Post1(9, 12)}
            className="w-[60px] h-[60px] rounded-[10px] text-center bg-[#F9F1E7] focus:bg-amber-200"
          >
            4
          </button>
        </div>
      </div>
      <div className="w-[393px] flex flex-col  ">
        <div className=" pt-[22px] px-[41px] flex flex-col w-[393px] h-[537px] ">
          <div className="flex flex-row justify-between border border-solid pr-[17px] items-center rounded-[10px]">
            <input className="w-[243px] h-[58px] items-center rounded-[10px]"></input>
            <img
              src="/images/akar-icons_search.png"
              className="w-[24px] h-[24px]"
            />
          </div>
          <p className="leading-[36px] text-[24px] text-black mt-[43px] ml-[36px]">
            Categories
          </p>
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between">
              <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[43px] ml-[36px]">
                Crafts
              </p>
              <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[43px] ml-[36px]">
                2
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[43px] ml-[36px]">
                Design
              </p>
              <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[43px] ml-[36px]">
                8
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[43px] ml-[36px]">
                Handmade
              </p>
              <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[43px] ml-[36px]">
                7
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[43px] ml-[36px]">
                Interior
              </p>
              <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[43px] ml-[36px]">
                1
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[43px] ml-[36px]">
                Wood
              </p>
              <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[43px] ml-[36px]">
                6
              </p>
            </div>
          </div>
          <div className="w-[393px] h-[650px] px-[76px] pt-[118px] flex flex-col ">
            <p className="leading-[36px] text-[24px] text-black ">
              Recent Posts
            </p>
            <div className="flex flex-row gap-[12px] mt-[26px]">
              <img
                src="/images/book.png"
                className="w-[80px] h-[80px] rounded-[10px]"
              />
              <div className="flex flex-col gap-[5px] h-[80px] ">
                <p className="leading-[21px] text-[14px] text-black ">
                  Going all-in with millennial
                  design
                </p>
                <p className="leading-[18px] text-[12px] text-[#9F9F9F] ">
                  03 Aug 2022
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[12px] mt-[26px]">
              <img
                src="/images/language.png"
                className="w-[80px] h-[80px] rounded-[10px]"
              />
              <div className="flex flex-col gap-[5px] h-[80px] ">
                <p className="leading-[21px] text-[14px] text-black ">
                  Exploring new ways of decorating
                </p>
                <p className="leading-[18px] text-[12px] text-[#9F9F9F] ">
                  03 Aug 2022
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[12px] mt-[26px]">
              <img
                src="/images/image 1.png"
                className="w-[80px] h-[80px] rounded-[10px]"
              />
              <div className="flex flex-col gap-[5px] h-[80px] ">
                <p className="leading-[21px] text-[14px] text-black ">
                  Handmade pieces that took time
                  to make
                </p>
                <p className="leading-[18px] text-[12px] text-[#9F9F9F] ">
                  03 Aug 2022
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[12px] mt-[26px]">
              <img
                src="/images/image 2.png"
                className="w-[80px] h-[80px] rounded-[10px]"
              />
              <div className="flex flex-col gap-[5px] h-[80px] ">
                <p className="leading-[21px] text-[14px] text-black ">
                  Modern home in Milan
                </p>
                <p className="leading-[18px] text-[12px] text-[#9F9F9F] ">
                  03 Aug 2022
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[12px] mt-[26px]">
              <img
                src="/images/image 5.png"
                className="w-[80px] h-[80px] rounded-[10px]"
              />
              <div className="flex flex-col gap-[5px] h-[80px] ">
                <p className="leading-[21px] text-[14px] text-black ">
                  Colorful office redesign
                </p>
                <p className="leading-[18px] text-[12px] text-[#9F9F9F] ">
                  03 Aug 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About2;

//[
//   {
//     "image": "https://t3.gstatic.com/images?q=tbn:ANd9GcTJyhkx8TvPKr0nPXsVRsp611JJpZz32Ut9zCTpOl35KqAy-P3s",
//     "title": "Going all-in with millennial design",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "1"
//   },
//   {
//     "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSIPv0bicxpHWotcBzSikKRllx9yrcjzJDWixuBb1xT4epflLSY",
//     "title": "Exploring new ways of decorating",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "2"
//   },
//   {
//     "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_U9PGW41ptj6Dyin4wBp5huxo2VNZMvcsNm6ThxmCwUuVAdr-",
//     "title": "Handmade pieces that took time to make",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "3"
//   },
//   {
//     "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSeeteToCpK4dV_1iscJheUIyWxtT-3FIzW8ra1Cx26rq1w2cg",
//     "title": "Going all-in with millennial design",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "4"
//   },
//   {
//     "image": "https://t1.gstatic.com/images?q=tbn:ANd9GcSNOEhWx6bzBuOJR0OX844Mm9f41Llysz06Sf5PLLs9oHU45J3y",
//     "title": "Exploring new ways of decorating",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "5"
//   },
//   {
//     "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNrVbpAsYyrThRc01XV3VprzQXHNC36488xILd0gxbwz7GodLc",
//     "title": "Handmade pieces that took time to make",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "6"
//   },
//   {
//     "image": "https://t1.gstatic.com/images?q=tbn:ANd9GcSNOEhWx6bzBuOJR0OX844Mm9f41Llysz06Sf5PLLs9oHU45J3y",
//     "title": "Going all-in with millennial design",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "7"
//   },
//   {
//     "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSeeteToCpK4dV_1iscJheUIyWxtT-3FIzW8ra1Cx26rq1w2cg",
//     "title": "Exploring new ways of decorating",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "8"
//   },
//   {
//     "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNrVbpAsYyrThRc01XV3VprzQXHNC36488xILd0gxbwz7GodLc",
//     "title": "Handmade pieces that took time to make",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "9"
//   },
//   {
//     "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_U9PGW41ptj6Dyin4wBp5huxo2VNZMvcsNm6ThxmCwUuVAdr-",
//     "title": "Going all-in with millennial design",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "10"
//   },
//   {
//     "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSIPv0bicxpHWotcBzSikKRllx9yrcjzJDWixuBb1xT4epflLSY",
//     "title": "Exploring new ways of decorating",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "11"
//   },
//   {
//     "image": "https://t3.gstatic.com/images?q=tbn:ANd9GcTJyhkx8TvPKr0nPXsVRsp611JJpZz32Ut9zCTpOl35KqAy-P3s",
//     "title": "Handmade pieces that took time to make",
//     "description": "Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna
//           aliqua. Mus mauris vitae ultricies leo
//           integer malesuada nunc. In nulla posuere
//           sollicitudin aliquam ultrices. Morbi
//           blandit cursus risus at ultrices mi
//           tempus imperdiet. Libero enim sed
//           faucibus turpis in. Cursus mattis
//           molestie a iaculis at erat. Nibh cras
//           pulvinar mattis nunc sed blandit libero.
//           Pellentesque elit ullamcorper dignissim
//           cras tincidunt. Pharetra et ultrices
//           neque ornare aenean euismod elementum",
//     "id": "12"
//   }
// ]
