import React, { useEffect } from "react";
import "./assets/index.css";
import Banner from "./Banner";
import ProductBanner from "./ProductBanner";
import { useDispatch, useSelector } from "react-redux";
import { getProductDatas } from "../redux/action/action";
// import { getProductData } from "../redux/rudcuer/product";

const Home = () => {
  
const products = useSelector(state => state.getProductData)

const dispatch  =useDispatch();
useEffect(() => {
  dispatch(getProductDatas());
}, [dispatch])


console.log(products,'getProductDatagetProductData') 
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>

      <div className="slide_part">
        <div className="left_slide">
        <ProductBanner title={"deal of the day"} products={products?.product
}/>
        </div>
        <div className="right_slide">
          <h4>Festive latest launches</h4>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vinambia/iqoobrandbuildingDT/Untitled-1.gif"
            alt="rightimg"
          />
          <a href="#">see more</a>
        </div>
      </div>
      <div className="center_img">
        <img src="./bannerImage/Screenshot_20230105_202609.png" />
      </div>
      <div className="center_img">
        <img src="./bannerImage/Screenshot_20230105_202400.png" />
      </div>
      <ProductBanner title={"Top Mobile Phones"} products={products?.product} />
      <div className="center_img">
        <img src=" https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Smart-choice/D38878434_IN_PC_Laptops_BAU-February-Smart-choice-laptops_1500x100_5-re.gif" />
      </div>
    </div>
  );
};

export default Home;