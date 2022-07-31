import React, { Component } from 'react'
import first_col from '../image/first_col.png'
import second_col from '../image/second_col.png'
import third_col from '../image/third_col.png'
import fourth_col from '../image/fourth_col.png'

export default class Design_tools extends Component {
  render() {
    return (
      <section className="design_tools">
        <div className="container">
            <h1 className="design_tools-title">We design tools to unveil your superpowers</h1>
            <div className="design_tools-col-holder">
                <div className="design_tools-col">
                    <div className="design_tools-image-holder">
                        <img src={first_col} alt="image description" className="design_tools-image" />
                    </div>
                    <strong className="design_tools-col-title">First click tests</strong>
                    <div className="design_tools-col-description">
                        <p>While most people enjoy casino gambling,</p>
                    </div>
                </div>
                <div className="design_tools-col">
                    <div className="design_tools-image-holder">
                        <img src={second_col} alt="image description" className="design_tools-image" />
                    </div>
                    <strong className="design_tools-col-title">Design surveys</strong>
                    <div className="design_tools-col-description">
                        <p>Sports betting, lottery and bingo playing for the fun</p>
                    </div>
                </div>
                <div className="design_tools-col">
                    <div className="design_tools-image-holder">
                        <img src={third_col} alt="image description" className="design_tools-image" />
                    </div>
                    <strong className="design_tools-col-title">Preference tests</strong>
                    <div className="design_tools-col-description">
                        <p>The Myspace page defines the individual.</p>
                    </div>
                </div>
                <div className="design_tools-col">
                    <div className="design_tools-image-holder">
                        <img src={fourth_col} alt="image description" className="design_tools-image" />
                    </div>
                    <strong className="design_tools-col-title">Five second tests</strong>
                    <div className="design_tools-col-description">
                        <p>Personal choices and the overall personality of the person. </p>
                    </div>
                </div>
            </div>
            <div className="design_tools-btn-holder">
                <a href="#" className="btn-orange_big">SIGN UP NOW</a>
            </div>
        </div>
      </section>
    )
  }
}
