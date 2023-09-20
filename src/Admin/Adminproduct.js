import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatter } from '../component/ShopContext1';
import './Admin.css';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { storage } from '../component/firebaseConfig';
import { type } from 'ramda';
import {
  Link,
  useParams,
  useLocation,
} from 'react-router-dom';
const Adminproduct = () => {
  let { id } = useParams();
  const { state } = useLocation();
  const [show, setShow] = useState(false);
  const [type1, setType1] = useState('');
  const [name1, setName1] = useState('');
  const [description1, setDescription1] =
    useState('');
  const [price1, setPrice1] = useState('');
  const [image1, setImage1] = useState('');
  const [inputFields, setInputFields] = useState({
    image1: '',
    productname1: '',
    description1: '',
    type1: '',
    price1: '',
  });
  const [items, setItems] = useState([]);
  const numberPage =
    Math.ceil(items.length / 16) + 1;
  const pageArray = [];
  for (let x = 1; x < numberPage; x++) {
    pageArray.push(x);
  }
  const post2 = items.slice(0, 16);
  const [post0 = post2, setPost0] = useState();
  const handleChange1 = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };
  const Post1 = (pro) => {
    const post1 = items.filter(
      (item) =>
        item.id <= pro * 16 &&
        item.id > (pro - 1) * 16,
    );
    setPost0(post1);
  };
  console.log(pageArray);
  const getData = async () => {
    const response = await axios.get(
      'https://64d61e33754d3e0f1361a0ec.mockapi.io//products',
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
      setItems(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // const handleGetData = () => {
  //   getData()
  //     .then((res) => {
  //       setItems(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   handleGetData();
  // }, []);

  const [image, setImage] = useState(null); // state lưu ảnh sau khi chọn
  const [progress, setProgress] = useState(0); // state hiển thị phần trăm tải ảnh lên store
  const metadata = {
    contentType: 'image/jpeg',
  };
  // code khác
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const storageRef = ref(
      storage,
      `images/${image.name}`,
    );
    const uploadTask = uploadBytesResumable(
      storageRef,
      image,
      metadata,
    );
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred /
            snapshot.totalBytes) *
          100;
        setProgress(progress);
        console.log(
          'Upload is ' + progress + '% done',
        );
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Xử lý trường hợp tải ảnh thất bại
      },
      () => {
        // Xử lý trường hợp tải ảnh thành công
        //  Lấy về đường link của ảnh vừa tải thành công
        getDownloadURL(
          uploadTask.snapshot.ref,
        ).then(async (downloadURL) => {
          alert(
            'Upload image successfully, download URL: ' +
              downloadURL,
          );
          // reset các trạng thái sau khi tải ảnh thành công
          setImage(null);
          setProgress(0);
          console.log(
            'File available at',
            downloadURL,
          );
          await axios.post(
            'https://64d61e33754d3e0f1361a0ec.mockapi.io//products',
            {
              url: downloadURL,
              productname: name1,
              description: description1,
              type: type1,
              price: price1,
            },
          );

          getData();
          setShow(false);
        });
      },
    );
  };
  const onDelete = async (id) => {
    let text = 'Are you sure you want to delete';

    if (window.confirm(text) === true) {
      const res = await axios.delete(
        'https://64d61e33754d3e0f1361a0ec.mockapi.io/products/' +
          id,
      );

      if (res.status === 200) {
        alert('Delete item successful');
      }
      await getData();
    }
  };
  console.log('sadad', items);
  return (
    <div className="w-full">
      <button
        onClick={() => setShow(!show)}
        className="mt-[10px] ml-[1000px] rounded-[5px] w-[100px] h-[40px] bg-lime-300 border border-solid bg-white"
      >
        Add Product +
      </button>
      <table className="w-full mt-[10px]">
        <thead>
          <tr>
            <td>Image</td>
            <td>Name</td>
            <td>Description</td>
            <td>Price</td>
            <td>Type</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <div>
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
              </td>
              <td>{item.productname}</td>
              <td>{item.description}</td>
              <td>
                {' '}
                {formatter.format(item.price)}
              </td>
              <td>{item.type}</td>
              <td>
                <button
                  className=" w-[50px] text-[15px] bg-white  h-[40px] border border-solid border-[1px] border-yellow-500"
                  onClick={() =>
                    onDelete(item.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-row gap-[38px] mt-[70px] justify-center">
        {pageArray.map((item) => (
          <button
            className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-[10px] focus:bg-[#B88E2F]"
            onClick={() => Post1(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {show && (
        <div>
          <div className=" py-[20px] px-[20px] rounded-[10px] z-10 fixed top-[30px] left-[480px] bg-white w-[440px] h-[600px] flex flex-col gap-[15px]">
            <p className="text-[30px]">
              Add product
            </p>
            <div className="w-full bg-black h-[1px]" />
            <p>Product's name</p>
            <input
              className="h-[40px] border border-solid border-black w-[400px] rounded-[2px]"
              name="name"
              onChange={(e) =>
                setName1(e.target.value)
              }
            ></input>
            <p>Price</p>
            <input
              className="h-[40px] border border-solid border-black w-[400px] rounded-[2px]"
              name="price"
              onChange={(e) =>
                setPrice1(e.target.value)
              }
            ></input>
            <p>Type</p>
            <input
              className="h-[40px] border border-solid border-black w-[400px] rounded-[2px]"
              name="type"
              onChange={(e) =>
                setType1(e.target.value)
              }
            ></input>
            <p>Description</p>
            <input
              className="border border-solid border-black w-[400px] rounded-[2px] h-[60px]"
              name="description"
              onChange={(e) =>
                setDescription1(e.target.value)
              }
            ></input>
            <p className="mt-[10px]">
              Address image
            </p>

            <div className="mb-4">
              <input
                type="file"
                onChange={handleChange}
                className="hidden"
                id="imageInput"
              />
              <label
                htmlFor="imageInput"
                className="block bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Select Image
              </label>
              {image && (
                <p className="mt-2">
                  Selected: {image.name}
                </p>
              )}
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="mt-2 rounded-lg shadow-md"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '80px',
                  }}
                />
              )}
            </div>
            <button
              className="h-[40px] w-[80px] h-[30px] bg-gray-300 ml-[160px]"
              onClick={handleUpload}
            >
              Add
            </button>
          </div>
          <div
            className=" fixed inset-0 bg-black bg-opacity-40 z-[5]"
            onClick={() => setShow(false)}
          />
        </div>
      )}
    </div>
  );
};
export default Adminproduct;
