import React from 'react';
import './home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widgets from '../../components/widgets/Widgets';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
