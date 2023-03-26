import React from 'react'

import PropTypes from 'prop-types'

const Quote = (props) => {
  return (
    <>
      <section className="quote-quote">
        <div className="quote-content">
          <cite className="quote-quote1">{props.Quote}</cite>
          <div className="quote-author">
            <img
              alt={props.Avatar_alt}
              src={props.Avatar_src}
              className="quote-avatar"
            />
            <div className="quote-details">
              <span className="quote-name">{props.Name}</span>
              <span className="quote-origin">{props.Origin}</span>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .quote-quote {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-end;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 120px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .quote-content {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: flex-start;
            flex-direction: column;
          }
          .quote-quote1 {
            color: rgb(18, 40, 33);
            font-size: 40px;
            max-width: 1000px;
            font-style: italic;
            font-weight: 400;
            line-height: 51px;
          }
          .quote-author {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .quote-avatar {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .quote-details {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .quote-name {
            color: rgb(18, 40, 33);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .quote-origin {
            color: rgb(18, 40, 33);
            font-size: 20px;
          }
          @media (max-width: 991px) {
            .quote-quote {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .quote-content {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .quote-quote1 {
              font-size: 30px;
            }
            .quote-avatar {
              width: 60px;
              height: 60px;
            }
            .quote-details {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .quote-quote1 {
              font-size: 18px;
              line-height: 23px;
            }
            .quote-details {
              gap: 0;
            }
            .quote-name {
              font-size: 16px;
              line-height: 21px;
            }
            .quote-origin {
              font-size: 16px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

Quote.defaultProps = {
  Quote:
    '“Remarkable is a professional organization aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit aute”',
  Name: 'Michael Beltford, ',
  Avatar_src:
    '/playground_assets/foto-sushi-ocow8-uiajk-unsplash%20%5B1%5D%201-200h.png',
  Avatar_alt: 'image',
  Origin: 'founder Clean Tech',
}

Quote.propTypes = {
  Quote: PropTypes.string,
  Name: PropTypes.string,
  Avatar_src: PropTypes.string,
  Avatar_alt: PropTypes.string,
  Origin: PropTypes.string,
}

export default Quote
