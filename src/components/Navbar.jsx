import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa6";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="nav-logo" href="./Navbar.jsx">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy Logo"
          />
        </a>
        {/*  */}
        <div class="sectpre">
          <div class="categorydrop">
            <div>
              <p>Categories</p>
            </div>
            <div class="dropdownnav">
              <ul>
                <div class="dropdownnavchildsection">
                  <li>
                    Development <FaAngleRight />
                  </li>
                  <div class="dropdownnavchild">
                    <ul>
                      <li>Business</li>
                      <li>Finance and Accounting</li>
                      <li>IT and Software</li>
                      <li>Personal Development</li>
                      <li>Design</li>
                      <li>Marketing</li>
                      <li>Lifestyle</li>
                      <li>Photograpy and Video</li>
                      <li>Health and Fitness</li>
                      <li>Music</li>
                    </ul>
                  </div>
                </div>
                <div class="dropdownnavchildsection">
                  <li>
                    Business <FaAngleRight />
                  </li>
                  <div class="dropdownnavchild">
                    <ul>
                      <li>Business</li>
                      <li>Finance and Accounting</li>
                      <li>IT and Software</li>
                      <li>Personal Development</li>
                      <li>Design</li>
                      <li>Marketing</li>
                      <li>Lifestyle</li>
                      <li>Photograpy and Video</li>
                      <li>Health and Fitness</li>
                      <li>Music</li>
                    </ul>
                  </div>
                </div>
                <li>
                  Finance and Accounting <FaAngleRight />
                </li>
                <li>
                  IT and Software <FaAngleRight />
                </li>
                <li>
                  Personal Developent
                  <FaAngleRight />
                </li>
                <li>
                  Design <FaAngleRight />
                </li>
                <li>
                  Marketing <FaAngleRight />
                </li>
                <li>
                  Lifestyle <FaAngleRight />
                </li>
                <li>
                  Photograpy and Video <FaAngleRight />
                </li>
                <li>
                  Health and Fitness <FaAngleRight />
                </li>
                <li>
                  Music <FaAngleRight />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <IoSearchSharp className="search-icon" />
        <input
          className="search-bar"
          type="text"
          placeholder="Search for anything"
        />
        <button className="plan">Plans & Pricing</button>
        <div class="business">
          <p className="plan">Udemy Business</p>
          <div className="udemy-busi">
            <h2>
              Get your team access to over
              <br /> 15,000 top Udemy courses,
              <br />
              anytime, anywhere.
            </h2>
            <button>Try Udemy Business</button>
          </div>
        </div>
        {/*  */}
        <div class="business">
          <p className="plan">Teach on Udemy</p>
          <div className="udemy-busi">
            <h2>
              Turn what you know into an
              <br /> opportunity and reach
              <br />
              millions around the world.
            </h2>
            <button>Learn more</button>
          </div>
        </div>
        {/* <button className="teach">Teach on Udemy</button> */}
        <MdOutlineShoppingCart className="cart-logo" />
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
        <button className="world-logo">
          <TbWorld />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
