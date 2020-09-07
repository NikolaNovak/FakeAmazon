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
          title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
          price="289.99"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
        />
        <Product
          id="2"
          title="MSI Gaming GeForce RTX 2080 Super 8GB GDRR6 256-Bit HDMI/DP Nvlink Tri-Frozr Turing Architecture Overclocked Graphics Card (RTX 2080 Super Gaming X Trio)"
          price="899.99"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81WhZNCowVL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="TP-Link N300 WiFi Extender,Covers Up to 800 Sq.ft, WiFi Range Extender Supports up to 300Mbps Speed, Wireless Signal Booster and Access Point for Home, Single Band 2.4Ghz only(TL-WA855RE)"
          price="19.99"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61bDT8tAmvL._AC_SL1500_.jpg"
        />
        <Product
          id="4"
          title="ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray, F512JA-AS34"
          price="449.00"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg"
        />
        <Product
          id="5"
          title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons for Notebook, PC, Laptop, Computer, Macbook - Black"
          price="9.99"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71gK7VlDnGL._AC_SL1280_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="SAMSUNG 32-inch Odyssey G7 – QHD 1000R Curved Gaming Monitor: 240hz,1ms, NVIDIA G-SYNC & FreeSync, QLED (LC32G75TQSNXZA), Black, 32 Inches"
          price="749.99"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/810s87wc61L._AC_SL1500_.jpg"
        />
        <Product
          id="7"
          title="Playstation 4 Pro 2TB SSHD Console with Dualshock 4 Wireless Controller Bundle, 4K HDR, Playstation Pro Enhanced with Solid State Hybrid Drive"
          price="459.00"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61WuIrRvfTL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
