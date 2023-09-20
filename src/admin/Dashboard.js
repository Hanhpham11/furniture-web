import React from 'react';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
