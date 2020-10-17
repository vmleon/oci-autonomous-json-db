import React from "react";
import styled from 'styled-components';
import { Alert } from 'antd';

function Warning({children: error}) {
  return <Center><Alert
      message="Ouch, something went wrong."
      description={error}
      type="warning"
      showIcon
      closable
    /></Center>
}

const Center = styled.div`
  display: grid;
  place-items: center;
  height: 20vh;
`;

export default Warning;