import React from "react";
import { Typography } from "antd";
import styled from "styled-components";

import BooksContainer from "./books/BooksContainer";
import AddBookForm from "./books/AddBookForm";

const { Title } = Typography;

function App() {
  return (
    <Layout>
      <Header>
        <Title>Oracle Autonomous JSON</Title>
        <Title level={5}>
          A NoSQL database that goes from dev to production straight away!
        </Title>
      </Header>
      <Aside>
        <AddBookForm />
      </Aside>
      <Content>
        <BooksContainer />
      </Content>
      <Footer>with &hearts; from Victor Martin</Footer>
    </Layout>
  );
}

const Footer = styled.div`
  grid-area: foot;
  display: grid;
  place-items: center;
  height: 10vh;
  padding: 1rem;
`;
const Aside = styled.div`
  grid-area: aside;
  padding: 1rem;
`;
const Content = styled.div`
  grid-area: main;
  padding: 1rem;
`;
const Header = styled.div`
  grid-area: head;
  padding: 1rem;
`;

const Layout = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "head  head"
    "aside main"
    "foot  foot";
  grid-template-rows: 100px 1fr 20px;
  grid-template-columns: 250px 1fr;
`;

export default App;
