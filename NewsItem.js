import { Card, Col, Row } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import newsData from "./data.json";

const { Meta } = Card;

function NewsItem() {
  let params = useParams();
  // const newsId = parseInt(params.newsId, 10);
  console.log("params.newsId");
  console.log(params.newsId);
  return (
    <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight: 380,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Row gutter={24}>
        {newsData
          .filter((news) => news.id === parseInt(params.newsId, 10))
          .map((item, index) => (
            <Row gutter={24}>
              <Col span={8}>
                <Card
                  hoverable
                  cover={<img alt={item.title} src={item.media} />}
                ></Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Meta title={item.title} />
                  <small>
                    Posted on {item.published_date} by {item.authors} in{" "}
                    <i>{item.topic}</i> from {item.clean_url}
                  </small>
                  <br />{" "}
                  <a target={"_blank"} href={item.link}>
                    External Link
                  </a>{" "}
                  {item.country} Twitter: {item.twitter_account}
                  <p>{item.summary}</p>
                </Card>
              </Col>
            </Row>
          ))}
      </Row>
    </div>
  );
}

export default NewsItem;
