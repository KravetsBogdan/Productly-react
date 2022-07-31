import React, { Component } from 'react'
import product_manager from '../image/productly_manager.png'

export default class Product_manager extends Component {
  render() {
    return (
        <section className="product_manager">
            <div className="container">
                <div className="product_manager-image-holder grid-a">
                    <img src={product_manager} alt="image description" className="product_manager-image" />
                </div>
                <div className="product_manager-text-holder grid-b">
                    <span className="product_manager-pseudo-title">Easier decision making for</span>
                    <h1 className="product_manager-title">Product Managers</h1>
                    <div className="product_manager-description">
                        <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
                    </div>
                    <ul className="product_manager-list">
                        <li className="product_manager-item">Never worry about overpaying for your energy again.</li>
                        <li className="product_manager-item">We will only switch you to energy companies that we trust and will treat you right</li>
                        <li className="product_manager-item">We track the markets daily and know where the savings are.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
  }
}
