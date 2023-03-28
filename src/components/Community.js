import React from 'react';
import Comm from '../Images/community.png';
import '../styles/Community.css';

const Community = () => (
  <>
    <div className="community-container">
      <span>JOIN OUR COMMUNITY</span>
      <h1>Are you  ready to connect with the future talent of the tech world</h1>
      <p>Meet Up With Other Techstars And Grow Together</p>
      <img alt="img" src={Comm} />
    </div>

    <div>
      <h1>Frequently Asked Questions</h1>
      <p>
        High-Defination Video is Video of Higher Resolution And
        Quality Than Standard Definition.
        While There’s No Standard Meaning For High Definition,
        Generally Any Standard Video Image
      </p>
    </div>
    <div>
      <p>Is there a free trial available?</p>
      <p>
        High-Defination Video is Video of Higher Resolution And
        Quality Than Standard Definition.
        While There’s No Standard Meaning For High Definition,
        Generally Any Standard Video Image
      </p>
      <div className="container">
        <div className="row">
          <div className="col d-flex align-items-center">
            <i className="fas fa-plus mr-2" />
            Row 1
          </div>
        </div>
        <div className="row">
          <div className="col d-flex align-items-center">
            <i className="fas fa-plus mr-2" />
            Row 2
          </div>
        </div>
        <div className="row">
          <div className="col d-flex align-items-center">
            <i className="fas fa-plus mr-2" />
            Row 3
          </div>
        </div>
        <div className="row">
          <div className="col d-flex align-items-center">
            <i className="fas fa-plus mr-2" />
            Row 4
          </div>
        </div>
        <div className="row">
          <div className="col d-flex align-items-center">
            <i className="fas fa-plus mr-2" />
            Row 5
          </div>
        </div>
      </div>

    </div>
  </>
);

export default Community;
