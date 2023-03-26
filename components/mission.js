import React from 'react'

import PropTypes from 'prop-types'

const Mission = (props) => {
  return (
    <>
      <section className={`mission-mission ${props.rootClassName} `}>
        <div className="mission-content">
          <h2 className="mission-text">{props.heading}</h2>
          <h3 className="mission-text1">{props.heading1}</h3>
          <div className="mission-description"></div>
        </div>
      </section>
      <style jsx>
        {`
          .mission-mission {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 120px;
            align-items: flex-end;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .mission-content {
            gap: var(--dl-space-space-unit);
            width: 1127px;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .mission-text {
            color: rgb(18, 40, 33);
            width: fit-content;
            font-size: 40px;
            max-width: 1000px;
            min-width: 100%;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .mission-text1 {
            color: rgb(18, 40, 33);
            width: fit-content;
            font-size: 30px;
            max-width: 1000px;
            min-width: 100%;
            font-style: normal;
            font-family: sans-serif;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .mission-description {
            gap: 20px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .mission-mission {
              margin-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .mission-text {
              font-size: 30px;
            }
            .mission-text1 {
              font-size: 20px;
            }
          }
          @media (max-width: 479px) {
            .mission-content {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .mission-text {
              font-size: x-large;
              line-height: initial;
            }
            .mission-text1 {
              font-size: 18px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Mission.defaultProps = {
  heading1:
    'Our designs are sleek, intuitive and responsive to your needs. Whether you want to showcase your brand, sell your products or connect with your audience, we have the perfect solution for you.',
  heading:
    'We create stunning websites and apps that delight your users and boost your business.',
  rootClassName: '',
}

Mission.propTypes = {
  heading1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Mission
