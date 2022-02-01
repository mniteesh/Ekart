import { Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { productData } from "../../dummyData";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="ptoductButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productLeft">
          <Chart title="Sales Performance" data={productData} dataKey="Sales" />
        </div>
        <div className="productRight">
          <div className="pdodctInfo">
            <div className="pdodctInfoTop">
              <img
                src="https://i.pinimg.com/564x/87/44/06/8744061142373e8255feb9ccbc7bce3f.jpg"
                alt=""
                className="productInfoImg"
              />
              <span className="productName">Apple Airpods</span>
            </div>
            <div className="pdodctInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">1237</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>In Stock</label>
            <select name="inStock" id="inStock" className="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active" className="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://i.pinimg.com/564x/87/44/06/8744061142373e8255feb9ccbc7bce3f.jpg"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                  <Publish />
              </label>
              <input tyope="file" id="file" style={{display:"none"}} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
