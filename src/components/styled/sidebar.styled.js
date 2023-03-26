import styled from "styled-components";

const SidebarComponent = styled.div`
  min-width: max-content;
  background-color: white;
  padding: 2vh 0;
  min-height: calc(100vh - 65px);
  #content-container {
    border: 2px #9747ff dashed;
    margin-left: 10px;
    padding: 5px;
    ul {
      li {
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
