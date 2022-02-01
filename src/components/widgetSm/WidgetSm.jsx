import { Visibility } from '@mui/icons-material';
import './WidgetSm.css';

const WidgetSm = () => {
  return <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
              <img src="https://i.pinimg.com/564x/50/79/50/507950ac61555779141caa74c370b7ff.jpg" alt="avt" className="widgetSmImage" />
              <div className="widgetSmUser">
                  <span className="widgetSmUserName">Karan Singh</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon' /> Display
              </button>
          </li>
      </ul>
  </div>;
};

export default WidgetSm;
