import { Layout } from "antd";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NewsItem from "./NewsItem";

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Link to="/">
        <h2 style={{ color: "white" }}>News Reporter</h2>
      </Link>
    </Header>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/news-item/:newsId" element={<NewsItem />}></Route>
    </Routes>

    <Content
      className="site-layout"
      style={{
        padding: "0 50px",
        marginTop: 64,
      }}
    ></Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Copyright © 2020 News Detection. All rights reserved.
    </Footer>
  </Layout>
);
export default App;
