import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Testimonials = (props) => {
  return (
    <>
      <section className="testimonials-testimonials">
        <div className="testimonials-container">
          <div className="testimonials-content">
            <div className="active-quote quote">
              <img
                alt={props.image_alt}
                src={props.image_src}
                role="quote-avatar"
                className="testimonials-image"
              />
              <p role="quote-content" className="testimonials-quote1">
                {props.Quote}
              </p>
              <div className="testimonials-author">
                <span role="quote-author" className="testimonials-name">
                  {props.Name}
                </span>
                <span role="quote-origin" className="testimonials-origin">
                  {props.Origin}
                </span>
              </div>
            </div>
            <div className="quote">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                role="quote-avatar"
                className="testimonials-image1"
              />
              <p role="quote-content" className="testimonials-quote3">
                <span className="testimonials-text">
                  &quot;This is a very fascinating website&quot;
                </span>
                <br></br>
                <span>
                  eiusmod tempor incididunt ut laborqua. Ut enim ad minim
                  veniam, quis nostrud exercitation.
                </span>
                <br></br>
              </p>
              <div className="testimonials-author1">
                <span role="quote-author" className="testimonials-name1">
                  {props.Name1}
                </span>
                <span role="quote-origin" className="testimonials-origin1">
                  {props.Origin1}
                </span>
              </div>
            </div>
            <div className="quote">
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                role="quote-avatar"
                className="testimonials-image2"
              />
              <p role="quote-content" className="testimonials-quote5">
                <span className="testimonials-text04">
                  &quot;I really love how well this is done! :D&quot;
                </span>
                <br></br>
                <span>eiusmod tempor incididunt ut labore et</span>
                <br></br>
                <span> dolore magna aliqua. Ut enim </span>
                <br></br>
              </p>
              <div className="testimonials-author2">
                <span role="quote-author" className="testimonials-name2">
                  {props.Name2}
                </span>
                <span role="quote-origin" className="testimonials-origin2">
                  {props.Origin2}
                </span>
              </div>
            </div>
            <div className="quote">
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                role="quote-avatar"
                className="testimonials-image3"
              />
              <p role="quote-content" className="testimonials-quote7">
                <span className="testimonials-text10">
                  &quot;Nothing will every beat this!&quot;
                </span>
                <br></br>
                <span>
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation Nsdadasd
                  asdadasd
                </span>
                <br></br>
              </p>
              <div className="testimonials-author3">
                <span role="quote-author" className="testimonials-name3">
                  {props.Name3}
                </span>
                <span role="quote-origin" className="testimonials-origin3">
                  {props.Origin3}
                </span>
              </div>
            </div>
            <div className="testimonials-controls">
              <div id="quote-previous" className="testimonials-previous">
                <img
                  alt={props.image_alt4}
                  src={props.image_src4}
                  className="testimonials-image4"
                />
              </div>
              <div id="quote-next" className="testimonials-next">
                <img
                  alt={props.image_alt5}
                  src={props.image_src5}
                  className="testimonials-image5"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
  /*
              Quote Slider - Code Embed
              */

              let current = 1;

              const nextButton = document.querySelector("#quote-next");
              const previousButton = document.querySelector("#quote-previous");
              const quotes = document.querySelectorAll(".quote");

              if(nextButton&&previousButton){
                nextButton.addEventListener("click", () => {
                quotes.forEach((quote) => {
                quote.classList.remove("active-quote");
                });

                current == quotes.length ? current = 1 : current++
                quotes[current-1].classList.add("active-quote")
                });

                previousButton.addEventListener("click", () => {
                quotes.forEach((quote) => {
                quote.classList.remove("active-quote");
                });

                current == 1 ? current = quotes.length : current--
                quotes[current-1].classList.add("active-quote")
                });

              }
</script>
`}
          ></DangerousHTML>
        </div>
      </section>
      <style jsx>
        {`
          .testimonials-testimonials {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .testimonials-container {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 110px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #0d7b9a;
          }
          .testimonials-content {
            gap: 56px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonials-image {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonials-quote1 {
            color: rgb(255, 255, 255);
            width: 738px;
            font-size: 20px;
            max-width: 600px;
            text-align: center;
            font-family: Lato;
            line-height: 30px;
          }
          .testimonials-author {
            gap: 4px;
            flex: 1;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonials-name {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: var(--dl-size-size-xxlarge);
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #ffffff;
            border-top-width: 1px;
          }
          .testimonials-origin {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 18px;
            max-width: 120px;
            text-align: center;
            font-family: Lato;
            line-height: 27px;
          }
          .testimonials-image1 {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonials-quote3 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 600px;
            text-align: center;
            font-family: Lato;
            line-height: 30px;
          }
          .testimonials-author1 {
            gap: 4px;
            flex: 1;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonials-name1 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 120px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #ffffff;
            border-top-width: 1px;
          }
          .testimonials-origin1 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 18px;
            max-width: 120px;
            text-align: center;
            font-family: Lato;
            line-height: 27px;
          }
          .testimonials-image2 {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonials-quote5 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 600px;
            text-align: center;
            font-family: Lato;
            line-height: 30px;
          }
          .testimonials-author2 {
            gap: 4px;
            flex: 1;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonials-name2 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 120px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #ffffff;
            border-top-width: 1px;
          }
          .testimonials-origin2 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 18px;
            max-width: 120px;
            text-align: center;
            font-family: Lato;
            line-height: 27px;
          }
          .testimonials-image3 {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonials-quote7 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 600px;
            text-align: center;
            font-family: Lato;
            line-height: 30px;
          }
          .testimonials-author3 {
            gap: 4px;
            flex: 1;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonials-name3 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 120px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #ffffff;
            border-top-width: 1px;
          }
          .testimonials-origin3 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 18px;
            max-width: 120px;
            text-align: center;
            font-family: Lato;
            line-height: 27px;
          }
          .testimonials-controls {
            gap: var(--dl-space-space-oneandhalfunits);
            right: 0px;
            bottom: 0px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-end;
          }
          .testimonials-previous {
            width: 64px;
            cursor: pointer;
            height: 64px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: flex-end;
            background-color: rgba(230, 249, 224, 0.5);
          }
          .testimonials-previous:hover {
            background-color: #e6f9e0;
          }
          .testimonials-image4 {
            width: 100px;
            transform: rotate(180deg);
            object-fit: cover;
          }
          .testimonials-next {
            width: 64px;
            cursor: pointer;
            height: 64px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: flex-end;
            background-color: #e6f9e0;
          }
          .testimonials-next:hover {
            background-color: rgba(230, 249, 224, 0.5);
          }
          .testimonials-image5 {
            width: 100px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .testimonials-testimonials {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .testimonials-container {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .testimonials-controls {
              position: static;
            }
          }
          @media (max-width: 479px) {
            .testimonials-container {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .testimonials-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .testimonials-image {
              width: 60px;
              height: 60px;
            }
            .testimonials-quote1 {
              font-size: 16px;
              line-height: 24px;
            }
            .testimonials-author {
              gap: var(--dl-space-space-halfunit);
            }
            .testimonials-name {
              width: 120px;
              font-size: 16px;
            }
            .testimonials-origin {
              font-size: 14px;
              line-height: 21px;
            }
            .testimonials-image1 {
              width: 60px;
              height: 60px;
            }
            .testimonials-quote3 {
              font-size: 16px;
              line-height: 24px;
            }
            .testimonials-text {
              font-size: 16px;
              line-height: 24px;
            }
            .testimonials-author1 {
              gap: var(--dl-space-space-halfunit);
            }
            .testimonials-name1 {
              width: 120px;
              font-size: 16px;
            }
            .testimonials-origin1 {
              font-size: 14px;
              line-height: 21px;
            }
            .testimonials-image2 {
              width: 60px;
              height: 60px;
            }
            .testimonials-quote5 {
              font-size: 16px;
              line-height: 24px;
            }
            .testimonials-text04 {
              font-size: 16px;
              line-height: 24px;
            }
            .testimonials-author2 {
              gap: var(--dl-space-space-halfunit);
            }
            .testimonials-name2 {
              width: 120px;
              font-size: 16px;
            }
            .testimonials-origin2 {
              font-size: 14px;
              line-height: 21px;
            }
            .testimonials-image3 {
              width: 60px;
              height: 60px;
            }
            .testimonials-quote7 {
              font-size: 16px;
              line-height: 24px;
            }
            .testimonials-text10 {
              font-size: 16px;
              line-height: 24px;
            }
            .testimonials-author3 {
              gap: var(--dl-space-space-halfunit);
            }
            .testimonials-name3 {
              width: 120px;
              font-size: 16px;
            }
            .testimonials-origin3 {
              font-size: 14px;
              line-height: 21px;
            }
            .testimonials-previous {
              width: 40px;
              height: 40px;
              padding: 0px;
              justify-content: center;
            }
            .testimonials-image4 {
              width: 11px;
            }
            .testimonials-next {
              width: 40px;
              height: 40px;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
              justify-content: center;
            }
            .testimonials-image5 {
              width: 11px;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonials.defaultProps = {
  image_src: '/playground_assets/1674229443650-200h.jpg',
  image_src4: '/playground_assets/frame.svg',
  image_src2:
    'https://images.unsplash.com/photo-1586716402203-79219bede43c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&ixlib=rb-4.0.3&w=200',
  image_alt1: 'image',
  image_src3:
    'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&ixlib=rb-4.0.3&w=200',
  Origin2: 'TechCo\n',
  image_alt3: 'image',
  image_alt5: 'image',
  image_alt: 'image',
  Origin: 'Senior Delivery Manager',
  Quote:
    '"It was a pleasure collaborating with Sul on various UI and UX projects at Verse. In addition to his proficient skills in UI and UX design, Sul possesses a positive and amiable disposition, making him a pleasure to work with both clients and the Verse team. I look forward to future opportunities to work with Sul and witness the innovative designs he will bring to the table."',
  image_src5: '/playground_assets/frame.svg',
  image_src1:
    '/playground_assets/foto-sushi-ocow8-uiajk-unsplash%20%5B1%5D%201-200h.png',
  Name3: 'John A.',
  image_alt4: 'image',
  Origin3: 'Rebo',
  Origin1: 'Clean Tech',
  Name2: 'Herola',
  Name1: 'Michael B.',
  Name: 'James Bailey',
  image_alt2: 'image',
}

Testimonials.propTypes = {
  image_src: PropTypes.string,
  image_src4: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src3: PropTypes.string,
  Origin2: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt5: PropTypes.string,
  image_alt: PropTypes.string,
  Origin: PropTypes.string,
  Quote: PropTypes.string,
  image_src5: PropTypes.string,
  image_src1: PropTypes.string,
  Name3: PropTypes.string,
  image_alt4: PropTypes.string,
  Origin3: PropTypes.string,
  Origin1: PropTypes.string,
  Name2: PropTypes.string,
  Name1: PropTypes.string,
  Name: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default Testimonials
