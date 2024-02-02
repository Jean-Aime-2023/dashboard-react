import {
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  LanguageOutlined,
  ListAltOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import './navbar.scss';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
          </div>
          <div className="item" onClick={()=>dispatch({type:"TOGGLE"})}>
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListAltOutlined className="icon" />
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/14653583/pexels-photo-14653583.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
