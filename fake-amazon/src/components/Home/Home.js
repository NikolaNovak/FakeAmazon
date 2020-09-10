import React from "react";

import Product from "./Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
        alt=""
      ></img>

      <div className="home__row">
        <Product
          id="1"
          title="AMD Ryzen 5 3600X 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Spire Cooler"
          price={214.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/616i5Il16qL._AC_SL1000_.jpg"
        />
        <Product
          id="2"
          title="MSI Gaming GeForce RTX 2080 Super 8GB GDRR6 256-Bit HDMI/DP Nvlink Tri-Frozr Overclocked Graphics Card"
          price={899.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81WhZNCowVL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="TP-Link N300 WiFi Extender, Covers Up to 800 Sq.ft, WiFi Range Extender Supports up to 300Mbps Speed"
          price={19.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61bDT8tAmvL._AC_SL1500_.jpg"
        />
        <Product
          id="4"
          title="ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard"
          price={449.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg"
        />
        <Product
          id="5"
          title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, Macbook - Black"
          price={8.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71gK7VlDnGL._AC_SL1280_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="SAMSUNG 32-inch Odyssey G7 – QHD 1000R Curved Gaming Monitor: 240hz,1ms, NVIDIA G-SYNC & FreeSync, QLED (LC32G75TQSNXZA), Black, 32 Inches"
          price={749.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/810s87wc61L._AC_SL1500_.jpg"
        />
        <Product
          id="7"
          title="Playstation 4 Pro 2TB SSHD Console with Dualshock 4 Wireless Controller Bundle, 4K HDR, Playstation Pro Enhanced with Solid State Hybrid Drive"
          price={459.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61WuIrRvfTL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
