import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
const Admincontact = () => {
  const [contact, setContact] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      'https://64fe5ad1f8b9eeca9e28ac79.mockapi.io/information/hi/contact',
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
      setContact(response.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log('checkContact', contact);
  return (
    <div className="w-full px-[100px] py-[50px]">
      <table className="w-full border border-solid ">
        <thead>
          <tr>
            <td className="text text-[25px] ">
              Name
            </td>
            <td className="text text-[25px] ">
              Email address
            </td>
            <td className="text text-[25px] ">
              Subject
            </td>
            <td className="text text-[25px] ">
              Message
            </td>
          </tr>
        </thead>
        <tbody>
          {contact.map((item, index) => (
            <tr key={index}>
              {' '}
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.subject}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Admincontact;
