import React from 'react';
import Header from './Header';
import { useState, useEffect } from 'react';
import { useShopContext7 } from './ShopContext1';
import axios from 'axios';
const Purchase = () => {
  const { purchase, setPurchase } =
    useShopContext7();
  return (
    <div className="w-full">
      <Header />
      <div className="mt-[100px]">
        {' '}
        <table className="w-full">
          <thead>
            <td>Date</td>
            <td>Payable Amount</td>
            <td>Payment</td>
          </thead>
          <tbody>
            {purchase?.map((item, index) => (
              <tr key={index}>
                <td>{item.Date}</td>
                <td>{item.price}</td>
                <td>{item.payent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Purchase;
