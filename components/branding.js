import React from 'react'

import PropTypes from 'prop-types'

const Branding = (props) => {
  return (
    <>
      <div className={`branding-branding ${props.rootClassName} `}>
        <span className="branding-text">{props.text}</span>
        <svg viewBox="0 0 1024 1024" className="branding-icon">
          <path d="M128 128h768v768h-768z"></path>
        </svg>
        <span className="branding-text1">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .branding-branding {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .branding-text {
            color: rgba(18, 40, 33, 1);
            font-size: 24px;
            line-height: 36px;
          }
          .branding-icon {
            width: 7px;
            height: 7px;
          }
          .branding-text1 {
            color: rgba(18, 40, 33, 1);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
          }
          .branding-root-class-name {
            display: none;
          }
          @media (max-width: 991px) {
            .branding-icon {
              display: none;
            }
            .branding-text1 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Branding.defaultProps = {
  text: 'Suleiman Leadbitter',
  rootClassName: '',
  text1: 'UX UI Product Designer',
}

Branding.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default Branding
