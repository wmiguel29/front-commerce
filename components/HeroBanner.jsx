import React from 'react';
import Link from 'next/link';

// import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SMALL TEXT</p>
        <h3>MIDTEXT</h3>
        <h1>LARGETEXT</h1>
        <img src="" alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/ID`}>
            <button type="button">BOTON</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner