import React from 'react'

import PropTypes from 'prop-types'

import Branding from './branding'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer">
        <div className="footer-information">
          <div className="footer-content">
            <div className="footer-header">
              <Branding rootClassName="branding-root-class-name"></Branding>
              <p className="footer-text">{props.text}</p>
            </div>
            <div className="footer-contact-list">
              <div className="footer-contact">
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="footer-image"
                />
                <span className="footer-text1">{props.phone}</span>
              </div>
              <div className="footer-contact1">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="footer-image1"
                />
                <span className="footer-text2">{props.phone1}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <span className="link">{props.Text6}</span>
            <span className="link">{props.Text7}</span>
            <span className="link">{props.Text8}</span>
            <span className="link">{props.Text9}</span>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-information {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-content {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-header {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 18px;
            max-width: 600px;
            font-family: Lato;
            line-height: 27px;
          }
          .footer-contact-list {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-contact {
            gap: 11px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-image {
            width: 24px;
            height: 18px;
            object-fit: cover;
          }
          .footer-text1 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 18px;
            font-family: Lato;
            line-height: 18px;
          }
          .footer-contact1 {
            gap: 11px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-image1 {
            width: 18px;
            height: 24px;
            object-fit: cover;
            margin-left: 3px;
            margin-right: 3px;
          }
          .footer-text2 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 18px;
            font-family: Lato;
            line-height: 18px;
          }
          .footer-links {
            gap: 110px;
            display: flex;
            align-items: flex-start;
            padding-right: 135px;
            flex-direction: row;
          }
          .footer-column {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .footer-footer {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer-header {
              gap: var(--dl-space-space-unit);
            }
            .footer-links {
              gap: var(--dl-space-space-threeunits);
              padding-right: 0px;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  Text9: 'Facebook',
  image_alt: 'image',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  image_src: '/playground_assets/group%201639.svg',
  phone: 'sulcalibur@me.com',
  Text8: 'Twitter',
  Text6: 'Linkedin',
  phone1: '+44 7545.619.477',
  image_alt1: 'image',
  image_src1: '/playground_assets/group%201640.svg',
  Text7: 'Instagram',
}

Footer.propTypes = {
  Text9: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  phone: PropTypes.string,
  Text8: PropTypes.string,
  Text6: PropTypes.string,
  phone1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  Text7: PropTypes.string,
}

export default Footer
