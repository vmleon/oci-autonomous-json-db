import React from "react";
import styled from 'styled-components'
import { Spin } from 'antd';

function Loading() {
  return <Center><Spin /></Center>;
}

const Center = styled.div`
  display: grid;
  place-items: center;
  height: 20vh;
`;

export default Loading;