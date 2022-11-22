/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6311249bb727571ee13bb71c").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class NotFoundView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NotFoundController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NotFoundView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6311249bb7275711fe3bb759'
    htmlEl.dataset['wfSite'] = '6311249bb727571ee13bb71c'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = NotFoundView.Controller !== NotFoundView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/black-history-result.webflow.css);


          body { -webkit-font-smoothing: antialiased; }
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-c-custom-code w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n  .af-view { -webkit-font-smoothing: antialiased; }\n  .af-view [vertical-align-middle]{\n    vertical-align: middle\n  }\n  .af-view [vertical-align-top]{\n    vertical-align: top\n  }\n  /* Avoid texts inside the dropdown toggle to go outside the dropdown box. \n  For this we need to have the class of the Drodpown Toggle + the p or h inside */\n  .af-view .af-class-faq-dropdown p {\n    white-space: normal !important;\n  } .af-view */\n  .af-class-c-image-reveal_movement {\n    max-width: fit-content;\n  }\n.af-view #star {\n    -webkit-filter: drop-shadow( 0px 0px 2px #EFBA30);\n    filter: drop-shadow( 0px 0px 2px #EFBA30);\n  }\n.af-view select {\n  -webkit-appearance: none; \n  -moz-appearance: none; \n  background: transparent;\n  background-image: url(https://uploads-ssl.webflow.com/60dee237ed94659eefff0d9b/60df1078240d4d8c279ecd6f_Select-icon.svg);\n  background-repeat: no-repeat;\n  background-position-x: 95%;\n  background-position-y: 50%;\n" }} />
            </div>
            <div className="af-class-c-404">
              <h1 className="af-class-c-title-1">404</h1>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default NotFoundView

/* eslint-enable */