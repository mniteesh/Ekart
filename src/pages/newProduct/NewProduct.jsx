import { Publish } from "@mui/icons-material";
import "./NewProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
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
            <input tyope="file" id="file" style={{ display: "none" }} />
          </div>
          <button className="productButton">Update</button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
