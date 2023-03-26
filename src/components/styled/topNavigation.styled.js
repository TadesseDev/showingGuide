import styled from "styled-components";

const TopNavigationComponent = styled.div`
  display: flex;
  justify-content: space-between;
  height: max-content;
  #notification {
    height: 20px;
    position: relative;
  }
  .notification-count {
    background-color: var(--secondary-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -20px;
    left: 50%;
    width: 15px;
    height: 15px;
    color: white;
    font-size: 0.5rem;
    border-radius: 50%;
  }
  .icon {
    margin: 10px;
  }
  #stat {
    display: flex;
    align-items: center;
    gap: 1vw;
    p {
      font-size: 1.5vw;
    }
  }
  .userDetail {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
  }
  .user {
    display: inline-flex;
    flex-direction: column;
    .title {
      font-size: 0.8rem;
      color: var(--blur);
    }
  }
`;

export default TopNavigationComponent;
