import React from 'react'
import "./PricePlan.css"
import { RiUserFill } from "react-icons/ri";
import { PiUsersFill } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function PricePlan() {
  return (
    <div className="price-container">
      <h2>Accelerate growth — for you or your organization</h2>
      <p>
        Reach goals faster with one of our plans or programs. Try one free today
        or contact sales to learn more.
      </p>
      <div className="plans">
        <div className="personal-plan">
          <h3>Personal Plan</h3>
          <p className='all'>For you</p>
          <p className='all'><RiUserFill />  Individual</p>
          <p className="price">Starting at ₹850 per month</p>
          <p>Billed monthly or annually. Cancel anytime.</p>
          <button>Start subscription</button>
          <ul>
            <li><IoIosCheckmarkCircleOutline className='tick' /> Access to 11,000+ top courses</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Certification prep</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Goal-focused recommendations</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> AI-powered coding exercises</li>
          </ul>
        </div>
        <div className="team-plan">
          <h3>Team Plan</h3>
          <p className='all'>For your team</p>
          <p className='all'><PiUsersFill /> 2 to 20 people</p>
          <p className="price">₹1,167 a month per user</p>
          <p>Billed annually. Cancel anytime.</p>
          <button className='bbtn'>Start subscription</button>
          <ul>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Access to 11,000+ top courses</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Certification prep</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Goal-focused recommendations</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> AI-powered coding exercises</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Analytics and adoption reports</li>
          </ul>
        </div>
        <div className="team-plan">
          <h3>Enterprise Plan</h3>
          <p className='all'>For your whole organization</p>
          <p className='all'><PiUsersFill /> More than 20 people</p>
          <p className="price">Contact sales for pricing</p>
          <button className='bbbtn'>Request a demo</button>
          <ul>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Access to 25,000+ top courses</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Certification prep</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Goal-focused recommendations</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> AI-powered coding exercises</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Advanced analytics and insights</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Dedicated customer success team</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> International course collection featuring 15 languages</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Customizable content</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Hands-on tech training with add-on</li>
            <li><IoIosCheckmarkCircleOutline className='tick'/> Strategic implementation services with add-on</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PricePlan
