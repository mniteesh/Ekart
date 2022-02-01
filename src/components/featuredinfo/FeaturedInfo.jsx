import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './FeaturedInfo.css';

const FeaturedInfo = () => {
  return <div className='featured'>
      <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2415</span>
              <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative' /></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Sale</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2425</span>
              <span className="featuredMoneyRate">-14.4 <ArrowDownward className='featuredIcon negative' /></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2115</span>
              <span className="featuredMoneyRate">+3.4 <ArrowUpward className='featuredIcon positive' /></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
  </div>;
};

export default FeaturedInfo;
