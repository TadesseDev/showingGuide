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
    $1_176_sq_ft,
    $1_963_sq_ft,
    $2_bathrooms,
    $2_garage,
    $3_bedrooms,
    apartment,
  } = useContext(iconsContext);
  return (
    <MainComponent>
      <TopNavigation />
      <Carousels>
        {pictures.map((picture, index) => (
          <img src={picture} alt={"picture_ " + index} key={index} />
        ))}

        <img
          src={arrow_back}
          alt="Previous"
          className="previous-picture arrow"
        />
        <img src={arrow_next} alt="next " className="next-picture arrow" />
      </Carousels>
      <Content>
        <div className="left">
          <div className="buttons">
            <button className="active">For Sale</button>
            <button>Add List</button>
          </div>
          <strong>MSL#: E5579076 </strong>
          <p className="blur-text">
            listed for: <span>$1,549,586</span>
          </p>
          <strong>2118 Thornridge Cir. Syracuse, Connecticut 35624</strong>
          <ul>
            <li>
              <a href="/">
                <img src={view_on_map} alt=" view on map" className="icon" />
                <span className="text">View on map</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src={get_directions}
                  alt="Get Direction"
                  className="icon"
                />
                <span className="text">Get Direction</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={share} alt="Share" className="icon" />
                <span className="text">Share</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={my_note} alt="My Notes" className="icon" />
                <span className="text">My Notes</span>
              </a>
            </li>
          </ul>
          <div className="listing">
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
                <a href="/">
                  <img src={apartment} alt="Apartment" className="icon" />
                  <p className="text">Apartment</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={$3_bedrooms} alt="Bedrooms" className="icon" />
                  <p className="text">3 Bedrooms</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={$2_bathrooms} alt="Bathrooms" className="icon" />
                  <p className="text">2 Bathrooms</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={$2_garage} alt="Garage" className="icon" />
                  <p className="text">2 Garage</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={$1_963_sq_ft} alt="ft" className="icon" />
                  <p className="text">1,963 sq. ft.</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={$1_176_sq_ft} alt="ft" className="icon" />
                  <p className="text">1,176 sq. ft.</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <ul className="navigation">
              <li>
                <a href="/">Key Facts</a>
              </li>
              <li>
                <a href="/">Details</a>
              </li>
              <li>
                <a href="/">Rooms</a>
              </li>
            </ul>
            <ul className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                commodo risus a mattis semper. Integer placerat volutpat odio,
                at pulvinar tortor laoreet mattis. Proin aliquet semper tempus.
              </p>
              <ul>
                <li>
                  <span>tax</span>
                  <span>$1,340 / 2022</span>
                </li>
                <li>
                  <span>Type</span>
                  <span>Single-Family</span>
                </li>
                <li>
                  <span>Building Age</span>
                  <span>5 Year</span>
                </li>
                <li>
                  <span>Size</span>
                  <span>1500 - 2000 feet2</span>
                </li>
                <li>
                  <span>Parking</span>
                  <span>Detached 2 Garage, 6 Parking</span>
                </li>
                <li>
                  <span>Basement</span>
                  <span>Unfinished</span>
                </li>
                <li>
                  <span>MLS#</span>
                  <span>E5579076</span>
                </li>
                <li>
                  <span>Possession</span>
                  <span>5 Day</span>
                </li>
              </ul>
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                commodo risus a mattis semper. Integer placerat volutpat odio,
                at pulvinar tortor laoreet mattis. Proin aliquet semper tempus.
                Etiam auctor lacus leo <a href="/">read more..</a>
              </p>
            </ul>
          </div>
        </div>
        <div className="right"></div>
      </Content>

      <Content></Content>
    </MainComponent>
  );
}
