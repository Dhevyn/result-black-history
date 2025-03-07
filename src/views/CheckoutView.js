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
];

let Controller;

class CheckoutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller;

    try {
      Controller = require("../controllers/CheckoutController");
      Controller = Controller.default || Controller;

      return Controller;
    } catch (e) {
      if (e.code == "MODULE_NOT_FOUND") {
        Controller = CheckoutView;

        return Controller;
      }

      throw e;
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector("html");
    htmlEl.dataset["wfPage"] = "63114049b4f09c28ebb6e433";
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
      CheckoutView.Controller !== CheckoutView
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


          body { -webkit-font-smoothing: antialiased; }
        `,
          }}
        />
        <span className="af-view">
          <div>
            <div
              data-node-type="commerce-checkout-form-container"
              data-wf-checkout-query
              data-wf-page-link-href-prefix
              className="w-commerce-commercecheckoutformcontainer"
            >
              <div className="w-commerce-commercelayoutcontainer w-container">
                <div className="w-commerce-commercelayoutmain">
                  <div data-node-type="commerce-cart-quick-checkout-actions">
                    <a
                      data-node-type="commerce-cart-apple-pay-button"
                      role="button"
                      tabIndex={0}
                      aria-haspopup="dialog"
                      aria-label="Apple Pay"
                      style={{
                        backgroundImage:
                          "-webkit-named-image(apple-pay-logo-white)",
                        backgroundSize: "100% 50%",
                        backgroundPosition: "50% 50%",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="w-commerce-commercecartapplepaybutton"
                    >
                      <div />
                    </a>
                    <a
                      data-node-type="commerce-cart-quick-checkout-button"
                      role="button"
                      tabIndex={0}
                      aria-haspopup="dialog"
                      style={{ display: "none" }}
                      className="w-commerce-commercecartquickcheckoutbutton"
                    >
                      <svg
                        className="w-commerce-commercequickcheckoutgoogleicon"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                      >
                        <defs>
                          <polygon
                            id="google-mark-a"
                            points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                          />
                          <polygon
                            id="google-mark-c"
                            points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                          />
                        </defs>
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill="#4285F4"
                            d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                          />
                          <path
                            fill="#34A853"
                            d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                          />
                          <g transform="translate(0 4)">
                            <mask id="google-mark-b" fill="#fff">
                              <use xlinkHref="#google-mark-a" />
                            </mask>
                            <path
                              fill="#FBBC04"
                              d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                              mask="url(#google-mark-b)"
                            />
                          </g>
                          <mask id="google-mark-d" fill="#fff">
                            <use xlinkHref="#google-mark-c" />
                          </mask>
                          <path
                            fill="#EA4335"
                            d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                            mask="url(#google-mark-d)"
                          />
                        </g>
                      </svg>
                      <svg
                        className="w-commerce-commercequickcheckoutmicrosofticon"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                      >
                        <g fill="none" fillRule="evenodd">
                          <polygon fill="#F05022" points="7 7 1 7 1 1 7 1" />
                          <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" />
                          <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" />
                          <polygon
                            fill="#FFB700"
                            points="15 15 9 15 9 9 15 9"
                          />
                        </g>
                      </svg>
                      <div>Pay with browser.</div>
                    </a>
                  </div>
                  <form
                    data-node-type="commerce-checkout-customer-info-wrapper"
                    className="w-commerce-commercecheckoutcustomerinfowrapper"
                  >
                    <div className="w-commerce-commercecheckoutblockheader">
                      <h4 aria-level={2}>Customer Info</h4>
                      <div>* Required</div>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <label
                        htmlFor="wf-ecom-email"
                        className="w-commerce-commercecheckoutlabel"
                      >
                        Email *
                      </label>
                      <input
                        type="text"
                        id="wf-ecom-email"
                        className="w-commerce-commercecheckoutemailinput"
                        name="email"
                        required
                      />
                    </fieldset>
                  </form>
                  <form
                    data-node-type="commerce-checkout-shipping-address-wrapper"
                    className="w-commerce-commercecheckoutshippingaddresswrapper"
                  >
                    <div className="w-commerce-commercecheckoutblockheader">
                      <h4 aria-level={2}>Shipping Address</h4>
                      <div>* Required</div>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <label className="w-commerce-commercecheckoutlabel">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="w-commerce-commercecheckoutshippingfullname"
                        name="name"
                        required
                      />
                      <label className="w-commerce-commercecheckoutlabel">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        className="w-commerce-commercecheckoutshippingstreetaddress"
                        name="address_line1"
                        required
                      />
                      <input
                        type="text"
                        className="w-commerce-commercecheckoutshippingstreetaddressoptional"
                        name="address_line2"
                      />
                      <div className="w-commerce-commercecheckoutrow">
                        <div className="w-commerce-commercecheckoutcolumn">
                          <label className="w-commerce-commercecheckoutlabel">
                            City *
                          </label>
                          <input
                            type="text"
                            className="w-commerce-commercecheckoutshippingcity"
                            name="address_city"
                            required
                          />
                        </div>
                        <div className="w-commerce-commercecheckoutcolumn">
                          <label className="w-commerce-commercecheckoutlabel">
                            State/Province
                          </label>
                          <input
                            type="text"
                            className="w-commerce-commercecheckoutshippingstateprovince"
                            name="address_state"
                          />
                        </div>
                        <div className="w-commerce-commercecheckoutcolumn">
                          <label className="w-commerce-commercecheckoutlabel">
                            Zip/Postal Code *
                          </label>
                          <input
                            type="text"
                            data-node-type="commerce-checkout-shipping-zip-field"
                            className="w-commerce-commercecheckoutshippingzippostalcode"
                            name="address_zip"
                            required
                          />
                        </div>
                      </div>
                      <label className="w-commerce-commercecheckoutlabel">
                        Country *
                      </label>
                      <select
                        className="w-commerce-commercecheckoutshippingcountryselector"
                        name="address_country"
                      >
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Aland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia</option>
                        <option value="BQ">
                          Bonaire, Saint Eustatius and Saba
                        </option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">
                          British Indian Ocean Territory
                        </option>
                        <option value="VG">British Virgin Islands</option>
                        <option value="BN">Brunei</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="CV">Cabo Verde</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">Curacao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czechia</option>
                        <option value="CD">
                          Democratic Republic of the Congo
                        </option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="SZ">Eswatini</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="CI">Ivory Coast</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="XK">Kosovo</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Laos</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia</option>
                        <option value="MD">Moldova</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="KP">North Korea</option>
                        <option value="MK">North Macedonia</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS">Palestinian Territory</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="CG">Republic of the Congo</option>
                        <option value="RE">Reunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="RW">Rwanda</option>
                        <option value="BL">Saint Barthelemy</option>
                        <option value="SH">Saint Helena</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SX">Sint Maarten</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="KR">South Korea</option>
                        <option value="SS">South Sudan</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syria</option>
                        <option value="TW">Taiwan</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="VI">U.S. Virgin Islands</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UM">
                          United States Minor Outlying Islands
                        </option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VA">Vatican</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </select>
                    </fieldset>
                  </form>
                  <form
                    data-node-type="commerce-checkout-shipping-methods-wrapper"
                    className="w-commerce-commercecheckoutshippingmethodswrapper"
                  >
                    <div className="w-commerce-commercecheckoutblockheader">
                      <h4 aria-level={2}>Shipping Method</h4>
                    </div>
                    <fieldset>
                      <div
                        data-node-type="commerce-checkout-shipping-methods-list"
                        className="w-commerce-commercecheckoutshippingmethodslist"
                        data-wf-collection="database.commerceOrder.availableShippingMethods"
                        data-wf-template-id="wf-template-63114049b4f09c4e6cb6e434000000000042"
                      >
                        <label className="w-commerce-commercecheckoutshippingmethoditem">
                          <input
                            type="radio"
                            required
                            name="shipping-method-choice"
                          />
                          <div className="w-commerce-commercecheckoutshippingmethoddescriptionblock">
                            <div className="w-commerce-commerceboldtextblock" />
                            <div />
                          </div>
                          <div />
                        </label>
                      </div>
                      <div
                        data-node-type="commerce-checkout-shipping-methods-empty-state"
                        style={{ display: "none" }}
                        className="w-commerce-commercecheckoutshippingmethodsemptystate"
                      >
                        <div>
                          No shipping methods are available for the address
                          given.
                        </div>
                      </div>
                    </fieldset>
                  </form>
                  <div className="w-commerce-commercecheckoutpaymentinfowrapper">
                    <div className="w-commerce-commercecheckoutblockheader">
                      <h4 aria-level={2}>Payment Info</h4>
                      <div>* Required</div>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <label className="w-commerce-commercecheckoutlabel">
                        Card Number *
                      </label>
                      <div
                        data-wf-stripe-element-type="cardNumber"
                        data-wf-style-map="{}"
                        style={{ position: "relative" }}
                        className="w-commerce-commercecheckoutcardnumber"
                      >
                        <div />
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0,
                          }}
                        />
                      </div>
                      <div className="w-commerce-commercecheckoutrow">
                        <div className="w-commerce-commercecheckoutcolumn">
                          <label className="w-commerce-commercecheckoutlabel">
                            Expiration Date *
                          </label>
                          <div
                            data-wf-stripe-element-type="cardExpiry"
                            data-wf-style-map="{}"
                            style={{ position: "relative" }}
                            className="w-commerce-commercecheckoutcardexpirationdate"
                          >
                            <div />
                            <div
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0,
                              }}
                            />
                          </div>
                        </div>
                        <div className="w-commerce-commercecheckoutcolumn">
                          <label className="w-commerce-commercecheckoutlabel">
                            Security Code *
                          </label>
                          <div
                            data-wf-stripe-element-type="cardCvc"
                            data-wf-style-map="{}"
                            style={{ position: "relative" }}
                            className="w-commerce-commercecheckoutcardsecuritycode"
                          >
                            <div />
                            <div
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-commerce-commercecheckoutbillingaddresstogglewrapper">
                        <input
                          type="checkbox"
                          id="billing-address-toggle"
                          data-node-type="commerce-checkout-billing-address-toggle-checkbox"
                          className="w-commerce-commercecheckoutbillingaddresstogglecheckbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="billing-address-toggle"
                          className="w-commerce-commercecheckoutbillingaddresstogglelabel"
                        >
                          Billing address same as shipping
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <form
                    data-node-type="commerce-checkout-billing-address-wrapper"
                    style={{ display: "none" }}
                    className="w-commerce-commercecheckoutbillingaddresswrapper"
                  >
                    <div className="w-commerce-commercecheckoutblockheader">
                      <h4 aria-level={2}>Billing Address</h4>
                      <div>* Required</div>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <label className="w-commerce-commercecheckoutlabel">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="w-commerce-commercecheckoutbillingfullname"
                        name="name"
                        required
                      />
                      <label className="w-commerce-commercecheckoutlabel">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        className="w-commerce-commercecheckoutbillingstreetaddress"
                        name="address_line1"
                        required
                      />
                      <input
                        type="text"
                        className="w-commerce-commercecheckoutbillingstreetaddressoptional"
                        name="address_line2"
                      />
                      <div className="w-commerce-commercecheckoutrow">
                        <div className="w-commerce-commercecheckoutcolumn">
                          <label className="w-commerce-commercecheckoutlabel">
                            City *
                          </label>
                          <input
                            type="text"
                            className="w-commerce-commercecheckoutbillingcity"
                            name="address_city"
                            required
                          />
                        </div>
                        <div className="w-commerce-commercecheckoutcolumn">
                          <label className="w-commerce-commercecheckoutlabel">
                            State/Province
                          </label>
                          <input
                            type="text"
                            className="w-commerce-commercecheckoutbillingstateprovince"
                            name="address_state"
                          />
                        </div>
                        <div className="w-commerce-commercecheckoutcolumn">
                          <label className="w-commerce-commercecheckoutlabel">
                            Zip/Postal Code *
                          </label>
                          <input
                            type="text"
                            data-node-type="commerce-checkout-billing-zip-field"
                            className="w-commerce-commercecheckoutbillingzippostalcode"
                            name="address_zip"
                            required
                          />
                        </div>
                      </div>
                      <label className="w-commerce-commercecheckoutlabel">
                        Country *
                      </label>
                      <select
                        className="w-commerce-commercecheckoutbillingcountryselector"
                        name="address_country"
                      >
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Aland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia</option>
                        <option value="BQ">
                          Bonaire, Saint Eustatius and Saba
                        </option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">
                          British Indian Ocean Territory
                        </option>
                        <option value="VG">British Virgin Islands</option>
                        <option value="BN">Brunei</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="CV">Cabo Verde</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">Curacao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czechia</option>
                        <option value="CD">
                          Democratic Republic of the Congo
                        </option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="SZ">Eswatini</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="CI">Ivory Coast</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="XK">Kosovo</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Laos</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia</option>
                        <option value="MD">Moldova</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="KP">North Korea</option>
                        <option value="MK">North Macedonia</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS">Palestinian Territory</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="CG">Republic of the Congo</option>
                        <option value="RE">Reunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="RW">Rwanda</option>
                        <option value="BL">Saint Barthelemy</option>
                        <option value="SH">Saint Helena</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SX">Sint Maarten</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="KR">South Korea</option>
                        <option value="SS">South Sudan</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syria</option>
                        <option value="TW">Taiwan</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="VI">U.S. Virgin Islands</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option selected value="US">
                          United States
                        </option>
                        <option value="UM">
                          United States Minor Outlying Islands
                        </option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VA">Vatican</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </select>
                    </fieldset>
                  </form>
                  <div className="w-commerce-commercecheckoutorderitemswrapper">
                    <div className="w-commerce-commercecheckoutsummaryblockheader">
                      <h4 aria-level={2}>Items in Order</h4>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <div
                        role="list"
                        className="w-commerce-commercecheckoutorderitemslist"
                        data-wf-collection="database.commerceOrder.userItems"
                        data-wf-template-id="wf-template-63114049b4f09c4e6cb6e434000000000086"
                      />
                    </fieldset>
                  </div>
                </div>
                <div className="w-commerce-commercelayoutsidebar">
                  <div className="w-commerce-commercecheckoutordersummarywrapper">
                    <div className="w-commerce-commercecheckoutsummaryblockheader">
                      <h4 aria-level={2}>Order Summary</h4>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <div className="w-commerce-commercecheckoutsummarylineitem">
                        <div>Subtotal</div>
                        <div />
                      </div>
                      <div
                        className="w-commerce-commercecheckoutordersummaryextraitemslist"
                        data-wf-collection="database.commerceOrder.extraItems"
                        data-wf-template-id="wf-template-63114049b4f09c4e6cb6e4340000000000a0"
                      >
                        <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                          <div />
                          <div />
                        </div>
                      </div>
                      <div className="w-commerce-commercecheckoutsummarylineitem">
                        <div>Total</div>
                        <div className="w-commerce-commercecheckoutsummarytotal" />
                      </div>
                    </fieldset>
                  </div>
                  <a
                    href="#"
                    value="Place Order"
                    data-node-type="commerce-checkout-place-order-button"
                    className="w-commerce-commercecheckoutplaceorderbutton"
                    data-loading-text="Placing Order..."
                  >
                    Place Order
                  </a>
                  <div
                    data-node-type="commerce-checkout-error-state"
                    style={{ display: "none" }}
                    className="w-commerce-commercecheckouterrorstate"
                  >
                    <div
                      aria-live="polite"
                      className="w-checkout-error-msg"
                      data-w-info-error="There was an error processing your customer info. Please try again, or contact us if you continue to have problems."
                      data-w-shipping-error="Sorry. We can’t ship your order to the address provided."
                      data-w-billing-error="Your payment could not be completed with the payment information provided. Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order. Contact us if you continue to have problems."
                      data-w-payment-error="There was an error processing your payment. Please try again, or contact us if you continue to have problems."
                      data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again."
                      data-w-minimum-error="The order minimum was not met. Add more items to your cart to continue."
                      data-w-extras-error="A merchant setting has changed that impacts your cart. Please refresh and try again."
                      data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again."
                      data-w-invalid-discount-error="This discount is invalid."
                      data-w-expired-discount-error="This discount is no longer available."
                      data-w-usage-reached-discount-error="This discount is no longer available."
                      data-w-requirements-not-met-error
                    >
                      There was an error processing your customer info. Please
                      try again, or contact us if you continue to have problems.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    );
  }
}

export default CheckoutView;

/* eslint-enable */
