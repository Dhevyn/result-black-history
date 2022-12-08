/* eslint-disable */

import React from "react";
import { createScope, map, transformProxies } from "./helpers";

const scripts = [
  {
    loading: fetch(
      "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6311249bb727571ee13bb71c"
    ).then((body) => body.text()),
    isAsync: false,
  },
  {
    loading: fetch("js/webflow.js").then((body) => body.text()),
    isAsync: false,
  },
  {
    loading: fetch(
      "https://tools.refokus.com/cms-filter/bundle.v1.0.0.js"
    ).then((body) => body.text()),
    isAsync: false,
  },
  {
    loading: fetch(
      "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
    ).then((body) => body.text()),
    isAsync: false,
  },
  {
    loading: Promise.resolve(
      '$(document).ready(function(){$(".c-slider").slick({dots:!1,speed:700,infinite:!0,variableWidth:!0,slidesToShow:1,swipeToSlide:!0,arrows:!0,prevArrow:$(".slider-prev"),nextArrow:$(".slider-next"),responsive:[{breakpoint:767,settings:{centerMode:!0,slidesToShow:3,arrows:!0}},{breakpoint:479,settings:{centerMode:!0,slidesToShow:3,arrows:!0}}]})});'
    ),
    isAsync: false,
  },
  {
    loading: Promise.resolve(
      'document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".open-modal").forEach(e=>{e.addEventListener("click",function(){document.querySelectorAll(".c-body").forEach(e=>e.classList.add("no-scroll"))})}),document.querySelectorAll(".close-modal").forEach(e=>{e.addEventListener("click",function(){document.querySelectorAll(".c-body").forEach(e=>e.classList.remove("no-scroll"))})})});'
    ),
    isAsync: false,
  },
  {
    loading: Promise.resolve(
      '$("#search-form").submit(function(r){return!1});'
    ),
    isAsync: false,
  },
  {
    loading: Promise.resolve(
      'const tweetData={url:window.location.href,title:"How do you add CMS Filters in @Webflow? @RefokusAgency made a tool for that! https://webflow-tools.refokus.io/tools/cms-filters #madeinwebflow"};$("[share-tw]").attr("href","https://twitter.com/share?"+$.param(tweetData)),$("[share-in]").attr("href","https://www.linkedin.com/shareArticle?mini=true&"+$.param(tweetData)),$("[copy-clipboard]").click(function(t){t.preventDefault(),copyToClipboard($(this)[0],tweetData.url)});'
    ),
    isAsync: false,
  },
];

let Controller;

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller;

    try {
      Controller = require("../controllers/IndexController");
      Controller = Controller.default || Controller;

      return Controller;
    } catch (e) {
      if (e.code == "MODULE_NOT_FOUND") {
        Controller = IndexView;

        return Controller;
      }

      throw e;
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector("html");
    htmlEl.dataset["wfPage"] = "6311249bb7275703003bb71f";
    htmlEl.dataset["wfSite"] = "6311249bb727571ee13bb71c";

    scripts.concat(null).reduce((active, next) =>
      Promise.resolve(active).then((active) => {
        const loading = active.loading.then((script) => {
          new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script);

          return next;
        });

        return active.isAsync ? next : loading;
      })
    );
  }

  render() {
    const proxies =
      IndexView.Controller !== IndexView
        ? transformProxies(this.props.children)
        : {};

    return (
      <span>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/black-history-result.webflow.css);
          @import url(/cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css);

          @media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"24323c66-6332-db33-e64e-38bfb41a733d\"] {-webkit-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"e954b58b-53e8-6f3e-e27f-51140d01fa4f\"] {-webkit-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"19645028-cb71-db15-a142-84360d96f859\"] {-webkit-transform:translate3d(0, -100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, -100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, -100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, -100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"24323c66-6332-db33-e64e-38bfb41a733d\"] {-webkit-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"e954b58b-53e8-6f3e-e27f-51140d01fa4f\"] {-webkit-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"19645028-cb71-db15-a142-84360d96f859\"] {-webkit-transform:translate3d(0, -100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, -100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, -100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, -100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}


          body { -webkit-font-smoothing: antialiased; }



            .slick-prev.slick-disabled {
              opacity: 0.5;
            }
            .slick-next.slick-disabled {
              opacity: 0.5;
            }
            .slick-list {
              overflow: visible;
            }
            .c-slick-slide {display: inline-block;}
            .c-slider {display:block !important;}
            .slick-prev:hover,
            .slick-prev:focus,
            .slick-next:hover,
            .slick-next:focus
            {
              outline: none;
            }
            .c-slick-slide, .c-slick-slide *{ outline: none !important; }
            .slick-track {
              cursor: grab;
            }
            @media only screen and (max-width: 1160px) and (min-width: 768px) {
              .c-collection-item-movies {
                width: 33.33%;
              }
              @media only screen and (min-width: 768px) {
                .slick-slide {
                  outline: none;
                  transition: opacity 800ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
                  transform: scale(.9);
                }
                .slick-slide.slick-active{
                  transform: scale(1);
                  z-index: -100;
                  cursor: -webkit-grab;
                }
              }
              @media only screen and (max-width: 767px) {
                .slick-list {
                  overflow: hidden;
                }
              }
            }
            /* Range filter */
            .ui-widget-content {
              height: 2px !important;
              background-color: #1A2028 !important;
              border-radius: 2px !important;
              border: none !important;
            }
            .ui-widget-header {
              background-color: #255DEB !important;
            }
            .ui-slider-handle {
              border-radius: 8px !important;
              background-color: #255DEB !important;
              width: 24px !important;
              height: 24px !important;
              outline: none !important;
              border: none !important;
              top: -10px !important;
              cursor: pointer !important;
              position: relative;
            }
            .ui-slider-handle::after {
            	content: \'\';
              display: block;
              width: 8px;
              height: 8px;
              background-color: white;
              border-radius: 2px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .ui-slider-handle.ui-state-hover {
              background-color: #1E49B7 !important;
              border: none !important;
            }
        `,
          }}
        />
        <span className="af-view">
          <div className="af-class-c-body">
            <div className="af-class-c-custom-code w-embed">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n  .af-view { -webkit-font-smoothing: antialiased; }\n  .af-view [vertical-align-middle]{\n    vertical-align: middle\n  }\n  .af-view [vertical-align-top]{\n    vertical-align: top\n  }\n  /* Avoid texts inside the dropdown toggle to go outside the dropdown box. \n  For this we need to have the class of the Drodpown Toggle + the p or h inside */\n  .af-view .af-class-faq-dropdown p {\n    white-space: normal !important;\n  } .af-view */\n  .af-class-c-image-reveal_movement {\n    max-width: fit-content;\n  }\n.af-view #star {\n    -webkit-filter: drop-shadow( 0px 0px 2px #EFBA30);\n    filter: drop-shadow( 0px 0px 2px #EFBA30);\n  }\n.af-view select {\n  -webkit-appearance: none; \n  -moz-appearance: none; \n  background: transparent;\n  background-image: url(https://uploads-ssl.webflow.com/60dee237ed94659eefff0d9b/60df1078240d4d8c279ecd6f_Select-icon.svg);\n  background-repeat: no-repeat;\n  background-position-x: 95%;\n  background-position-y: 50%;\n",
                }}
              />
            </div>
            <nav
              data-w-id="19645028-cb71-db15-a142-84360d96f859"
              style={{
                WebkitTransform:
                  "translate3d(0, -171px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, -171px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, -171px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, -171px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="af-class-c-nav-search"
            >
              <div className="af-class-c-container af-class-cc-nav">
                <div className="af-class-c-search">
                  <a
                    href="https://webflow-tools.refokus.com/"
                    target="_blank"
                    className="af-class-c-search-logos w-inline-block"
                  >
                    <div className="af-class-c-logo">
                      <img
                        src="images/unnamed-1.png"
                        loading="lazy"
                        width={157}
                        srcSet="images/unnamed-1-p-500.png 500w, images/unnamed-1-p-800.png 800w, images/unnamed-1-p-1080.png 1080w, images/unnamed-1-p-1600.png 1600w, images/unnamed-1.png 1850w"
                        sizes="157px"
                        alt
                        className="af-class-c-logo-refokus"
                      />
                    </div>
                  </a>
                  <div className="af-class-c-search-search">
                    <div
                      id="search-form"
                      className="af-class-c-form-block-search w-form"
                    >
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        action="/"
                        method="get"
                        className="af-class-c-search-form"
                      >
                        <input
                          type="text"
                          className="af-class-c-search-textfield w-input"
                          maxLength={256}
                          name="name"
                          data-name="Name"
                          r-filter="input"
                          placeholder="Search History"
                          id="name"
                        />
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <div className="af-class-c-nav-links">
                      <div className="af-class-c-docs af-class-cc-hidden_mobile">
                        <div className="af-class-c-button-gradient">
                          <div className="af-class-c-gradient-right" />
                          <a
                            href="https://webflow-tools.refokus.com/tools/cms-filters"
                            target="_blank"
                            className="af-class-c-button-m af-class-cc-border w-inline-block"
                          >
                            <img
                              src="images/Button-Icon.svg"
                              alt
                              className="af-class-c-button-icon-left"
                            />
                            <img
                              src="images/Button-Icon-Hover.svg"
                              alt
                              className="af-class-c-button-icon-left-hover"
                            />
                            <div className="af-class-c-button-icon-content">
                              <div>Connect Wallet</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <section className="af-class-c-section af-class-cc-hero af-class-wf-section">
              <div className="af-class-c-form-block-genre w-form">
                <form
                  method="get"
                  name="email-form-3"
                  data-name="Email Form 3"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    opacity: 0,
                  }}
                  data-w-id="24323c66-6332-db33-e64e-38bfb41a733d"
                  action="/"
                  id="email-form-3"
                  className="af-class-c-slider-contain"
                >
                  <div className="af-class-c-slider-nav">
                    <a
                      href="#"
                      className="af-class-slider-prev w-inline-block"
                    />
                    <a
                      href="#"
                      className="af-class-slider-next w-inline-block"
                    />
                  </div>
                  <div r-filter="Genre" className="af-class-c-slider">
                    <div className="af-class-c-slick-slide">
                      <label className="w-checkbox af-class-c-checkbox-field-genre">
                        <div
                          className="w-checkbox-input w-checkbox-input--inputType-custom af-class-checkbox"
                          data-w-id="11296686-c05d-bd52-ac03-6d9892233981"
                        />
                        <input
                          type="checkbox"
                          id="Checkbox-Action"
                          name="Checkbox-Action"
                          data-name="Checkbox Action"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <div className="af-class-c-custom-code w-embed">
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n  .af-view { -webkit-font-smoothing: antialiased; }\n  .af-view [vertical-align-middle]{\n    vertical-align: middle\n  }\n  .af-view [vertical-align-top]{\n    vertical-align: top\n  }\n  /* Avoid texts inside the dropdown toggle to go outside the dropdown box. \n  For this we need to have the class of the Drodpown Toggle + the p or h inside */\n  .af-view .af-class-faq-dropdown p {\n    white-space: normal !important;\n  } .af-view */\n  .af-class-c-image-reveal_movement {\n    max-width: fit-content;\n  }\n.af-view #star {\n    -webkit-filter: drop-shadow( 0px 0px 2px #EFBA30);\n    filter: drop-shadow( 0px 0px 2px #EFBA30);\n  }\n.af-view select {\n  -webkit-appearance: none; \n  -moz-appearance: none; \n  background: transparent;\n  background-image: url(https://uploads-ssl.webflow.com/60dee237ed94659eefff0d9b/60df1078240d4d8c279ecd6f_Select-icon.svg);\n  background-repeat: no-repeat;\n  background-position-x: 95%;\n  background-position-y: 50%;\n",
                            }}
                          />
                        </div>
                        <span
                          htmlFor="Checkbox-Action"
                          className="af-class-c-checkbox-label-genre w-form-label"
                        >
                          Action
                        </span>
                      </label>
                    </div>
                    <div className="af-class-c-slick-slide">
                      <label className="w-checkbox af-class-c-checkbox-field-genre">
                        <div
                          className="w-checkbox-input w-checkbox-input--inputType-custom af-class-checkbox"
                          data-w-id="820aa281-9823-0b75-a260-beec7157aa91"
                        />
                        <input
                          type="checkbox"
                          id="Checkbox Animation"
                          name="Checkbox-Animation"
                          data-name="Checkbox Animation"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="Checkbox-Animation"
                          className="af-class-c-checkbox-label-genre w-form-label"
                        >
                          Animation
                        </span>
                      </label>
                    </div>
                    <div className="af-class-c-slick-slide">
                      <label className="w-checkbox af-class-c-checkbox-field-genre">
                        <div
                          className="w-checkbox-input w-checkbox-input--inputType-custom af-class-checkbox"
                          data-w-id="6584c746-4fe0-7100-fdc3-060a9451f9d1"
                        />
                        <input
                          type="checkbox"
                          id="Checkbox Comedy"
                          name="Checkbox-Comedy"
                          data-name="Checkbox Comedy"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="Checkbox-Comedy"
                          className="af-class-c-checkbox-label-genre w-form-label"
                        >
                          Comedy
                        </span>
                      </label>
                    </div>
                    <div className="af-class-c-slick-slide">
                      <label className="w-checkbox af-class-c-checkbox-field-genre">
                        <div
                          className="w-checkbox-input w-checkbox-input--inputType-custom af-class-checkbox"
                          data-w-id="958c81f4-71ea-0eac-f810-5ae5831486f7"
                        />
                        <input
                          type="checkbox"
                          id="Checkbox Drama"
                          name="Checkbox-Drama"
                          data-name="Checkbox Drama"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="Checkbox-Drama"
                          className="af-class-c-checkbox-label-genre w-form-label"
                        >
                          Drama
                        </span>
                      </label>
                    </div>
                    <div className="af-class-c-slick-slide">
                      <label className="w-checkbox af-class-c-checkbox-field-genre">
                        <div
                          className="w-checkbox-input w-checkbox-input--inputType-custom af-class-checkbox"
                          data-w-id="744d2965-1eee-b6de-f8ae-886c2da88d5f"
                        />
                        <input
                          type="checkbox"
                          id="Checkbox-Fantasy"
                          name="Checkbox-Fantasy"
                          data-name="Checkbox Fantasy"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="Checkbox-Fantasy"
                          className="af-class-c-checkbox-label-genre w-form-label"
                        >
                          Fantasy
                        </span>
                      </label>
                    </div>
                    <div className="af-class-c-slick-slide">
                      <label className="w-checkbox af-class-c-checkbox-field-genre">
                        <div
                          className="w-checkbox-input w-checkbox-input--inputType-custom af-class-checkbox"
                          data-w-id="fe8e9e94-1ce2-e33e-2608-72dc4e57983a"
                        />
                        <input
                          type="checkbox"
                          id="Checkbox Horror"
                          name="Checkbox-Horror"
                          data-name="Checkbox Horror"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="Checkbox-Horror"
                          className="af-class-c-checkbox-label-genre w-form-label"
                        >
                          Horror
                        </span>
                      </label>
                    </div>
                    <div className="af-class-c-slick-slide">
                      <label className="w-checkbox af-class-c-checkbox-field-genre">
                        <div
                          className="w-checkbox-input w-checkbox-input--inputType-custom af-class-checkbox"
                          data-w-id="20b80dcd-d8c6-7e8a-bef3-8bb80075cc89"
                        />
                        <input
                          type="checkbox"
                          id="Checkbox Romance"
                          name="Checkbox-Romance"
                          data-name="Checkbox Romance"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="Checkbox-Romance"
                          className="af-class-c-checkbox-label-genre w-form-label"
                        >
                          Romance
                        </span>
                      </label>
                    </div>
                    <div className="af-class-c-slick-slide">
                      <label className="w-checkbox af-class-c-checkbox-field-genre">
                        <div
                          className="w-checkbox-input w-checkbox-input--inputType-custom af-class-checkbox"
                          data-w-id="4ffeada4-8d90-3877-b958-176eed662681"
                        />
                        <input
                          type="checkbox"
                          id="Checkbox Scifi"
                          name="Checkbox-Scifi"
                          data-name="Checkbox Scifi"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="Checkbox-Scifi"
                          className="af-class-c-checkbox-label-genre w-form-label"
                        >
                          Scifi
                        </span>
                      </label>
                    </div>
                    <div className="af-class-c-slick-slide">
                      <label className="w-checkbox af-class-c-checkbox-field-genre">
                        <div
                          className="w-checkbox-input w-checkbox-input--inputType-custom af-class-checkbox"
                          data-w-id="cc9b75e4-32f4-1c58-4b9f-fae92b504275"
                        />
                        <input
                          type="checkbox"
                          id="Checkbox Thriller"
                          name="Checkbox-Thriller"
                          data-name="Checkbox Thriller"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="Checkbox-Thriller"
                          className="af-class-c-checkbox-label-genre w-form-label"
                        >
                          Thriller
                        </span>
                      </label>
                    </div>
                  </div>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
              <div className="af-class-c-container">
                <div
                  data-w-id="e954b58b-53e8-6f3e-e27f-51140d01fa4f"
                  className="af-class-c-grid"
                >
                  <div className="af-class-c-grid-item af-class-cc-30 af-class-cc-fixed">
                    <div className="af-class-c-menu-nav_mobile">
                      <div className="af-class-c-search">
                        <div className="af-class-c-search-logos">
                          <a
                            href="https://refokus.io/"
                            target="_blank"
                            className="af-class-c-logo w-inline-block"
                          >
                            <img
                              src="images/Logo-Refokus.svg"
                              loading="lazy"
                              alt="Refokus Logo."
                              className="af-class-c-logo-refokus"
                            />
                          </a>
                          <div className="af-class-c-text">
                            <div className="af-class-c-text-x">x</div>
                          </div>
                          <div className="af-class-c-logo">
                            <img
                              src="images/Webflow.svg"
                              loading="lazy"
                              alt="Webflow Logo."
                              className="af-class-c-logo-webflow"
                            />
                          </div>
                        </div>
                        <div className="af-class-c-search-search af-class-cc-mobile">
                          <div
                            id="search-form"
                            className="af-class-c-form-block-search w-form"
                          >
                            <form
                              id="email-form"
                              name="email-form"
                              data-name="Email Form"
                              action="/"
                              method="get"
                              className="af-class-c-search-form"
                            >
                              <input
                                type="text"
                                className="af-class-c-search-textfield w-input"
                                maxLength={256}
                                name="name-2"
                                data-name="Name 2"
                                r-filter="input"
                                placeholder="Search movies"
                                id="name-2"
                              />
                              <input
                                type="submit"
                                defaultValue="Submit"
                                data-wait="Please wait..."
                                className="af-class-c-submit af-class-cc-hidden w-button"
                              />
                            </form>
                            <div className="w-form-done">
                              <div>
                                Thank you! Your submission has been received!
                              </div>
                            </div>
                            <div className="w-form-fail">
                              <div>
                                Oops! Something went wrong while submitting the
                                form.
                              </div>
                            </div>
                          </div>
                          <div className="af-class-c-nav-links">
                            <div
                              data-w-id="ac7e0bda-43ee-ae53-550a-68d16c6e021b"
                              className="af-class-c-clone af-class-close-modal"
                            >
                              <div className="af-class-c-button-gradient">
                                <a
                                  data-w-id="ac7e0bda-43ee-ae53-550a-68d16c6e021d"
                                  href="#"
                                  className="af-class-c-button-settings w-inline-block"
                                >
                                  <div className="af-class-text-block">
                                    Apply
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="af-class-c-clone af-class-cc-hidden_mobile">
                              <div className="af-class-c-button-gradient">
                                <a
                                  href="#"
                                  className="af-class-c-button-m af-class-cc-border w-inline-block"
                                >
                                  <img
                                    src="images/Button-Icon-Clone.svg"
                                    alt
                                    className="af-class-c-button-icon-left"
                                  />
                                  <img
                                    src="images/Button-Icon-Clone-Hover.svg"
                                    alt
                                    className="af-class-c-button-icon-left-hover"
                                  />
                                  <div className="af-class-c-button-icon-content">
                                    <div>Clone</div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="af-class-c-docs af-class-cc-hidden_mobile">
                              <div className="af-class-c-button-gradient">
                                <a
                                  href="#"
                                  className="af-class-c-button-m af-class-cc-border w-inline-block"
                                >
                                  <img
                                    src="images/Button-Icon.svg"
                                    alt
                                    className="af-class-c-button-icon-left"
                                  />
                                  <img
                                    src="images/Button-Icon-Hover.svg"
                                    alt
                                    className="af-class-c-button-icon-left-hover"
                                  />
                                  <div className="af-class-c-button-icon-content">
                                    <div>Docs</div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-c-collection-itemcount af-class-cc-mobile">
                          <p className="af-class-c-paragraph af-class-cc-count">
                            Showing
                            <br />
                          </p>
                          <p
                            r-filter-visible-elements={1}
                            className="af-class-c-paragraph af-class-cc-count"
                          />
                          <p className="af-class-c-paragraph af-class-cc-count">
                            of
                          </p>
                          <p
                            r-filter-total-elements={1}
                            className="af-class-c-paragraph af-class-cc-count"
                          />
                          <p className="af-class-c-paragraph af-class-cc-count">
                            results
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="af-class-c-form-block-filters w-form">
                      <form
                        id="email-form-2"
                        name="email-form-2"
                        data-name="Email Form 2"
                        action="/"
                        method="get"
                        className="af-class-c-form-filters"
                      >
                        <div className="af-class-c-filter af-class-cc-premiere">
                          <div className="af-class-c-title-wrapper">
                            <div className="af-class-c-premiere-icon">
                              <img
                                src="images/Ticket-Star.svg"
                                loading="lazy"
                                alt
                                className="af-class-c-filter-icon"
                              />
                            </div>
                            <div className="af-class-c-premiere-title">
                              <h3 className="af-class-c-title-3">Free</h3>
                            </div>
                          </div>
                          <div
                            r-filter="Checkbox"
                            className="af-class-c-toggle-wrapper"
                          >
                            <label className="w-checkbox af-class-c-checkbox-field-toggle">
                              <div
                                className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-toggle"
                                data-w-id="df8198be-dad7-9d8b-72ac-c85b70e412b4"
                              />
                              <input
                                type="checkbox"
                                name="Checkbox-Premiere"
                                data-name="Checkbox Premiere"
                                id="Checkbox Premiere"
                                data-filter="Premiere"
                                style={{
                                  opacity: 0,
                                  position: "absolute",
                                  zIndex: -1,
                                }}
                              />
                              <div
                                data-is-ix2-target={1}
                                className="af-class-lottie-animation"
                                data-w-id="df8198be-dad7-9d8b-72ac-c85b70e412b5"
                                data-animation-type="lottie"
                                data-src="documents/lf20_53al6qcs.json"
                                data-loop={0}
                                data-direction={1}
                                data-autoplay={0}
                                data-renderer="svg"
                                data-default-duration="1.0166666666666666"
                                data-duration={0}
                                data-ix2-initial-state={50}
                              />
                              <span
                                htmlFor="Checkbox-Premiere"
                                className="af-class-c-checkbox-label-toggle af-class-cc-hidden w-form-label"
                              >
                                Checkbox 9
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="af-class-c-filter af-class-cc-select">
                          <select
                            id="Select"
                            name="Select"
                            data-name="Select"
                            r-filter="select"
                            className="af-class-c-select-field w-select"
                          >
                            <option value>Select one...</option>
                            <option value="top rated">Top Rated</option>
                            <option value="recommended">Recommeneded</option>
                            <option value="most watched">Most Watched</option>
                          </select>
                        </div>
                        <div className="af-class-c-filter">
                          <div className="af-class-c-title-wrapper">
                            <div className="af-class-c-premiere-icon">
                              <img
                                src="images/Chat.svg"
                                loading="lazy"
                                alt
                                className="af-class-c-filter-icon"
                              />
                            </div>
                            <div className="af-class-c-premiere-title">
                              <h3 className="af-class-c-title-3">Languages</h3>
                            </div>
                          </div>
                          <div
                            r-filter="Languages"
                            className="af-class-c-languages"
                          >
                            <div className="af-class-c-gradient-lang">
                              <div className="af-class-c-gradient-right" />
                              <label className="w-checkbox af-class-c-checkbox-field-lang">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-lang" />
                                <input
                                  type="checkbox"
                                  id="Checkbox Eng"
                                  name="Checkbox-Eng"
                                  data-name="Checkbox Eng"
                                  style={{
                                    opacity: 0,
                                    position: "absolute",
                                    zIndex: -1,
                                  }}
                                />
                                <span
                                  htmlFor="Checkbox-Eng"
                                  className="af-class-c-checkbox-label-lang w-form-label"
                                >
                                  English
                                </span>
                                <div className="af-class-c-checkbox-bg" />
                              </label>
                            </div>
                            <div className="af-class-c-gradient-lang">
                              <div className="af-class-c-gradient-right" />
                              <label className="w-checkbox af-class-c-checkbox-field-lang">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-lang" />
                                <input
                                  type="checkbox"
                                  id="Checkbox ESP"
                                  name="Checkbox-ESP"
                                  data-name="Checkbox ESP"
                                  style={{
                                    opacity: 0,
                                    position: "absolute",
                                    zIndex: -1,
                                  }}
                                />
                                <span
                                  htmlFor="Checkbox-ESP"
                                  className="af-class-c-checkbox-label-lang w-form-label"
                                >
                                  Spanish
                                </span>
                                <div className="af-class-c-checkbox-bg" />
                              </label>
                            </div>
                            <div className="af-class-c-gradient-lang">
                              <div className="af-class-c-gradient-right" />
                              <label className="w-checkbox af-class-c-checkbox-field-lang">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-lang" />
                                <input
                                  type="checkbox"
                                  id="Checkbox Fr"
                                  name="Checkbox-Fr"
                                  data-name="Checkbox Fr"
                                  style={{
                                    opacity: 0,
                                    position: "absolute",
                                    zIndex: -1,
                                  }}
                                />
                                <span
                                  htmlFor="Checkbox-Fr"
                                  className="af-class-c-checkbox-label-lang w-form-label"
                                >
                                  French
                                </span>
                                <div className="af-class-c-checkbox-bg" />
                              </label>
                            </div>
                            <div className="af-class-c-gradient-lang">
                              <div className="af-class-c-gradient-right" />
                              <label className="w-checkbox af-class-c-checkbox-field-lang">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-lang" />
                                <input
                                  type="checkbox"
                                  id="checkbox-5"
                                  name="checkbox-5"
                                  data-name="Checkbox 5"
                                  style={{
                                    opacity: 0,
                                    position: "absolute",
                                    zIndex: -1,
                                  }}
                                />
                                <span
                                  className="af-class-c-checkbox-label-lang w-form-label"
                                  htmlFor="checkbox-5"
                                >
                                  German
                                </span>
                                <div className="af-class-c-checkbox-bg" />
                              </label>
                            </div>
                            <div className="af-class-c-gradient-lang">
                              <div className="af-class-c-gradient-right" />
                              <label className="w-checkbox af-class-c-checkbox-field-lang">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-lang" />
                                <input
                                  type="checkbox"
                                  id="checkbox-4"
                                  name="checkbox-4"
                                  data-name="Checkbox 4"
                                  style={{
                                    opacity: 0,
                                    position: "absolute",
                                    zIndex: -1,
                                  }}
                                />
                                <span
                                  className="af-class-c-checkbox-label-lang w-form-label"
                                  htmlFor="checkbox-4"
                                >
                                  Italian
                                </span>
                                <div className="af-class-c-checkbox-bg" />
                              </label>
                            </div>
                            <div className="af-class-c-gradient-lang">
                              <div className="af-class-c-gradient-right" />
                              <label className="w-checkbox af-class-c-checkbox-field-lang">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-lang" />
                                <input
                                  type="checkbox"
                                  id="checkbox-3"
                                  name="checkbox-3"
                                  data-name="Checkbox 3"
                                  style={{
                                    opacity: 0,
                                    position: "absolute",
                                    zIndex: -1,
                                  }}
                                />
                                <span
                                  className="af-class-c-checkbox-label-lang w-form-label"
                                  htmlFor="checkbox-3"
                                >
                                  Japanese
                                </span>
                                <div className="af-class-c-checkbox-bg" />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-c-filter">
                          <div className="af-class-c-title-wrapper">
                            <div className="af-class-c-premiere-icon">
                              <img
                                src="images/Category.svg"
                                loading="lazy"
                                alt
                                className="af-class-c-filter-icon"
                              />
                            </div>
                            <div className="af-class-c-premiere-title">
                              <h3 className="af-class-c-title-3">Media Type</h3>
                            </div>
                          </div>
                          <div
                            r-filter="Platform"
                            className="af-class-c-platform"
                          >
                            <div className="af-class-c-checkbox-wrapper">
                              <div className="af-class-c-text-label">
                                Articles
                              </div>
                              <label className="w-checkbox af-class-c-checkbox-field-toggle af-class-platform">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-toggle" />
                                <input
                                  type="checkbox"
                                  id="Checkbox Netflix"
                                  name="Checkbox-Netflix"
                                  data-name="Checkbox Netflix"
                                  data-filter="Netflix"
                                  style={{
                                    opacity: 0,
                                    position: "absolute",
                                    zIndex: -1,
                                  }}
                                />
                                <div
                                  data-is-ix2-target={1}
                                  className="af-class-lottie-animation"
                                  data-w-id="f64a9968-a8a2-453c-6f01-5f0238f8688f"
                                  data-animation-type="lottie"
                                  data-src="documents/lf20_53al6qcs.json"
                                  data-loop={0}
                                  data-direction={1}
                                  data-autoplay={0}
                                  data-renderer="svg"
                                  data-default-duration="1.0166666666666666"
                                  data-duration={0}
                                  data-ix2-initial-state={50}
                                />
                                <span
                                  htmlFor="Checkbox-Netflix"
                                  className="af-class-c-checkbox-label-toggle w-form-label"
                                >
                                  Netflix
                                </span>
                              </label>
                            </div>
                            <div className="af-class-c-checkbox-wrapper">
                              <div className="af-class-c-text-label">Audio</div>
                              <label className="w-checkbox af-class-c-checkbox-field-toggle af-class-platform">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-toggle" />
                                <input
                                  type="checkbox"
                                  id="Checkbox Prime"
                                  name="Checkbox-Prime"
                                  data-name="Checkbox Prime"
                                  data-filter="Prime Video"
                                  style={{
                                    opacity: 0,
                                    position: "absolute",
                                    zIndex: -1,
                                  }}
                                />
                                <div
                                  data-is-ix2-target={1}
                                  className="af-class-lottie-animation"
                                  data-w-id="e1fd1f9f-be89-d749-355f-9525986732a6"
                                  data-animation-type="lottie"
                                  data-src="documents/lf20_53al6qcs.json"
                                  data-loop={0}
                                  data-direction={1}
                                  data-autoplay={0}
                                  data-renderer="svg"
                                  data-default-duration="1.0166666666666666"
                                  data-duration={0}
                                  data-ix2-initial-state={50}
                                />
                                <span
                                  htmlFor="Checkbox-Prime"
                                  className="af-class-c-checkbox-label-toggle w-form-label"
                                >
                                  Prime Video
                                </span>
                              </label>
                            </div>
                            <div className="af-class-c-checkbox-wrapper">
                              <div className="af-class-c-text-label">Image</div>
                              <label className="w-checkbox af-class-c-checkbox-field-toggle af-class-platform">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-toggle" />
                                <input
                                  type="checkbox"
                                  id="Checkbox Disney"
                                  name="Checkbox-Disney"
                                  data-name="Checkbox Disney"
                                  data-filter="Disney +"
                                  style={{
                                    opacity: 0,
                                    position: "absolute",
                                    zIndex: -1,
                                  }}
                                />
                                <div
                                  data-is-ix2-target={1}
                                  className="af-class-lottie-animation"
                                  data-w-id="ba52c68f-20e9-740d-bb29-b9815c066c8c"
                                  data-animation-type="lottie"
                                  data-src="documents/lf20_53al6qcs.json"
                                  data-loop={0}
                                  data-direction={1}
                                  data-autoplay={0}
                                  data-renderer="svg"
                                  data-default-duration="1.0166666666666666"
                                  data-duration={0}
                                  data-ix2-initial-state={50}
                                />
                                <span
                                  htmlFor="Checkbox-Disney"
                                  className="af-class-c-checkbox-label-toggle w-form-label"
                                >
                                  Disney +
                                </span>
                              </label>
                            </div>
                            <div className="af-class-c-checkbox-wrapper">
                              <div className="af-class-c-text-label">Video</div>
                              <label className="w-checkbox af-class-c-checkbox-field-toggle af-class-platform">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-toggle" />
                                <input
                                  type="checkbox"
                                  id="Checkbox Max"
                                  name="Checkbox-Max"
                                  data-name="Checkbox Max"
                                  data-filter="HBO Max"
                                  style={{
                                    opacity: 0,
                                    position: "absolute",
                                    zIndex: -1,
                                  }}
                                />
                                <div
                                  data-is-ix2-target={1}
                                  className="af-class-lottie-animation"
                                  data-w-id="22bcf8ed-b910-ac2c-27a8-70c39450cc84"
                                  data-animation-type="lottie"
                                  data-src="documents/lf20_53al6qcs.json"
                                  data-loop={0}
                                  data-direction={1}
                                  data-autoplay={0}
                                  data-renderer="svg"
                                  data-default-duration="1.0166666666666666"
                                  data-duration={0}
                                  data-ix2-initial-state={50}
                                />
                                <span
                                  htmlFor="Checkbox-Max"
                                  className="af-class-c-checkbox-label-toggle w-form-label"
                                >
                                  HBO Max
                                </span>
                              </label>
                            </div>
                            <div className="af-class-c-checkbox-wrapper">
                              <div className="af-class-c-text-label">
                                Newspaper
                              </div>
                              <label className="w-checkbox af-class-c-checkbox-field-toggle af-class-platform">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-c-checkbox-toggle" />
                                <input
                                  type="checkbox"
                                  id="Checkbox Paramount"
                                  name="Checkbox-Paramount"
                                  data-name="Checkbox Paramount"
                                  data-filter="Paramount +"
                                  style={{
                                    opacity: 0,
                                    position: "absolute",
                                    zIndex: -1,
                                  }}
                                />
                                <div
                                  data-is-ix2-target={1}
                                  className="af-class-lottie-animation"
                                  data-w-id="9ae27037-7fae-2b2c-0ea2-cfa25be78f69"
                                  data-animation-type="lottie"
                                  data-src="documents/lf20_53al6qcs.json"
                                  data-loop={0}
                                  data-direction={1}
                                  data-autoplay={0}
                                  data-renderer="svg"
                                  data-default-duration="1.0166666666666666"
                                  data-duration={0}
                                  data-ix2-initial-state={50}
                                />
                                <span
                                  htmlFor="Checkbox-Paramount"
                                  className="af-class-c-checkbox-label-toggle w-form-label"
                                >
                                  Paramount +
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-c-filter">
                          <div className="af-class-c-title-wrapper">
                            <div className="af-class-c-premiere-icon">
                              <img
                                src="images/Calendar.svg"
                                loading="lazy"
                                alt
                                className="af-class-c-filter-icon"
                              />
                            </div>
                            <div className="af-class-c-premiere-title">
                              <h3 className="af-class-c-title-3">
                                Release Year
                              </h3>
                            </div>
                          </div>
                          <div className="af-class-c-year-slider">
                            <div
                              double={1}
                              r-filter="range"
                              min-value={2005}
                              max-value={2021}
                              className="af-class-c-range-wrapper"
                            />
                            <div className="af-class-c-years-wrapper">
                              <div className="af-class-c-year">
                                <div className="af-class-c-year-output">
                                  <div
                                    r-filter-range-min={1}
                                    className="af-class-c-year-output-text"
                                  >
                                    1700
                                  </div>
                                </div>
                              </div>
                              <div className="af-class-c-year af-class-cc-max-price">
                                <div className="af-class-c-year-output">
                                  <div
                                    r-filter-range-max={1}
                                    className="af-class-c-year-output-text"
                                  >
                                    2021
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-id="cd7d8c14-ac0d-4b9b-b32a-d18e9080a87e"
                    style={{
                      opacity: 0,
                      WebkitTransform:
                        "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="af-class-c-grid-item af-class-cc-60"
                  >
                    <div className="af-class-c-collection-itemcount">
                      <p className="af-class-c-paragraph af-class-cc-count">
                        Showing
                        <br />
                      </p>
                      <p
                        r-filter-visible-elements={1}
                        className="af-class-c-paragraph af-class-cc-count"
                      />
                      <p className="af-class-c-paragraph af-class-cc-count">
                        of
                      </p>
                      <p
                        r-filter-total-elements={1}
                        className="af-class-c-paragraph af-class-cc-count"
                      />
                      <p className="af-class-c-paragraph af-class-cc-count">
                        results
                      </p>
                    </div>
                    <div className="af-class-c-collection-wrapper-movies w-dyn-list">
                      <div
                        r-filter-pagination={8}
                        r-filter-wrapper={1}
                        role="list"
                        className="af-class-c-collection-list-movies w-dyn-items"
                      >
                        <div
                          id="w-node-_8a9a099a-37ab-2b2d-1a5f-5b0fc73529c2-003bb71f"
                          role="listitem"
                          className="af-class-c-collection-item-movies w-dyn-item"
                        >
                          <div
                            data-w-id="9cce4105-adec-3141-4211-557c37a462ff"
                            className="af-class-c-gradient-card"
                          >
                            <div
                              style={{ width: "100%", height: "100%" }}
                              className="af-class-c-gradient-top"
                            />
                            <div
                              style={{ opacity: 0, width: "0%", height: "0%" }}
                              className="af-class-c-gradient-bottom"
                            />
                            <div className="af-class-c-card">
                              <div className="af-class-c-card-platforms">
                                <div className="af-class-c-nested-list-wrapper w-dyn-list">
                                  <div
                                    role="list"
                                    className="af-class-c-nested-list w-dyn-items"
                                  >
                                    <div
                                      role="listitem"
                                      className="af-class-c-nested-item w-dyn-item"
                                    >
                                      <p
                                        r-indexed="Platform"
                                        className="af-class-c-title-4 af-class-cc-gray500 af-class-cc-card-padding af-class-cc-hidden"
                                      />
                                      <div className="af-class-c-card-platform-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="af-class-c-card-image">
                                <img
                                  src
                                  loading="lazy"
                                  alt
                                  className="af-class-c-card-image_img"
                                />
                                <div className="af-class-overlay" />
                              </div>
                              <div className="af-class-c-card-bottom">
                                <div className="af-class-c-title-wrapper af-class-cc-card-flex">
                                  <h3
                                    r-indexed="input"
                                    className="af-class-c-title-3"
                                  />
                                  <div className="af-class-c-card-details af-class-cc-hidden">
                                    <p
                                      r-indexed="select"
                                      className="af-class-c-title-4 af-class-cc-gray500 af-class-cc-card-padding"
                                    />
                                    <p
                                      r-indexed="Checkbox"
                                      className="af-class-c-title-4 af-class-cc-gray500 af-class-cc-card-padding"
                                    />
                                    <p
                                      r-indexed="Platform"
                                      className="af-class-c-title-4 af-class-cc-gray500 af-class-cc-card-padding"
                                    >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Suspendisse varius enim
                                      in eros elementum tristique. Duis cursus,
                                      mi quis viverra ornare, eros dolor
                                      interdum nulla, ut commodo diam libero
                                      vitae erat. Aenean faucibus nibh et justo
                                      cursus id rutrum lorem imperdiet. Nunc ut
                                      sem vitae risus tristique posuere.
                                    </p>
                                    <p
                                      r-indexed="Star"
                                      className="af-class-c-title-4 af-class-cc-gray500 af-class-cc-card-padding"
                                    />
                                  </div>
                                  <div className="af-class-c-card-details">
                                    <p
                                      r-indexed="range"
                                      className="af-class-c-title-4 af-class-cc-gray500"
                                    />
                                    <p className="af-class-c-title-4 af-class-cc-gray500 af-class-cc-card-padding">
                                      .
                                    </p>
                                    <p
                                      r-indexed="Languages"
                                      className="af-class-c-title-4 af-class-cc-gray500 af-class-cc-card-padding"
                                    />
                                    <p className="af-class-c-title-4 af-class-cc-gray500 af-class-cc-card-padding">
                                      .
                                    </p>
                                    <p
                                      r-indexed="Genre"
                                      className="af-class-c-title-4 af-class-cc-gray500 af-class-cc-card-padding"
                                    />
                                  </div>
                                </div>
                                <div className="af-class-c-card-rating">
                                  <div className="af-class-c-card-rating-star">
                                    <img
                                      src="images/Star-bright.svg"
                                      loading="lazy"
                                      id="star"
                                      alt
                                      className="af-class-c-star-shadow"
                                    />
                                    <img
                                      src="images/Star-dark.svg"
                                      loading="lazy"
                                      alt
                                      className="af-class-c-star-shadow af-class-cc-notrated"
                                    />
                                  </div>
                                  <div className="af-class-c-card-rating-star">
                                    <img
                                      src="images/Star-bright.svg"
                                      loading="lazy"
                                      id="star"
                                      alt
                                      className="af-class-c-star-shadow"
                                    />
                                    <img
                                      src="images/Star-dark.svg"
                                      loading="lazy"
                                      alt
                                      className="af-class-c-star-shadow af-class-cc-notrated"
                                    />
                                  </div>
                                  <div className="af-class-c-card-rating-star">
                                    <img
                                      src="images/Star-bright.svg"
                                      loading="lazy"
                                      id="star"
                                      alt
                                      className="af-class-c-star-shadow"
                                    />
                                    <img
                                      src="images/Star-dark.svg"
                                      loading="lazy"
                                      alt
                                      className="af-class-c-star-shadow af-class-cc-notrated"
                                    />
                                  </div>
                                  <div className="af-class-c-card-rating-star">
                                    <img
                                      src="images/Star-bright.svg"
                                      loading="lazy"
                                      id="star"
                                      alt
                                      className="af-class-c-star-shadow"
                                    />
                                    <img
                                      src="images/Star-dark.svg"
                                      loading="lazy"
                                      alt
                                      className="af-class-c-star-shadow af-class-cc-notrated"
                                    />
                                  </div>
                                  <div className="af-class-c-card-rating-star">
                                    <img
                                      src="images/Star-bright.svg"
                                      loading="lazy"
                                      id="star"
                                      alt
                                      className="af-class-c-star-shadow"
                                    />
                                    <img
                                      src="images/Star-dark.svg"
                                      loading="lazy"
                                      alt
                                      className="af-class-c-star-shadow af-class-cc-notrated"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-dyn-empty">
                        <div>No items found.</div>
                      </div>
                    </div>
                    <div
                      r-filter-empty={1}
                      data-w-id="80db50af-0de9-1d98-45fe-5f2fe7dc5208"
                      style={{ opacity: 0 }}
                      className="af-class-c-filter_empty"
                    >
                      <div className="af-class-c-empty-content">
                        <div className="af-class-c-emoji">
                          <img
                            src="images/emoji-sleepy.svg"
                            loading="lazy"
                            alt="Sleepy Emoji."
                            className="af-class-c-emoji-image"
                          />
                        </div>
                        <div className="af-class-c-title-wrapper af-class-cc-margin">
                          <p className="af-class-c-title-1 af-class-cc-center">
                            Nothing for you,
                            <br />
                            time to go to bed.
                          </p>
                        </div>
                        <div className="af-class-c-paragraph-wrapper">
                          <p className="af-class-c-title-3 af-class-cc-gray500 af-class-cc-center">
                            Please try selecting different filters
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="af-class-c-pagination-wrapper">
                      <div r-pagination={1} className="af-class-c-pagination">
                        <div
                          r-pagination-arrow-prev={1}
                          className="af-class-c-pagination_arrow-prev"
                        />
                        <div
                          r-pagination-arrow-next={1}
                          className="af-class-c-pagination_arrow-next"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="af-class-c-copy">
              <div className="af-class-text-block-2">Link kopiert!</div>
            </div>
            {/* [if lte IE 9]><![endif] */}
            {/*  Prevent Body Scroll  */}
            {/*  Prevent Form from submitting Data  */}
            {/*  Share Function  */}
          </div>
        </span>
      </span>
    );
  }
}

export default IndexView;

/* eslint-enable */
