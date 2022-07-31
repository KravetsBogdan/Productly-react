import React, { Component } from 'react'
import hero_image from '../image/hero_image.png'
import btn_play from '../image/btn_play.png'

export default class Hero_section extends Component {
  render() {
    return (
      <section className="hero_section">
        <div className="container">
            <div className="hero_section-text-holder">
               <h1 className="hero_section-title">The Design Thinking superpowers</h1>
               <div className="hero_section-text-description">
                <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
               </div>
               <ul className="hero_section-btn-list">
                <li className="hero_section-btn-item">
                    <a href="#" className="btn-orange_big">Get started</a>
                </li>
                <li className="hero_section-btn-item">
                    <a href="#" className="hero_section-btn-link"><img src={btn_play} alt="image description" className="hero_section-btn-play" />Watch the Video</a>
                </li>
               </ul>
            </div>
            <div className="hero_section-image-holder">
                <img src={hero_image} alt="image description" className="hero_section-img" />
            </div>
        </div>
      </section>
    )
  }
}
