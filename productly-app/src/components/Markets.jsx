import React, { Component } from 'react'
import markets from '../image/markets.png'

export default class Markets extends Component {
  render() {
    return (
      <section className="markets">
        <div className="container">
          <div className="markets-text-holder">
            <span  pan className="markets-pseudo-title">Optimisation for</span>
            <h1 className="markets-title">Marketers</h1>
            <div className="markets-description">
              <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
            </div>
            <h2 className="markets-second-title">Accessory makers</h2>
            <div className="markets-description">
              <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
            </div>
            <h2 className="markets-second-title">Alterationists</h2>
            <div className="markets-description">
              <p>If you are looking for a new way to promote your business that won’t cost you more money,</p>
            </div>
            <h2 className="markets-second-title">Custom Design designers</h2>
            <div className="markets-description">
              <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
            </div>
          </div>
          <div className="markets-image-holder">
            <img src={markets} alt="image description" className="markets-image" />
          </div>
        </div>
      </section>
    )
  }
}

