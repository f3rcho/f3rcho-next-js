import React from 'react';
import Image from 'next/image';
export const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero-container'>
        <div className='hero-card card'>
          <div className='hero-row'>
            <div className='hero-image'>
              <Image
                className='hero-card-image'
                id=''
                src='https://f3rcho.github.io/mywebpage/assets/images/logo.jpg'
                alt='hero'
                width={300}
                height={300}
              />
            </div>

            <div className='hero-content'>
              <div className='hero-body'>
                <h5 className='hero-title'>
                  Full Stack / Backend JavaScript Developer
                </h5>
                <p className='hero-card-text'>
                  Hello everyone, I&apos;m Fernando Cordero, a JavaScript
                  Developer lover. Vivamus magna justo, lacinia eget consectetur
                  sed, convallis at tellus. Mauris blandit aliquet elit, eget
                  tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta
                  dapibus. Vivamus suscipit tortor eget felis porttitor
                  volutpat. Sed porttitor lectus nibh. Curabitur arcu erat,
                  accumsan id imperdiet et, porttitor at sem. Curabitur aliquet
                  quam id dui posuere blandit. Sed porttitor lectus nibh. Donec
                  rutrum congue leo eget malesuada. Nulla porttitor accumsan
                  tincidunt.
                </p>
                <p className='hero-card-text'>Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
