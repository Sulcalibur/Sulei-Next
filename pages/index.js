import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Mission from '../components/mission'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Sulei - Digital Product Design || UX UI Specialist</title>
          <meta
            name="description"
            content="Exceptional user experience and visually stunning product design with Sulei. Specialising in UX/UI design and development."
          />
          <meta
            property="og:title"
            content="Sulei - Digital Product Design || UX UI Specialist"
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
        <div className="home-navbar">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-branding">
              <img
                alt="image"
                src="/playground_assets/sulei_brand_colour.svg"
                className="home-image"
              />
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 128h768v768h-768z"></path>
              </svg>
              <span className="home-text">Product Design and Development</span>
            </div>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav className="home-links">
                <button className="home-button button">
                  <span>Our offers</span>
                </button>
                <button className="home-button1 button">Menu</button>
              </nav>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-top">
                <div className="home-branding1">
                  <span className="home-text02">Remarkable</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M128 128h768v768h-768z"></path>
                  </svg>
                  <span className="home-text03">Remarkable</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <button className="home-button2 button">
                  <span>Our offers</span>
                </button>
                <button className="home-button3 button">
                  <span>Get a fast quote</span>
                </button>
                <button className="home-button4 button">Menu</button>
              </nav>
              <div className="home-social-bar">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon06"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon08"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon10"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon12"
                >
                  <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
                </svg>
              </div>
            </div>
            <a
              href="https://projects.sulei.uk"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link button"
            >
              Client Portal
            </a>
          </header>
        </div>
        <img
          alt="image"
          src="/playground_assets/sulei_brand_logo_colour.svg"
          className="home-image1"
        />
        <Mission></Mission>
        <section className="home-newsletter">
          <div className="home-header">
            <h2 className="home-text06">Subscribe to the newsletter</h2>
            <p className="home-text07">
              Sign up for our newsletter to get the latest news!
            </p>
          </div>
          <div className="home-content">
            <div className="home-email">
              <input
                type="text"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-submit">
                <img
                  alt="image"
                  src="/playground_assets/frame.svg"
                  className="home-image2"
                />
              </div>
            </div>
            <div className="home-notice">
              <span className="home-notice1">
                By subscribing occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </span>
            </div>
          </div>
        </section>
        <div>
          <DangerousHTML
            html={`<style>
    .partner-container:hover .partner-image{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(75deg) brightness(101%) contrast(102%);
    }
</style>`}
          ></DangerousHTML>
        </div>
        <div className="home-container1">
          <div className="home-container2">
            <div className="home-container3">
              <span className="home-text08">
                Hi! 👋 Feel free to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <a
            href="https://forms.sulei.uk/sulei"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            get in touch
          </a>
        </div>
        <footer className="home-footer">
          <div className="home-container4">
            <img
              alt="logo"
              src="/playground_assets/sulei_brand_greyscale-200h.png"
              className="home-image3"
            />
          </div>
          <div className="home-separator"></div>
          <div className="home-container5">
            <span className="home-text09">
              © 2023 Sulei Ltd, All Rights Reserved.
            </span>
            <div className="home-icon-group">
              <a
                href="https://twitter.com/sulei_uk"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon16"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sulei.uk/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon18"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/sulei.uk"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon20"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-interactive {
            width: 1341px;
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
          .home-branding {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 147px;
            height: 73px;
            object-fit: cover;
          }
          .home-icon {
            width: 7px;
            height: 7px;
          }
          .home-text {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-links {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-button {
            color: rgb(18, 40, 33);
            display: none;
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
          .home-button1 {
            color: rgb(18, 40, 33);
            display: none;
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
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            z-index: 100;
            position: fixed;
            transform: translateY(-100%);
            transition: 0.5s;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            background-color: #fff;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-branding1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text02 {
            color: rgba(18, 40, 33, 1);
            font-size: 24px;
            line-height: 36px;
          }
          .home-icon02 {
            width: 7px;
            height: 7px;
          }
          .home-text03 {
            color: rgba(18, 40, 33, 1);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon04 {
            width: 34px;
            height: 34px;
          }
          .home-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-button2 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            background-color: rgb(18, 40, 33);
          }
          .home-button3 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            background-color: rgb(18, 40, 33);
          }
          .home-button4 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            background-color: rgb(18, 40, 33);
          }
          .home-social-bar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-top: auto;
            justify-content: flex-start;
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-link {
            color: #ffffff;
            text-decoration: none;
            background-color: #49a6e6;
          }
          .home-image1 {
            width: 193px;
            height: 181px;
            display: none;
            margin-top: var(--dl-space-space-fourunits);
            object-fit: cover;
          }
          .home-newsletter {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 120px;
            border-color: var(--dl-color-gray-black);
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 120px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text06 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text07 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 20px;
            text-align: center;
            line-height: 30px;
          }
          .home-content {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-email {
            width: 400px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-top: 2px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 60px;
            padding-right: 2px;
            flex-direction: row;
            padding-bottom: 2px;
            justify-content: center;
            background-color: #f3f3f3;
          }
          .home-textinput {
            flex: 1;
            color: #122821;
            outline: inherit;
            font-family: Lato;
            font-weight: 600;
            background-color: transparent;
          }
          .home-submit {
            width: 56px;
            cursor: pointer;
            height: 56px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #122821;
          }
          .home-submit:hover {
            background-color: #408770;
          }
          .home-image2 {
            width: 18px;
            filter: brightness(0) saturate(100%) invert(88%) sepia(8%)
              saturate(484%) hue-rotate(62deg) brightness(111%) contrast(95%);
            transform: rotate(-45deg);
            object-fit: cover;
          }
          .home-notice {
            width: 100%;
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            padding-left: 27px;
            flex-direction: column;
            justify-content: center;
          }
          .home-notice1 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 12px;
            max-width: 305px;
            font-family: Lato;
            line-height: 15px;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text08 {
            color: rgb(70, 70, 70);
            font-size: 34px;
            font-style: normal;
            font-weight: 600;
          }
          .home-link1 {
            color: rgb(183, 104, 246);
            cursor: pointer;
            font-size: 34px;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
            padding-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-link1:hover {
            color: #8523d4;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container4 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-image3 {
            width: 160px;
            height: 83px;
            margin-top: var(--dl-space-space-fourunits);
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text09 {
            font-family: sans-serif;
          }
          .home-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link2 {
            display: contents;
          }
          .home-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link3 {
            display: contents;
          }
          .home-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link4 {
            display: contents;
          }
          .home-icon20 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .home-navbar-interactive {
              width: 1127px;
            }
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              width: 991px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-icon {
              display: none;
            }
            .home-text {
              display: none;
            }
            .home-icon02 {
              display: none;
            }
            .home-text03 {
              display: none;
            }
            .home-newsletter {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text06 {
              font-size: 32px;
            }
            .home-text07 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-notice1 {
              font-size: 10px;
              line-height: 13px;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              width: 767px;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-button2 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .home-button3 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .home-button4 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .home-social-bar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image3 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container5 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text09 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              width: 479px;
            }
            .home-social-bar {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-image1 {
              margin-top: 0px;
            }
            .home-email {
              width: 100%;
            }
            .home-container1 {
              margin: auto;
              text-align: center;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container5 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text09 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
