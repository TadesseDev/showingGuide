import styled from "styled-components";

const SidebarComponent = styled.div`
  min-width: max-content;
  background-color: white;
  padding: 5vh 2vw;
  height: max-content;
  #content-container {
    margin-left: 5px 0;
    padding: 5px 0;
    ul {
      li {
        &:hover {
          box-shadow: 0 0 10px var(--blur2);
        }
        a {
          padding: 10px 0;
          margin: 5px 0;
          display: flex;
          align-items: center;
        }
      }
      margin-bottom: 15vh;
    }
  }
  #bar {
    height: 40px;
    background: var(--secondary-color);
    margin: 10px 0;
    border-radius: 5px;
  }
  #sidebar-icon {
    width: 40px;
    img {
      width: 100%;
    }
  }
  .arrange-vertical{
    .icon{
      margin-left 0;
    }
  }
`;

export default SidebarComponent;
