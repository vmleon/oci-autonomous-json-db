import React from "react";
import { Card, Rate } from "antd";
import styled from "styled-components";
const { Meta } = Card;

function Books({ children: data }) {
  return (
    <Container>
      {data.books.map(({ title, author, avgScore, imageURL }) => (
        <Card
          hoverable
          title={title}
          extra={author}
          style={{ width: 200 }}
          cover={<img alt={title} src={imageURL} />}
        >
          <Meta
            title="Avg. Review"
            description={<Rate allowHalf defaultValue={avgScore} />}
          />
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;

export default Books;
