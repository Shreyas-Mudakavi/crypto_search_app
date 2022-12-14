import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";
import Cryptocurrencies from "./components/Cryptocurrencies/Cryptocurrencies";
import HomePage from "./components/HomePage/HomePage";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Crypto Search <br />
              All rights reserved
            </Typography.Title>

            <Space>
              <Link to="/">Home</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
