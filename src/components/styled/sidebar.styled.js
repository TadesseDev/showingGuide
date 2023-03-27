import styled from "styled-components";

const SidebarComponent = styled.div`
  min-width: max-content;
  background-color: white;
  padding: 5vh 5px;
  height: max-content;
  #content-container {
    margin-left: 5px;
    padding: 5px;
    ul {
      li {
        &:hover {
          box-shadow: 0 0 10px var(--blur2);
        }
        a {
          padding: 10px;
          margin: 5px;
          display: flex;
          align-items: center;
        }
      }
      margin-bottom: 15vh;
    }
  }
  #top-sidebar {
    max-width: 80%;
    margin: auto;
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
`;

export default SidebarComponent;
