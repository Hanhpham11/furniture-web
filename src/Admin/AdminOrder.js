import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const AdminOrder = () => {
  const [checkOut, setCheckOut] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      'https://64d61e33754d3e0f1361a0ec.mockapi.io/checkout?fbclid=IwAR3LLB3EMaRykaMXkw9Fw_acuFrdHYifV6QZwsu-I90qBob8beFQne_0-K8',
      {
        params: {
          filter: {
            order: ['id DESC'],
          },
        },
      },
    );
    if (response.status === 200) {
      setCheckOut(response.data);
    }
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <td>ID</td>
          <td>Date</td>
          <td>Email</td>
          <td>Payable Amount</td>
          <td>Payment</td>
          <td>Detail</td>
        </thead>
        <tbody>
          {checkOut.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.Date}</td>
              <td>{item.email}</td>
              <td>{item.price}</td>
              <td>{item.payent}</td>
              <td>
                <p>Detail</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminOrder;
