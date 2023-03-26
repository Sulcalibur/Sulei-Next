import React from 'react'

import PropTypes from 'prop-types'

const Banner = (props) => {
  return (
    <>
      <section className={`banner-banner ${props.rootClassName} `}>
        <div className="banner-container">
          <div className="banner-header">
            <h2 className="banner-title">{props.Title}</h2>
          </div>
          <a
            href="mailto:work@sulei.uk?subject=Work enquiry"
            className="banner-link button"
          >
            <span className="banner-text">
              <span>Schedule a meeting</span>
              <br></br>
            </span>
          </a>
        </div>
      </section>
      <style jsx>
        {`
          .banner-banner {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
          }
          .banner-container {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 110px;
            padding-left: var(--dl-space-space-fiveunits);
            margin-bottom: 140px;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #b768f6;
          }
          .banner-header {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner-title {
            color: #ffffff;
            width: 100%;
            font-size: 36px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 46px;
          }
          .banner-link {
            color: var(--dl-color-primary-300);
            text-transform: uppercase;
            text-decoration: none;
            background-color: #ffffff;
          }
          .banner-text {
            color: #4e00f0;
            font-style: normal;
            font-weight: 600;
          }

          @media (max-width: 991px) {
            .banner-banner {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .banner-container {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .banner-title {
              font-size: 32px;
              line-height: 41px;
            }
          }
        `}
      </style>
    </>
  )
}

Banner.defaultProps = {
  Title: 'Get in touch',
  rootClassName: '',
}

Banner.propTypes = {
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Banner
