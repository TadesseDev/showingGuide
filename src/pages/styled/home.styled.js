import styled from "styled-components";

const HomeComponent = styled.div`
  color: #1e1e1e;
  display: grid;
  grid-template-columns: min(25vw, 300px) calc(100vw - min(25vw, 300px) - 40px);
  gap: 20px;
`;
export default HomeComponent;
