import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track submenu visibility

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the submenu visibility
  };

  return (
    <StyledWrapper>
      <div className="menu">
        <div className="item">
          <div className="link hover:text-white duration-500 flex justify-center items-center" onClick={toggleMenu}>
            <span>What We Offer</span>
            <svg viewBox="0 0 360 360" space="preserve">
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </g>
            </svg>
          </div> 
          {isOpen && ( // Conditional rendering for the submenu
            <div className="submenu md:-ml-10">
              <div className="submenu-item w-full">
                <Link to="/service/psychological-services" onClick={toggleMenu} className="submenu-link">
                  Psychological Services
                </Link>
              </div>
              <div className="submenu-item w-full">
                <Link to="/service/psychiatric-services" onClick={toggleMenu} className="submenu-link">
                  Psychiatry Services
                </Link>
              </div>
              <div className="submenu-item w-full">
                <Link to="/service/speech-language-therapy" onClick={toggleMenu}  className="submenu-link">
                  Speech-Language Therapy
                </Link>
              </div>
              <div className="submenu-item w-full">
                <Link to="/service/career-counseling" onClick={toggleMenu} className="submenu-link">
                  Career Counseling
                </Link>
              </div>
              <div className="submenu-item w-full">
                <Link to="/service/rehab-services" onClick={toggleMenu} className="submenu-link">
                  Addiction / Rehab Counseling
                </Link>
              </div>
              <div className="submenu-item w-full">
                <Link to="/service/marital-counseling" onClick={toggleMenu} className="submenu-link">
                  Marital Counseling
                </Link>
              </div>
              <div className="submenu-item w-full">
                <Link to="/service/treatment-psychiatric-illnesses" onClick={toggleMenu} className="submenu-link">
                  Treatment of Psychiatric Illnesses
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .menu {
    font-size: 16px;
    line-height: 1;
    color: #000000;
    width: fit-content;
    list-style: none;
  }

  .menu a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .menu .link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 12px 8px;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer; // Change cursor to pointer on click
  }

  .menu .link::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #219ebc;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu .link svg {
    width: 14px;
    height: 14px;
    fill: #000000;
    transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu .item {
    position: relative;
  }

  .menu .item .submenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    border-radius: 0 0 16px 16px;
    left: 0;
    width: 150%;
    // margin-left: -25%;
    margin-top: 1px;
    backdrop-filter: blur(30px);
    overflow: hidden;
    border: 1px solid #cccccc;
    opacity: 1; // Set to 1 since we are using conditional rendering
    visibility: visible; // Set to visible since we are using conditional rendering
    transform: translateY(0); // Set to normal since we are using conditional rendering
    transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1;
    pointer-events: auto; // Set to auto since we are using conditional rendering
    list-style: none;
  }

  /* Remove hover styles */
  .submenu {
    background: white;
  }

  .submenu .submenu-item w-full {
    transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .submenu .submenu-link {
    display: block;
    padding: 12px 24px;
    width: 100%;
    position: relative;
    text-align: center;
    transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .submenu .submenu-item w-full:last-child .submenu-link {
    border-bottom: none;
  }

  .submenu .submenu-link::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    width: 100%;
    height: 100%;
    background-color: #219ebc;
    z-index: -1;
    transform-origin: left;
    transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .submenu .submenu-link:hover:before {
    transform: scaleX(1);
    transform-origin: right;
  }

  .submenu .submenu-link:hover {
    color: #ffffff;
  }
`;

export default DropDown;
