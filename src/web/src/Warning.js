import React from "react";
import styled from 'styled-components';
import { Alert } from 'antd';

function Warning({children: error}) {
  console.log(error);
  return <Alert
      message="Ouch, something went wrong."
      description={error}
      type="warning"
      showIcon
      closable
    />
}

const Center = styled.div`
  display: grid;
  place-items: center;
  height: 20vh;
`;

export default Warning;