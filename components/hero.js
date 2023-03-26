import React from 'react'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <header className={`hero-hero ${props.rootClassName} `}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span>
              Suleiman
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="hero-text1">(Steven)</span>
            <span> Leadbitter</span>
          </h1>
          <span className="hero-description">{props.Description}</span>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="lazy"
          className="hero-image"
        />
        <div className="hero-image1">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            loading="lazy"
            className="hero-image2"
          />
          <img
            alt={props.image_alt12}
            src={props.image_src12}
            loading="lazy"
            className="hero-image3"
          />
          <img
            alt={props.image_alt121}
            src={props.image_src121}
            loading="lazy"
            className="hero-image4"
          />
        </div>
      </header>
      <style jsx>
        {`
          .hero-hero {
            gap: var(--dl-space-space-threeunits);
            width: 1258px;
            height: 700px;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 120px;
            flex-direction: row;
          }
          .hero-content {
            gap: var(--dl-space-space-unit);
            width: 1407px;
            display: flex;
            position: relative;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .hero-title {
            color: rgb(18, 40, 33);
            width: 473px;
            font-size: 72px;
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
            line-height: 92px;
          }
          .hero-description {
            color: rgb(18, 40, 33);
            font-size: 24px;
            max-width: 600px;
            font-family: Lato;
            line-height: 36px;
          }
          .hero-image {
            width: 488px;
            height: 100%;
            object-fit: cover;
          }
          .hero-image1 {
            width: 14px;
            height: 700px;
            display: flex;
            overflow-x: hidden;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .hero-image2 {
            left: 632px;
            width: 325px;
            bottom: -64px;
            height: 295px;
            position: absolute;
            box-shadow: 0px 2px 40px -10px #7c92da;
            object-fit: cover;
          }
          .hero-image3 {
            right: 19px;
            width: 149px;
            bottom: -116px;
            height: 144px;
            position: absolute;
            box-shadow: 0px 2px 40px -10px #7c92da;
            object-fit: cover;
          }
          .hero-image4 {
            top: 48px;
            left: 531px;
            width: 265px;
            height: 224px;
            position: absolute;
            box-shadow: 0px 2px 40px -10px #7c92da;
            object-fit: cover;
          }

          @media (max-width: 1200px) {
            .hero-hero {
              width: 1184px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .hero-image4 {
              top: 29px;
              left: 484px;
            }
          }
          @media (max-width: 991px) {
            .hero-hero {
              gap: var(--dl-space-space-threeunits);
              height: auto;
              align-items: flex-start;
              padding-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .hero-content {
              width: 983px;
              padding-left: var(--dl-space-space-twounits);
            }
            .hero-title {
              width: 648px;
            }
            .hero-image {
              top: -2px;
              right: 27px;
              width: 385px;
              height: 570px;
              position: absolute;
            }
            .hero-image1 {
              width: 100%;
              height: 187px;
              position: static;
              align-items: flex-end;
              aspect-ratio: 1;
              justify-content: flex-start;
            }
            .hero-image2 {
              top: 476px;
              left: 76px;
              height: 430px;
              display: none;
              position: absolute;
            }
            .hero-image3 {
              top: 407px;
              left: 540px;
              width: 269px;
              height: 194px;
              position: absolute;
            }
            .hero-image4 {
              top: 469px;
              left: 78px;
              height: 430px;
              display: none;
              position: absolute;
            }
          }
          @media (max-width: 767px) {
            .hero-content {
              width: 284px;
            }
            .hero-title {
              color: rgb(18, 40, 33);
              width: 250px;
              font-size: 36px;
              font-style: normal;
              font-weight: 500;
              line-height: 46px;
            }
            .hero-text1 {
              color: #a2a2a2;
            }
            .hero-description {
              font-size: 16px;
              line-height: 24px;
            }
            .hero-image2 {
              height: 300px;
            }
            .hero-image3 {
              left: 136px;
              width: 218px;
              bottom: -97px;
              height: 245px;
            }
            .hero-image4 {
              height: 300px;
            }
          }
          @media (max-width: 479px) {
            .hero-hero {
              height: 867px;
            }
            .hero-content {
              width: 420px;
            }
            .hero-title {
              width: 391px;
            }
            .hero-description {
              font-size: 20px;
            }
            .hero-image {
              width: 472px;
              position: static;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .hero-image1 {
              display: none;
            }
            .hero-image2 {
              height: 170px;
            }
            .hero-image3 {
              height: 170px;
              display: none;
            }
            .hero-image4 {
              height: 170px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  image_alt12: 'image',
  image_src: '/playground_assets/img_7906-900h.jpg',
  image_src12: '/playground_assets/img_2290-300h.jpeg',
  image_alt1: 'image',
  image_src1: '/playground_assets/img_2543-500h.jpg',
  image_src121: '/playground_assets/102624292-500h.png',
  image_alt121: 'image',
  image_alt: 'image',
  Description:
    'I am a senior product designer with a wealth of experience in UX and UI design along with development knowledge and creating scalable design systems.',
  rootClassName: '',
}

Hero.propTypes = {
  image_alt12: PropTypes.string,
  image_src: PropTypes.string,
  image_src12: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_src121: PropTypes.string,
  image_alt121: PropTypes.string,
  image_alt: PropTypes.string,
  Description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero
