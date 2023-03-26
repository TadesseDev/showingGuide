import React, { useContext } from "react";
import MainComponent, { Carousels, Content } from "./styled/main.styled";
import TopNavigation from "./TopNavigation";
import iconsContext from "../context/iconsContext";
import picture_1 from "../resources/images/pictures/picture_1.png";
import picture_2 from "../resources/images/pictures/picture_2.png";
import picture_3 from "../resources/images/pictures/picture_3.png";
export default function Main() {
  const pictures = [picture_1, picture_2, picture_3];
  const {
    arrow_back,
    arrow_next,
    arrow_down,
    notifications,
    search,
    setting,
    logout,
    user,
  } = useContext(iconsContext);
  return (
    <MainComponent>
      <TopNavigation />
      <Carousels>
        {pictures.map((picture, index) => (
          <img src={picture} alt={"picture_ " + index} />
        ))}

        <img
          src={arrow_back}
          alt="Previous picture"
          className="previous-picture arrow"
        />
        <img
          src={arrow_next}
          alt="next picture"
          className="next-picture arrow"
        />
      </Carousels>
      <Content>
        <div className="left">
          <div>
            <button>For Sale</button>
            <button>Add List</button>
          </div>
          <strong>MSL#: E5579076 </strong>
          <p>
            listed for: <em>$1,549,586</em>
          </p>
          <ul>
            <li>
              <a>
                <img src={arrow_back} alt="" className="icon" />
                <span className="text">View on map</span>
              </a>
            </li>
            <li>
              <a>
                <img src={arrow_back} alt="" className="icon" />
                <span className="text">Get Direction</span>
              </a>
            </li>
            <li>
              <a>
                <img src={arrow_back} alt="" className="icon" />
                <span className="text">Share</span>
              </a>
            </li>
            <li>
              <a>
                <img src={arrow_back} alt="" className="icon" />
                <span className="text">My Notes</span>
              </a>
            </li>
          </ul>
          <div class="listing">
            <span>Listing Agent</span>
            <p>Courtney Henry</p>
            <div className="phone-number">
              <span>
                <img src={arrow_back} alt="" className="icon" />
                +905524898277
              </span>
              <img src={arrow_back} alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="middle"></div>
        <div className="right"></div>
      </Content>
    </MainComponent>
  );
}
