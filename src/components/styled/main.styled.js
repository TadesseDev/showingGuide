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
  display: grid;
  grid-template-columns: 22% 55% 22%;
  justify-content: space-between;
  > * {
    padding: 10px;
    background-color: #ffffff;
  }

  .middle {
    background-color: transparent;

    > * {
      background-color: #ffffff;
      padding: 10px;
    }
    .top {
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 0.8rem;
        strong{
          margin-right: 10px;
        }
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--blur);
          .icon{
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  .left {
    li {
      border: 1px solid var(--blur);
      margin: 2px;
      margin: 5px;
      &:hover {
        box-shadow: 0 0 10px silver;
      }
      a {
        padding: 5px 10px;
        display: flex;
        align-items: center;
      }
    }
  }
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
    .blur {
      color: var(--blur);
    }
    span {
      display: inline-flex;
      align-items: center;
    }
  }
`;
export default MainComponent;
