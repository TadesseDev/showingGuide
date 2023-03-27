import styled from "styled-components";

const MainComponent = styled.div`
  padding: 2vw 0;
  flex-grow: 1;
  max-width: fill-available;
  #carousel-container {
    position: relative;
  }
`;
export const Carousels = styled.div`
  margin: 20px 0;
  display: flex;
  overflow: scroll;
  height: 20vw;
  max-height: 400px;
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
  grid-template-columns: 20% 60% 20%;
  justify-content: space-between;
  font-size: 0.8rem;
  > * {
    padding: 10px;
    background-color: #ffffff;
    border-radius: 5px;
    height: max-content;
  }

  .middle {
    background-color: transparent;
    padding-top: 0;
    > * {
      background-color: #ffffff;
      padding: 10px;
      border-radius: 5px;
    }
    .top {
      margin-bottom: 20px;
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 0.8rem;
        strong {
          margin-right: 10px;
        }
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--blur);
          .icon {
            margin-bottom: 5px;
            width: 30px;
          }
        }
      }
    }
    .bottom {
      padding: 0px;
      .navigation {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--blur2);
        li {
          flex-grow: 1;
          &:first-child {
            border-bottom: 4px solid var(--secondary-color);
          }
        }
        a {
          display: block;
          text-align: center;
          width: 100%;
          padding: 20px 0;
        }
      }
      .content {
        padding: 15px;
        li {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--blur2);
          padding: 10px 0;
        }
        a {
          color: var(--secondary-color);
        }
      }
    }
  }
  .left {
    .buttons {
      display: flex;
      justify-content: space-around;
    }
    .active {
      background-color: var(--green_0-5);
      color: var(--green);
      padding: 10px 25px;
    }
    li {
      border: 1px solid var(--blur2);
      margin: 10px 0;
      border-radius: 5px;
      &:hover {
        box-shadow: 0 0 10px var(--blur2);
      }
      a {
        padding: 5px 10px;
        display: flex;
        align-items: center;
      }
    }
    .phone-number {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .blur-text {
    color: var(--blur);
    span {
      color: var(--secondary-color);
    }
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
  .right {
    .shortcut,
    .notify-me {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      border-radius: 5px;
    }
    .notify-me {
      background: var(--blur2);
      padding: 20px 10px;
    }
    .toggler {
      width: 40px;
      height: 20px;
      background: var(--blur2);
      border-radius: 40%;
      display: flex;
      align-items: center;
      padding: 2px;
      .circle {
        height: 15px;
        width: 15px;
        background: white;
        border-radius: 50%;
      }
    }
    ul {
      li {
        border: 1px solid var(--blur2);
        margin: 10px 0;
        border-radius: 5px;
        &:hover {
          box-shadow: 0 0 10px var(--blur2);
        }
        a {
          padding: 5px 10px;
          display: flex;
          align-items: center;
          gap: 5px;
          .icon{
            width: 15px;
          }
        }
      }
    }
    li.active {
      background-color: var(--secondary-color);
      a {
        color: #ffffff;
      }
    }
  }
`;
export default MainComponent;
