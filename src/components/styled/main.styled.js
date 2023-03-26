import styled from "styled-components";

const MainComponent = styled.div`
  padding: 2vw 0;
  flex-grow: 1;
  max-width: fill-available;
`;
export const Carousels = styled.div`
  margin: 20px 0;
  display: flex;
  overflow: scroll;
  height: 250px;
  position: relative;
  img {
    height: 100%;
    margin: 0 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px silver;
  }

  .arrow {
    position: absolute;
    height: 3vw;
    max-height: 50px;
    top: 50%;
  }
  .next-picture {
    left: 92%;
    transform: translateY(-50%);
  }
  .previous-picture {
    left: 8%;
    transform: translate(-100%, -50%);
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  
`;
export default MainComponent;
