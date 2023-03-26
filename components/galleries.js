import React from 'react'

import PropTypes from 'prop-types'

const Galleries = (props) => {
  return (
    <>
      <section className="galleries-galleries">
        <div className="galleries-gallery-desktop">
          <div className="galleries-column">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="galleries-image"
            />
          </div>
          <div className="galleries-column1">
            <div className="galleries-row">
              <div className="galleries-yellow"></div>
              <img
                alt={props.image_alt4}
                src={props.image_src4}
                className="galleries-image1"
              />
            </div>
            <div className="galleries-row1">
              <img
                alt={props.image_alt5}
                src={props.image_src5}
                className="galleries-image2"
              />
              <img
                alt={props.image_alt6}
                src={props.image_src6}
                className="galleries-image3"
              />
            </div>
          </div>
        </div>
        <div className="galleries-gallery-mobile">
          <div className="galleries-column2">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="galleries-image4"
            />
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="galleries-image5"
            />
          </div>
          <div className="galleries-column3">
            <div className="galleries-yellow1"></div>
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="galleries-image6"
            />
            <div className="galleries-row2">
              <img
                alt={props.image_alt7}
                src={props.image_src7}
                className="galleries-image7"
              />
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .galleries-galleries {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .galleries-gallery-desktop {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .galleries-column {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .galleries-image {
            height: 700px;
            object-fit: cover;
          }
          .galleries-column1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .galleries-row {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .galleries-yellow {
            flex: 1;
            height: 330px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #fae48e;
          }
          .galleries-image1 {
            height: 330px;
            object-fit: cover;
          }
          .galleries-row1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .galleries-image2 {
            width: 435px;
            object-fit: cover;
          }
          .galleries-image3 {
            height: 400px;
            object-fit: cover;
          }
          .galleries-gallery-mobile {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: none;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .galleries-column2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .galleries-image4 {
            height: 700px;
            object-fit: cover;
          }
          .galleries-image5 {
            width: 435px;
            object-fit: cover;
          }
          .galleries-column3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .galleries-yellow1 {
            flex: 1;
            height: 330px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #fae48e;
          }
          .galleries-image6 {
            height: 330px;
            object-fit: cover;
          }
          .galleries-row2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .galleries-image7 {
            height: 400px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .galleries-gallery-desktop {
              display: none;
            }
            .galleries-gallery-mobile {
              gap: var(--dl-space-space-halfunit);
              display: flex;
            }
            .galleries-column2 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-end;
            }
            .galleries-image4 {
              width: 280px;
              height: 400px;
            }
            .galleries-image5 {
              width: 240px;
            }
            .galleries-column3 {
              align-items: flex-start;
            }
            .galleries-yellow1 {
              flex: 0 0 auto;
              width: 220px;
              height: 300px;
            }
            .galleries-image6 {
              width: 260px;
              height: 170px;
            }
            .galleries-image7 {
              width: 220px;
              height: 290px;
            }
          }
          @media (max-width: 479px) {
            .galleries-image4 {
              width: 140px;
              height: 200px;
            }
            .galleries-image5 {
              width: 120px;
            }
            .galleries-yellow1 {
              width: 110px;
              height: 150px;
            }
            .galleries-image6 {
              width: 130px;
              height: 85px;
            }
            .galleries-image7 {
              width: 110px;
              height: 145px;
            }
          }
        `}
      </style>
    </>
  )
}

Galleries.defaultProps = {
  image_alt6: 'image',
  image_alt7: 'image',
  image_src7: '/playground_assets/group%202106.svg',
  image_alt2: 'image',
  image_alt5: 'image',
  image_alt: 'image',
  image_src:
    '/playground_assets/pexels-darina-belonogova-7959670%201-1300w.png',
  image_src3:
    '/playground_assets/pexels-darina-belonogova-8373875%203-1300w.png',
  image_src2:
    '/playground_assets/pexels-darina-belonogova-7964869%201-500w.png',
  image_alt4: 'image',
  image_src5:
    '/playground_assets/pexels-darina-belonogova-7964869%201-500w.png',
  image_alt1: 'image',
  image_src6: '/playground_assets/group%202106.svg',
  image_src1:
    '/playground_assets/pexels-darina-belonogova-7959670%201-1300w.png',
  image_src4:
    '/playground_assets/pexels-darina-belonogova-8373875%203-1300w.png',
  image_alt3: 'image',
}

Galleries.propTypes = {
  image_alt6: PropTypes.string,
  image_alt7: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt5: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_src3: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src6: PropTypes.string,
  image_src1: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt3: PropTypes.string,
}

export default Galleries
