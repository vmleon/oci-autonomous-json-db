import React from "react";
import { PageHeader } from "antd";
import styled from 'styled-components';

import BooksContainer from "./books/BooksContainer";

function App() {
  return (
    <Container>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Oracle Autonomous JSON"
        subTitle="a NoSQL database that goes from dev to production straight away!"
      />
      <BooksContainer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 2rem;
`;

export default App;
