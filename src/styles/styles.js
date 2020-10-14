import styled, { css } from "styled-components";

export const Row = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.indent30} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.minDesktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Panel = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.indent20};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.minDesktop}) {
    width: 750px;
    padding: 0;
    margin: ${({ theme }) => theme.spacing.big} auto;
  }
`;
export const fadeInEffect = css`
  visibility: ${({ visibility }) => (visibility ? "visible" : "hidden")};
  opacity: ${({ visibility }) => (visibility ? "1" : "0")};
  transition: visibility 0s,
    opacity ${({ fadeInTime }) => fadeInTime || "0.25s"} ease-in;
`;
