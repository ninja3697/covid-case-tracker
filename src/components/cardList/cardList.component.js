import React from "react";
4;
import { Card as BootstapCard, Row, Col, Badge } from "react-bootstrap";
import { EMOTIONS } from "../../constants/app.constants";
import { epochToDate } from "../../utils/app.utils";

import "./cardList.component.scss";

const Card = ({ data }) => {
  const { name, count, prevCountDiff: difference, cardColor, emotion } = data;
  const isPositiveChange = difference * EMOTIONS[emotion] > 0;
  return (
    <BootstapCard text={cardColor} border="dark">
      <BootstapCard.Body>
        <BootstapCard.Title className="card_title">
          {count} <span>{name}</span>
        </BootstapCard.Title>
        <BootstapCard.Text>
          <Badge pill bg={isPositiveChange ? "success" : "danger"}>
            {Math.abs(difference)} cases {`${difference > 0 ? "more" : "less"}`}{" "}
            than yesterday
          </Badge>
        </BootstapCard.Text>
      </BootstapCard.Body>
    </BootstapCard>
  );
};

const CardList = ({ dataList, lastUpdatedTime }) => {
  const lastUpdated = epochToDate(lastUpdatedTime);
  return (
    <div className="card_list">
      <Row xs={1} sm={1} md={2} lg={4}>
        <Col>
          <BootstapCard bg="dark" text="white" border="dark">
            <BootstapCard.Body>
              <BootstapCard.Title>COVID-19 in India</BootstapCard.Title>
              <BootstapCard.Text>
                Last updated at {lastUpdated}
              </BootstapCard.Text>
            </BootstapCard.Body>
          </BootstapCard>
        </Col>
        {dataList.map((data) => (
          <Col key={data.id}>
            <Card data={data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardList;
