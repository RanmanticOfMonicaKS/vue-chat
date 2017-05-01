;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weibiaoti114" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M660.608 601.792C762.112 548.096 832 442.752 832 320c0-176.768-143.232-320-320-320S192 143.232 192 320c0 122.752 69.888 228.096 171.392 281.792C189.12 663.104 64 828.736 64 1024l64 0c0-212.032 171.968-384 384-384s384 171.968 384 384l64 0C960 828.736 834.88 663.104 660.608 601.792zM256 320c0-141.376 114.624-256 256-256s256 114.624 256 256-114.624 256-256 256S256 461.376 256 320z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-yxj-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1006.08 970.24c-32.768-136.704-118.784-247.296-234.496-316.416-19.968-13.824-41.984-27.648-65.536-39.424-25.088-12.288-28.672-46.08-6.144-62.976 83.456-62.464 133.632-165.888 120.832-280.576C804.864 128 694.272 17.408 550.912 2.048c-184.32-19.968-339.968 123.904-339.968 304.128 0 99.328 47.616 187.392 120.832 243.2 22.016 16.896 17.92 51.2-7.68 62.976-32.768 14.848-61.44 34.304-87.552 52.224-107.52 69.12-187.392 177.152-219.136 306.176C10.752 998.4 32.768 1024 61.952 1024l900.096 0C991.232 1024 1013.248 998.4 1006.08 970.24z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qunzu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M621.341 461.006c43.302-34 71.237-86.668 71.237-145.856 0-102.308-83.223-185.535-185.538-185.535-102.311 0-185.535 83.223-185.535 185.535 0 59.189 27.965 111.856 71.237 145.856-114.028 45.57-194.928 156.974-194.928 287.061v61.845c0 17.093 13.83 30.926 30.926 30.926h556.608c17.093 0 30.919-13.83 30.919-30.926v-61.844c0.003-130.123-80.869-241.492-194.926-287.062v0zM507.044 191.459c68.215 0 123.689 55.473 123.689 123.689 0 68.219-55.473 123.695-123.689 123.695-68.219 0-123.694-55.474-123.694-123.695-0.001-68.215 55.473-123.689 123.694-123.689v0zM754.422 778.994h-494.765v-30.925c0-136.403 110.977-247.38 247.413-247.38 136.403 0 247.35 110.977 247.35 247.38v30.925zM754.422 778.994z"  ></path>' +
    '' +
    '<path d="M300.033 471.757c0.848-1.87 0.848-3.863 1.267-5.797 0.3-1.178 0.636-2.294 0.788-3.534 0.238-2.444 0.092-4.769-0.243-7.154-0.119-1.267 0.181-2.478-0.119-3.745-0.181-0.727-0.693-1.239-0.908-1.966-0.479-1.386-1.143-2.625-1.808-3.922-1.274-2.659-2.659-5.073-4.562-7.217-0.273-0.3-0.603-0.515-0.905-0.817-2.806-2.929-6.041-5.162-9.724-6.764-33.461-14.916-55.084-48.138-55.084-84.736 0-43.063 29.169-80.147 70.961-90.201 16.609-4.018 26.816-20.719 22.833-37.329-4.046-16.606-20.81-26.693-37.329-22.83-69.666 16.791-118.314 78.639-118.314 150.357 0 39.138 14.889 75.826 40.193 103.728-80.475 41.706-132.96 125.109-132.96 219.481v47.834c0 17.093 13.83 30.926 30.919 30.926 17.093 0 30.926-13.83 30.926-30.926v-47.834c0-85.523 57.497-158.905 139.999-179.68 10.263-1.449 19.598-7.698 24.064-17.875v0zM300.033 471.757z"  ></path>' +
    '' +
    '<path d="M806.879 449.835c25.305-27.903 40.19-64.593 40.19-103.731 0-69.847-47.047-131.271-114.416-149.36-16.458-4.41-33.43 5.346-37.902 21.831-4.438 16.519 5.346 33.46 21.838 37.902 40.403 10.838 68.637 47.712 68.637 89.628 0 36.597-21.589 69.755-55.019 84.705-3.742 1.632-7.037 3.892-9.871 6.853-0.243 0.273-0.546 0.454-0.788 0.727-1.931 2.143-3.318 4.621-4.621 7.308-0.633 1.296-1.326 2.507-1.78 3.863-0.211 0.693-0.726 1.239-0.905 1.963-0.3 1.267 0 2.477-0.124 3.745-0.33 2.386-0.478 4.711-0.238 7.158 0.153 1.235 0.484 2.353 0.784 3.531 0.421 1.933 0.421 3.926 1.267 5.802 4.473 10.174 13.804 16.429 24.066 17.872 82.501 20.78 139.998 94.157 139.998 179.68v47.838c0 17.089 13.83 30.919 30.926 30.919 17.089 0 30.919-13.83 30.919-30.919v-47.838c0-94.371-52.482-177.777-132.96-219.479v0zM806.879 449.835z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kehuqunzu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M575.457882 507.512471c59.226353-23.476706 101.285647-81.212235 101.285647-148.690824 0-88.229647-71.785412-160-160.015058-160s-160 71.770353-160 160c0 67.478588 42.044235 125.214118 101.270588 148.690824-131.689412 27.226353-231.002353 144.097882-231.002353 283.738353 0 33.957647 23.823059 45.206588 42.962823 54.241882l1.099295 0.451765c77.176471 27.241412 188.792471 34.499765 242.582588 34.499764 58.654118 0 173.477647-9.517176 249.735529-35.855059 28.581647-10.962824 43.083294-28.912941 43.083294-53.338352 0-139.655529-99.312941-256.527059-231.002353-283.738353z"  ></path>' +
    '' +
    '<path d="M382.780235 494.034824c-37.903059-35.343059-61.741176-85.564235-61.741176-141.477648 0-68.472471 35.644235-128.512 89.283765-162.93647v-0.015059c-0.331294-0.466824-0.813176-0.737882-1.189648-1.129412-0.391529-0.421647-0.632471-0.948706-1.099294-1.325176a160.301176 160.301176 0 0 0-100.141176-35.312941c-88.229647 0-160.015059 71.770353-160.015059 160 0 67.478588 42.059294 125.214118 101.285647 148.690823C117.458824 487.755294 18.160941 604.626824 18.160941 744.267294c0 24.440471 14.501647 42.375529 43.459765 53.488941 42.887529 14.817882 96.105412 23.356235 134.128941 27.994353a322.409412 322.409412 0 0 1-2.409412-38.731294c0-130.439529 77.778824-242.642824 189.44-292.98447zM786.808471 460.544c59.226353-23.476706 101.285647-81.212235 101.285647-148.690824 0-88.229647-71.785412-160-160.015059-160-36.939294 0-73.005176 12.905412-101.51153 36.321883l-4.246588 3.478588a193.400471 193.400471 0 0 1 85.940706 160.903529c0 55.913412-23.838118 106.134588-61.741176 141.477648 111.661176 50.341647 189.44 162.544941 189.44 292.98447 0 13.402353-0.918588 26.578824-2.499765 39.544471l0.798118-0.090353c39.137882-4.547765 95.216941-13.206588 140.483764-28.852706 28.581647-10.962824 43.083294-28.912941 43.083294-53.338353 0-139.655529-99.312941-256.527059-231.017411-283.738353z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bianji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M121.018182 912.290909h786.618182V977.454545H121.018182zM176.872727 781.963636H186.181818l204.8-65.163636c4.654545 0 9.309091-4.654545 13.963637-9.309091l465.454545-465.454545c4.654545-4.654545 9.309091-13.963636 9.309091-23.272728s-4.654545-18.618182-9.309091-23.272727l-144.290909-144.290909c-13.963636-13.963636-32.581818-13.963636-46.545455 0l-465.454545 465.454545c-4.654545 4.654545-4.654545 9.309091-9.309091 13.963637L139.636364 735.418182c-4.654545 13.963636 0 23.272727 9.309091 32.581818 9.309091 9.309091 18.618182 13.963636 27.927272 13.963636z m93.090909-223.418181l432.872728-432.872728 97.745454 97.745455-432.872727 432.872727-139.636364 41.890909 41.890909-139.636363z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M977.454545 474.763636h-432.872727V46.545455h-69.818182v428.218181H46.545455v69.818182h428.218181V977.454545h69.818182v-432.872727H977.454545z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M977.454545 97.745455L926.254545 46.545455 512 460.8 97.745455 46.545455 46.545455 97.745455 460.8 512 46.545455 926.254545 97.745455 977.454545l414.254545-414.254545 414.254545 414.254545 51.2-51.2-414.254545-414.254545z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M977.454545 83.781818H46.545455c-18.618182 0-37.236364 13.963636-37.236364 37.236364v791.272727c0 18.618182 13.963636 37.236364 37.236364 37.236364h930.90909c18.618182 0 37.236364-13.963636 37.236364-37.236364v-791.272727c0-23.272727-18.618182-37.236364-37.236364-37.236364z m-479.418181 791.272727l190.836363-195.490909 204.8 195.490909h-395.636363z m442.181818-51.2l-256-242.036363-283.927273 293.236363H125.672727l297.890909-288.581818 102.4 93.090909 46.545455-51.2-148.945455-139.636363-339.781818 330.472727V148.945455h861.090909v674.90909z"  ></path>' +
    '' +
    '<path d="M819.2 279.272727m-69.818182 0a69.818182 69.818182 0 1 0 139.636364 0 69.818182 69.818182 0 1 0-139.636364 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M991.418182 972.8L791.272727 772.654545c79.127273-83.781818 130.327273-195.490909 130.327273-316.50909 0-251.345455-200.145455-451.490909-446.836364-451.49091C232.727273 0 32.581818 204.8 32.581818 451.490909s200.145455 451.490909 446.836364 451.490909c97.745455 0 190.836364-32.581818 265.309091-88.436363l200.145454 204.8 46.545455-46.545455zM102.4 451.490909c0-209.454545 167.563636-381.672727 377.018182-381.672727s377.018182 172.218182 377.018182 381.672727-172.218182 386.327273-381.672728 386.327273c-204.8 0-372.363636-172.218182-372.363636-386.327273z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)