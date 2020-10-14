import React from "react";

import styled from "styled-components";
import { ReactComponent as LoaderSVG } from "../../assets/images/loader.svg";
import { fadeInEffect } from "../../styles/styles";

const PageWrap = styled.div`
  ${fadeInEffect}
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000aa;
`;

const LoaderWrap = styled.div`
  width: 100px;
  height: 100px;
`;

function Loader({ loading }) {
  return (
    <PageWrap visibility={loading}>
      {loading && (
        <LoaderWrap>
          <LoaderSVG />
        </LoaderWrap>
      )}
    </PageWrap>
  );
}

export default Loader;
