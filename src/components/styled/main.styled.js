import styled from "styled-components";

const MainComponent = styled.div`
  padding: 2vw 0;
  flex-grow: 1;
  max-width: fill-available;

  li {
    border: 1px solid var(--blur);
    margin: 2px;
    &:hover {
      box-shadow: 0 0 10px silver;
    }
    a {
      padding: 10px;
      margin: 5px;
      display: flex;
      align-items: center;
    }
  }
  .container {
    background-color: #ffffff;
  }
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
width: max-content;
  padding: 10px;
  .blur-text {
    color: var(--blur);
    span {
      color: var(--secondary-color);
    }
  }
  button {
    outline: none;
    border: none;
    padding: 10px 15px;
    background-color: var(--secondary-color);
    margin: 5px;
    border-radius: 5px;
    color: white;
  }
  .active {
    background-color: var(--green_0-5);
    color: var(--green);
  }
  .listing {
    background: var(--blur2);
    margin-top: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    span {
      display: inline-flex;
      align-items: center;
    }
  }
`;
export default MainComponent;
