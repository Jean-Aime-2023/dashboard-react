import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">aimeadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Person2OutlinedIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
            <AddBusinessIcon className='icon'/>
            <span>Products</span>
          </li>
          <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <MonitorHeartIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxRoundedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutRoundedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
