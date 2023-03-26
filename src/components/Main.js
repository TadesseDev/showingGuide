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
    view_on_map,
    get_directions,
    share,
    my_note,
    turkey,
    sms,
    _1_176_sq_ft,
    _1_963_sq_ft,
    _2_bathrooms,
    _2_garage,
    _3_bedrooms,
    apartment,
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
            <button class="active">For Sale</button>
            <button>Add List</button>
          </div>
          <strong>MSL#: E5579076 </strong>
          <p className="blur-text">
            listed for: <span>$1,549,586</span>
          </p>
          <ul>
            <li>
              <a>
                <img src={view_on_map} alt="" className="icon" />
                <span className="text">View on map</span>
              </a>
            </li>
            <li>
              <a>
                <img src={get_directions} alt="" className="icon" />
                <span className="text">Get Direction</span>
              </a>
            </li>
            <li>
              <a>
                <img src={share} alt="" className="icon" />
                <span className="text">Share</span>
              </a>
            </li>
            <li>
              <a>
                <img src={my_note} alt="" className="icon" />
                <span className="text">My Notes</span>
              </a>
            </li>
          </ul>
          <div class="listing">
            <small className="blur">Listing Agent</small>
            <small>Courtney Henry</small>
            <div className="phone-number">
              <span>
                <img src={turkey} alt="" className="icon" />
                <small>+905524898277</small>
              </span>
              <img src={sms} alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="top">
            <ul>
              <strong>Property Details</strong>
              <li>
                <a>
                  <img src={apartment} alt="" className="icon" />
                  <p className="text">Apartment</p>
                </a>
              </li>
              <li>
                <a>
                  <img src={_3_bedrooms} alt="" className="icon" />
                  <p className="text">3 Bedrooms</p>
                </a>
              </li>
              <li>
                <a>
                  <img src={_2_bathrooms} alt="" className="icon" />
                  <p className="text">2 Bathrooms</p>
                </a>
              </li>
              <li>
                <a>
                  <img src={_2_garage} alt="" className="icon" />
                  <p className="text">2 Garage</p>
                </a>
              </li>
              <li>
                <a>
                  <img src={_1_963_sq_ft} alt="" className="icon" />
                  <p className="text">1,963 sq. ft.</p>
                </a>
              </li>
              <li>
                <a>
                  <img src={_1_176_sq_ft} alt="" className="icon" />
                  <p className="text">1,176 sq. ft.</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="right"></div>
      </Content>

      <Content></Content>
    </MainComponent>
  );
}
