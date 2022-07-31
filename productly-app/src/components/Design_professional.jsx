import React, { Component } from 'react'
import design_professional from '../image/design_professional.png'

export default class Design_professional extends Component {
  render() {
    return (
      <section className="design_professional">
          <div className="container">
            <div className="design_professional-text-holder">
              <span className="design_professional-pseudo-title">Effortless Validation for</span>
              <h1 className="design_professional-title">Design Professionals</h1>
              <div className="design_professional-description">
                <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
              </div>
              <h2 className="design_professional-second-title">Accessory makers</h2>
              <div className="design_professional-description">
                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
              </div>
              <h2 className="design_professional-second-title">Alterationists</h2>
              <div className="design_professional-description">
                <p>If you are looking for a new way to promote your business that won’t cost you more money,</p>
              </div>
              <h2 className="design_professional-second-title">Custom Design designers</h2>
              <div className="design_professional-description">
                <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
              </div>
            </div>
            <div className="design_professional-image-holder">
                <img src={design_professional} alt="image description" className="design_professional-image" />
            </div>
          </div>
      </section>
    )
  }
}
