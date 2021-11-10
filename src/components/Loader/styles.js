import styled from "styled-components";
import { loading } from "../../styles/keyframes";

export const CenterContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  height: 100vh;
  width: 100%;
`;

export const Circle = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  animation: ${loading} infinite;
  animation-duration: ${({ duration }) => (duration ? duration : 0)}ms;
`;
