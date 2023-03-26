import styled from "styled-components";

const SidebarComponent = styled.div`
  width: 40vw;
  min-width: max-content;
  max-width: 300px;
  background-color: white;
  padding: 20px 0;
  min-height: calc(100vh - 65px);
  #content-container {
    border: 2px #9747ff dashed;
    margin-left: 10px;
    padding: 5px;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        border: 1px solid transparent;
        &:hover {
          border: 1px solid #2e6ef6;
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
    background: #2e6ef6;
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
