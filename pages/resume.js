import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Hero from '../components/hero'
import Card from '../components/card'
import Testimonials from '../components/testimonials'
import Banner from '../components/banner'
import Mission from '../components/mission'
import Footer from '../components/footer'

const Resume = (props) => {
  return (
    <>
      <div className="resume-container">
        <Head>
          <title>
            Resume - Sulei - Digital Product Design || UX UI Specialist
          </title>
          <meta
            name="description"
            content="Exceptional user experience and visually stunning product design with Sulei. Specialising in UX/UI design and development."
          />
          <meta
            property="og:title"
            content="Resume - Sulei - Digital Product Design || UX UI Specialist"
          />
          <meta
            property="og:description"
            content="Experience exceptional user experience and visually stunning product design with Sulei. Specialising in UX/UI design and development, our team will elevate your brand to new heights."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3e639118-8c90-4acd-bcc7-aa54923ad863/1c4271d8-f16d-4223-b54f-9878ac743d80?org_if_sml=1"
          />
        </Head>
        <div className="resume-navbar">
          <header data-thq="thq-navbar" className="resume-navbar-interactive">
            <div className="resume-branding">
              <span className="resume-text">Suleiman Leadbitter</span>
              <svg viewBox="0 0 1024 1024" className="resume-icon">
                <path d="M128 128h768v768h-768z"></path>
              </svg>
              <span className="resume-text01">UX UI Product Designer</span>
            </div>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="resume-desktop-menu"
            >
              <nav className="resume-links">
                <button className="resume-button button">
                  <span>Our offers</span>
                </button>
                <button className="resume-button01 button">
                  <span>Get a fast quote</span>
                </button>
                <button className="resume-button02 button">Menu</button>
              </nav>
            </div>
            <div data-thq="thq-burger-menu" className="resume-burger-menu">
              <img
                alt="image"
                src="/playground_assets/group%202084%5B1%5D.svg"
                className="resume-hamburger"
              />
            </div>
            <div data-thq="thq-mobile-menu" className="resume-mobile-menu">
              <div className="resume-top">
                <div className="resume-branding1">
                  <span className="resume-text04">Remarkable</span>
                  <svg viewBox="0 0 1024 1024" className="resume-icon02">
                    <path d="M128 128h768v768h-768z"></path>
                  </svg>
                  <span className="resume-text05">Remarkable</span>
                </div>
                <div data-thq="thq-close-menu" className="resume-menu-close">
                  <svg viewBox="0 0 1024 1024" className="resume-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="resume-links1">
                <button className="resume-button03 button">
                  <span>Our offers</span>
                </button>
                <button className="resume-button04 button">
                  <span>Get a fast quote</span>
                </button>
                <button className="resume-button05 button">Menu</button>
              </nav>
              <div className="resume-social-bar">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="resume-icon06"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="resume-icon08"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="resume-icon10"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="resume-icon12"
                >
                  <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="resume-icon14">
                  <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <Hero rootClassName="hero-root-class-name"></Hero>
        <section className="resume-mission">
          <h2 className="resume-text08">
            Experienced working alongside and leading teams, mentoring and
            following Sprints and working in an Agile/Scrum development
            environment.
          </h2>
          <button className="resume-button06 button">
            <span className="resume-text09">Learn about our mission</span>
          </button>
        </section>
        <section className="resume-partners">
          <div className="resume-content">
            <h2 className="resume-text10">Working with amazing teams</h2>
            <p className="resume-text11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="resume-partners-desktop">
            <div className="resume-column">
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/blenheimchalcot-200h.png"
                  className="resume-image partner-image"
                  width={98}
                  height={78}
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/britishcouncil-200h.png"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/scotgov-200h.png"
                  className="resume-image02 partner-image"
                  width={116}
                  height={116}
                />
              </div>
            </div>
            <div className="resume-column1">
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/marvel-200h.png"
                  className="resume-image03 partner-image"
                  width={116}
                  height={47}
                />
              </div>
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/nhs-200h.png"
                  className="resume-image04 partner-image"
                  width={110}
                  height={44}
                />
              </div>
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/pixar-200h.png"
                  className="resume-image05 partner-image"
                  width={134}
                  height={17}
                />
              </div>
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/made-200h.png"
                  className="resume-image06 partner-image"
                  width={136}
                  height={136}
                />
              </div>
            </div>
            <div className="resume-column2">
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/jncc-200h.png"
                  className="resume-image07 partner-image"
                  width={134}
                  height={134}
                />
              </div>
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/hive%20learning-200h.png"
                  className="resume-image08 partner-image"
                  width={150}
                  height={150}
                />
              </div>
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/greene%20king%20-%20jpeg-200h.png"
                  className="resume-image09 partner-image"
                  width={146}
                  height={146}
                />
              </div>
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/disney-200h.png"
                  className="resume-image10 partner-image"
                  width={145}
                  height={61}
                />
              </div>
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/idealworldtv-200h.png"
                  className="resume-image11 partner-image"
                  width={94}
                  height={85}
                />
              </div>
            </div>
            <div className="resume-column3">
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/countrywide-200h.png"
                  className="resume-image12 partner-image"
                  width={134}
                  height={134}
                />
              </div>
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/createandcraft-200w.png"
                  className="resume-image13 partner-image"
                  width={83}
                  height={85}
                />
              </div>
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/boagworld-200h.png"
                  className="resume-image14 partner-image"
                  width={110}
                  height={110}
                />
              </div>
              <div className="partner-container">
                <Image
                  alt="image"
                  src="/playground_assets/1583234875762-200h.jpeg"
                  className="resume-image15 partner-image"
                  width={118}
                  height={118}
                />
              </div>
            </div>
          </div>
          <div className="resume-partners-mobile">
            <div className="resume-row">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/britishcouncil-200h.png"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/disney-200h.png"
                  className="partner-image resume-image17"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/marvel-200h.png"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/made-200h.png"
                  className="partner-image resume-image19"
                />
              </div>
            </div>
            <div className="resume-column4">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/jncc-200h.png"
                  className="partner-image resume-image20"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/nhs-200h.png"
                  className="partner-image resume-image21"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/pixar-200h.png"
                  className="partner-image resume-image22"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/scotgov-200h.png"
                  className="partner-image resume-image23"
                />
              </div>
            </div>
            <div className="resume-column5">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/1583234875762-200h.jpeg"
                  className="partner-image resume-image24"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/blenheimchalcot-200h.png"
                  className="partner-image resume-image25"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/countrywide-200h.png"
                  className="partner-image resume-image26"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/createandcraft-200w.png"
                  className="partner-image resume-image27"
                />
              </div>
            </div>
            <div className="resume-column6">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/boagworld-200h.png"
                  className="partner-image resume-image28"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/greene%20king%20-%20jpeg-200h.png"
                  className="partner-image resume-image29"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/hive%20learning-200h.png"
                  className="partner-image resume-image30"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="resume-improve">
          <div className="resume-heading"></div>
          <div className="resume-tabs">
            <div className="resume-content1">
              <div className="resume-details">
                <div className="resume-header">
                  <h2 className="resume-text12">Website Engagement Design</h2>
                  <div className="resume-description">
                    <p className="resume-text13">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </p>
                    <p className="resume-text14">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <button className="button">
                  <span className="resume-text15">
                    <span>Get a quote</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="resume-image31">
                <img
                  alt="image"
                  src="/playground_assets/pexels-darina-belonogova-7959815%201-1400w.png"
                  className="resume-image32"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="resume-services">
          <h2 className="resume-text18">High-impact business services</h2>
          <div className="resume-cards">
            <div className="resume-row1">
              <Card Title="UX Designer and Researcher"></Card>
              <Card
                Icon="/playground_assets/group%201644.svg"
                Title="Mentor and team player"
              ></Card>
            </div>
            <div className="resume-row2">
              <Card
                Icon="/playground_assets/group%201645.svg"
                Title="Visual UI and motion designer"
              ></Card>
              <Card
                Icon="/playground_assets/group%201646.svg"
                Title="Client facing senior member"
              ></Card>
            </div>
          </div>
        </section>
        <Testimonials></Testimonials>
        <section className="resume-services1">
          <div className="resume-heading1">
            <h2 className="resume-text19">
              Take a look at the latest articles
            </h2>
            <p className="resume-text20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="resume-sections">
            <div className="resume-row3">
              <div className="resume-section">
                <div className="resume-header1">
                  <h3 className="resume-text21">Understand your customers</h3>
                  <div className="resume-description1">
                    <p className="resume-text22">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </p>
                    <p className="resume-text23">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <button className="button">
                  <span>
                    <span>Read more</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="resume-section1">
                <div className="resume-header2">
                  <h3 className="resume-text27">Own your business</h3>
                  <div className="resume-description2">
                    <p className="resume-text28">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </p>
                    <p className="resume-text29">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <button className="button">
                  <span>
                    <span>Read more</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
            <div className="resume-row4">
              <div className="resume-section2">
                <div className="resume-header3">
                  <h3 className="resume-text33">How to build your team</h3>
                  <div className="resume-description3">
                    <p className="resume-text34">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </p>
                    <p className="resume-text35">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <button className="button">
                  <span>
                    <span>Read more</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="resume-section3">
                <div className="resume-header4">
                  <h3 className="resume-text39">We can help your business</h3>
                  <div className="resume-description4">
                    <p className="resume-text40">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </p>
                    <p className="resume-text41">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <button className="button">
                  <span>
                    <span>Read more</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <Banner rootClassName="banner-root-class-name"></Banner>
        <Mission rootClassName="mission-root-class-name"></Mission>
        <Footer></Footer>
        <div>
          <DangerousHTML
            html={`<style>
    .partner-container:hover .partner-image{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(75deg) brightness(101%) contrast(102%);
    }
</style>`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .resume-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .resume-navbar {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .resume-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1324px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .resume-branding {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .resume-text {
            color: rgb(18, 40, 33);
            font-size: 24px;
            line-height: 36px;
          }
          .resume-icon {
            width: 7px;
            height: 7px;
          }
          .resume-text01 {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
          }
          .resume-desktop-menu {
            display: flex;
          }
          .resume-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .resume-button {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .resume-button01 {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .resume-button02 {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(18, 40, 33, 1);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
            border-left-width: 1px;
          }
          .resume-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .resume-hamburger {
            width: 100px;
            object-fit: cover;
          }
          .resume-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            background-color: #fff;
          }
          .resume-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .resume-branding1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .resume-text04 {
            color: rgba(18, 40, 33, 1);
            font-size: 24px;
            line-height: 36px;
          }
          .resume-icon02 {
            width: 7px;
            height: 7px;
          }
          .resume-text05 {
            color: rgba(18, 40, 33, 1);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
          }
          .resume-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .resume-icon04 {
            width: 34px;
            height: 34px;
          }
          .resume-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .resume-button03 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            background-color: rgb(18, 40, 33);
          }
          .resume-button04 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            background-color: rgb(18, 40, 33);
          }
          .resume-button05 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            background-color: rgb(18, 40, 33);
          }
          .resume-social-bar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-top: auto;
            justify-content: flex-start;
          }
          .resume-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .resume-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .resume-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .resume-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .resume-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .resume-mission {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .resume-text08 {
            color: rgb(18, 40, 33);
            font-size: 40px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
            line-height: 51px;
          }
          .resume-button06 {
            color: #afa2ec;
            background-color: #553dcb;
          }
          .resume-text09 {
            color: #d8d3f1;
            line-height: 21px;
          }
          .resume-partners {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            border-color: var(--dl-color-gray-black);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            border-bottom-width: 1px;
          }
          .resume-content {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text10 {
            color: rgb(18, 40, 33);
            font-size: 56px;
            font-style: normal;
            font-weight: 500;
          }
          .resume-text11 {
            color: rgb(18, 40, 33);
            font-size: 20px;
            max-width: 300px;
            font-family: Lato;
            line-height: 30px;
          }
          .resume-partners-desktop {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .resume-column {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-image {
            width: 98px;
            height: 78px;
          }
          .resume-image02 {
            width: 116px;
            height: 116px;
          }
          .resume-column1 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-image03 {
            width: 116px;
            height: 47px;
          }
          .resume-image04 {
            width: 110px;
            height: 44px;
          }
          .resume-image05 {
            width: 134px;
            height: 17px;
          }
          .resume-image06 {
            width: 136px;
            height: 136px;
          }
          .resume-column2 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-image07 {
            width: 134px;
            height: 134px;
          }
          .resume-image08 {
            width: 150px;
            height: 150px;
          }
          .resume-image09 {
            width: 146px;
            height: 146px;
          }
          .resume-image10 {
            width: 145px;
            height: 61px;
          }
          .resume-image11 {
            width: 94px;
            height: 85px;
          }
          .resume-column3 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-image12 {
            width: 134px;
            height: 134px;
          }
          .resume-image13 {
            width: 83px;
            height: 85px;
          }
          .resume-image14 {
            width: 110px;
            height: 110px;
          }
          .resume-image15 {
            width: 118px;
            height: 118px;
          }
          .resume-partners-mobile {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .resume-row {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-column4 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-column5 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-column6 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-improve {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 733px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 120px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .resume-heading {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .resume-tabs {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .resume-content1 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            overflow-x: hidden;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .resume-details {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text12 {
            color: #122821;
            font-size: 36px;
            font-style: normal;
            font-weight: 500;
          }
          .resume-description {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text13 {
            color: rgb(18, 40, 33);
            font-size: 16px;
            line-height: 24px;
          }
          .resume-text14 {
            color: rgb(18, 40, 33);
            font-size: 16px;
            line-height: 24px;
          }
          .resume-text15 {
            line-height: 21px;
          }
          .resume-image31 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .resume-image32 {
            flex: 1;
            height: 640px;
            object-fit: cover;
          }
          .resume-services {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .resume-text18 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 56px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .resume-cards {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .resume-row1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: stretch;
          }
          .resume-row2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .resume-services1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 120px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 130px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .resume-heading1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text19 {
            color: rgb(18, 40, 33);
            font-size: 56px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .resume-text20 {
            color: rgb(18, 40, 33);
            font-size: 20px;
            max-width: 800px;
            font-family: Lato;
          }
          .resume-sections {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
          }
          .resume-row3 {
            gap: 140px;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .resume-section {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-header1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text21 {
            color: rgb(18, 40, 33);
            font-size: 36px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .resume-description1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text22 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .resume-text23 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .resume-section1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-header2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text27 {
            color: rgb(18, 40, 33);
            font-size: 36px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .resume-description2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text28 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .resume-text29 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .resume-row4 {
            gap: 140px;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .resume-section2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text33 {
            color: rgb(18, 40, 33);
            font-size: 36px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .resume-description3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text34 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .resume-text35 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .resume-section3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-header4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text39 {
            color: rgb(18, 40, 33);
            font-size: 36px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .resume-description4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resume-text40 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .resume-text41 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .resume-navbar-interactive {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .resume-icon {
              display: none;
            }
            .resume-text01 {
              display: none;
            }
            .resume-icon02 {
              display: none;
            }
            .resume-text05 {
              display: none;
            }
            .resume-mission {
              gap: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .resume-text08 {
              font-size: 18px;
              text-align: center;
              line-height: 23px;
            }
            .resume-button06 {
              width: 100%;
              text-align: center;
            }
            .resume-text09 {
              font-family: Lato;
            }
            .resume-partners {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: 60px;
            }
            .resume-content {
              align-items: center;
              justify-content: center;
            }
            .resume-text10 {
              text-align: center;
            }
            .resume-text11 {
              text-align: center;
            }
            .resume-partners-desktop {
              display: none;
              flex-wrap: wrap;
              flex-direction: column;
            }
            .resume-column {
              flex-direction: row;
            }
            .resume-column1 {
              flex-direction: row;
            }
            .resume-column2 {
              flex-direction: row;
            }
            .resume-column3 {
              flex-direction: row;
            }
            .resume-partners-mobile {
              gap: 10px;
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
            }
            .resume-row {
              gap: 10px;
              flex-direction: row;
            }
            .resume-image17 {
              width: 118px;
              height: 52px;
            }
            .resume-image19 {
              width: 128px;
              height: 128px;
            }
            .resume-column4 {
              gap: 10px;
              flex-direction: row;
            }
            .resume-image20 {
              width: 126px;
              height: 126px;
            }
            .resume-image21 {
              width: 143px;
              height: 58px;
            }
            .resume-image22 {
              width: 145px;
              height: 19px;
            }
            .resume-image23 {
              width: 121px;
              height: 121px;
            }
            .resume-column5 {
              gap: 10px;
              flex-direction: row;
            }
            .resume-image24 {
              width: 131px;
              height: 131px;
            }
            .resume-image25 {
              width: 117px;
              height: 117px;
            }
            .resume-image26 {
              width: 120px;
              height: 120px;
            }
            .resume-image27 {
              width: 108px;
              height: 110px;
            }
            .resume-column6 {
              gap: 10px;
              flex-direction: row;
            }
            .resume-image28 {
              width: 120px;
              height: 120px;
            }
            .resume-image29 {
              width: 149px;
              height: 149px;
            }
            .resume-image30 {
              width: 141px;
              height: 141px;
            }
            .resume-improve {
              gap: var(--dl-space-space-fiveunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .resume-content1 {
              flex-direction: column;
            }
            .resume-image31 {
              width: 100%;
            }
            .resume-image32 {
              height: auto;
            }
            .resume-services {
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .resume-text18 {
              max-width: 500px;
              text-align: center;
            }
            .resume-cards {
              flex-direction: column;
            }
            .resume-services1 {
              margin-top: var(--dl-space-space-fourunits);
              padding-left: 20px;
              margin-bottom: var(--dl-space-space-fourunits);
              padding-right: 20px;
            }
            .resume-row3 {
              gap: var(--dl-space-space-fourunits);
            }
            .resume-row4 {
              gap: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .resume-desktop-menu {
              display: none;
            }
            .resume-burger-menu {
              width: 40px;
              height: 40px;
              display: flex;
              aspect-ratio: 1;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #e6f9e0;
            }
            .resume-hamburger {
              width: 16px;
              height: 8px;
            }
            .resume-button03 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .resume-button04 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .resume-button05 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .resume-social-bar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .resume-mission {
              align-items: center;
            }
            .resume-content {
              align-items: center;
            }
            .resume-text11 {
              max-width: 100%;
              text-align: center;
            }
            .resume-image17 {
              width: 45px;
              height: 19px;
            }
            .resume-image19 {
              width: 54px;
              height: 54px;
            }
            .resume-image20 {
              width: 52px;
              height: 52px;
            }
            .resume-image21 {
              width: 55px;
              height: 22px;
            }
            .resume-image22 {
              width: 51px;
              height: 6px;
            }
            .resume-image23 {
              width: 56px;
              height: 56px;
            }
            .resume-image24 {
              width: 46px;
              height: 46px;
            }
            .resume-image25 {
              width: 54px;
              height: 54px;
            }
            .resume-image26 {
              width: 49px;
              height: 49px;
            }
            .resume-image27 {
              width: 45px;
              height: 45px;
            }
            .resume-image28 {
              width: 49px;
              height: 49px;
            }
            .resume-image29 {
              width: 47px;
              height: 47px;
            }
            .resume-image30 {
              width: 51px;
              height: 51px;
            }
            .resume-tabs {
              gap: var(--dl-space-space-threeunits);
            }
            .resume-content1 {
              margin-top: 0px;
            }
            .resume-details {
              gap: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .resume-social-bar {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .resume-partners {
              margin-top: var(--dl-space-space-fourunits);
            }
            .resume-row1 {
              flex-direction: column;
            }
            .resume-row2 {
              flex-direction: column;
            }
            .resume-services1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .resume-text19 {
              font-size: 32px;
            }
            .resume-text20 {
              color: rgb(18, 40, 33);
              font-size: 16px;
              font-family: Lato;
              line-height: 24px;
            }
            .resume-sections {
              gap: var(--dl-space-space-threeunits);
            }
            .resume-row3 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .resume-section {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .resume-text21 {
              font-size: 24px;
            }
            .resume-section1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .resume-text27 {
              font-size: 24px;
            }
            .resume-row4 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .resume-section2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .resume-text33 {
              font-size: 24px;
            }
            .resume-section3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .resume-text39 {
              font-size: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Resume
