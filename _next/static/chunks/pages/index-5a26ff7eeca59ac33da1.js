_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"+IV6":function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"+Sw5":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"5WRv":function(e,t,n){var r=n("iNmH"),o=n("Qatm"),a=n("Zhxd"),i=n("kluZ");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},"9fEB":function(e,t,n){"use strict";n("OvAC");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("mXGw")),a=(r=n("GlZI"))&&r.__esModule?r:{default:r},i=n("9rrO"),u=n("bxxT"),c=n("vI6Y");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function l(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var f=p[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var d=o.props[f],l=r[f]||new Set;"name"===f&&i||!l.has(d)?(l.add(d),r[f]=l):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:l,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},"9rrO":function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},GlZI:function(e,t,n){"use strict";var r=n("5WRv"),o=n("SDJZ"),a=n("NToG"),i=(n("T1e2"),n("eef+")),u=n("K4DB"),c=n("+IV6");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("mXGw"),d=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},K4DB:function(e,t,n){var r=n("e+GP"),o=n("T1e2");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},NToG:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},OvAC:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},Qatm:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},SDJZ:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},T1e2:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},WI9V:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},Zhxd:function(e,t,n){var r=n("+Sw5");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},bxxT:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},cMU6:function(e,t,n){"use strict";n.r(t);var r=n("oYCi"),o=n("mXGw"),a=n.n(o),i=n("UO5U"),u=n("UutA");function c(){var e=Object(i.a)(["\n  ","\n  color: ",";\n"]);return c=function(){return e},e}function s(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: ",";\n\n  background-color: ",";\n  ","\n"]);return s=function(){return e},e}var f={Container:u.d.div(s(),(function(e){return e.theme.space.base}),(function(e){return e.theme.colors.red.base}),(function(e){return e.theme.shadow.base})),Title:u.d.h1(c(),(function(e){return e.theme.typography.huge}),(function(e){return e.theme.colors.white.base}))},d="React Pokedex";function p(){return Object(r.jsx)(f.Container,{children:Object(r.jsx)(f.Title,{children:d})})}var l=a.a.memo(p);function m(){var e=Object(i.a)(["\n  padding: ",";\n  box-sizing: border-box;\n  min-height: calc(100vh - 88px); /** 88px is the height of Header */\n"]);return m=function(){return e},e}function h(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n\n  background-color: ",";\n"]);return h=function(){return e},e}var b={Container:u.d.div(h(),(function(e){return e.theme.colors.white.contrast})),Content:u.d.div(m(),(function(e){return e.theme.space.base}))};function v(e){return Object(r.jsxs)(b.Container,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(b.Content,{children:e.children})]})}var y=a.a.memo(v);function x(){var e=Object(i.a)(["\n  ","\n  text-align: center;\n\n  background-color: ",";\n  border-radius: 0.25rem;\n  padding: ",";\n"]);return x=function(){return e},e}var g={Container:u.d.div(x(),(function(e){return e.theme.typography.normal}),(function(e){return e.theme.colors.white.base}),(function(e){return e.theme.space.base}))};function j(e){return Object(r.jsx)(g.Container,{children:e.description})}var O=a.a.memo(j);function w(){var e=Object(i.a)([""]);return w=function(){return e},e}function _(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  ","\n"]);return _=function(){return e},e}function C(){var e=Object(i.a)(["\n  margin: 0 auto;\n  max-height: 120px;\n"]);return C=function(){return e},e}function M(){var e=Object(i.a)(["\n  display: grid;\n  grid-gap: ",";\n\n  background-color: ",";\n  border-radius: 0.25rem;\n\n  padding: ",";\n  box-sizing: border-box;\n"]);return M=function(){return e},e}function S(){var e=Object(i.a)(["\n  display: grid;\n  grid-gap: ",";\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\n  padding: ",";\n"]);return S=function(){return e},e}var k={Container:u.d.div(S(),(function(e){return e.theme.space.base}),(function(e){return e.theme.space.base})),Item:u.d.div(M(),(function(e){return e.theme.space.base}),(function(e){return e.theme.colors.white.base}),(function(e){return e.theme.space.small})),Image:u.d.img(C()),DescriptionContent:u.d.div(_(),(function(e){return e.theme.typography.normal})),Label:u.d.p(w())},P="Sem Pok\xe9mon listados.",A=function(e){return"Esse \xe9 o ".concat(e)},I=function(e){return"#".concat(e)};function E(e){return e.items[0]?Object(r.jsx)(k.Container,{children:e.items.map((function(e){return Object(r.jsxs)(k.Item,{children:[Object(r.jsx)(k.Image,{src:e.imageSrc,alt:A(e.name)}),Object(r.jsxs)(k.DescriptionContent,{children:[Object(r.jsx)(k.Label,{children:e.name}),Object(r.jsx)(k.Label,{children:I(e.number)})]})]},e.number)}))}):Object(r.jsx)(O,{description:P})}E.defaultProps={items:[]};var T=a.a.memo(E),D=n("pWCa"),H=n.n(D),G=function(e){return"https://matheusalves.dev/react-pokedex/"};function N(e){return Object(r.jsxs)(H.a,{children:[Object(r.jsx)("title",{children:e.title}),Object(r.jsx)("meta",{name:"description",content:e.description}),Object(r.jsx)("link",{rel:"shortcut icon",href:G("/icon/favicon.png")})]})}var R=a.a.memo(N),W="Pokedex Kanto",U="The best Pokedex of Kanto in React and NextJS",X=new Array(120).fill({name:"Ditto",imageSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",number:132});t.default=function(){return Object(r.jsxs)(y,{children:[Object(r.jsx)(R,{title:W,description:U}),Object(r.jsx)(T,{items:X})]})}},"e+GP":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},"eef+":function(e,t,n){var r=n("WI9V");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},iNmH:function(e,t,n){var r=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return r(e)}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},mJN6:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},pWCa:function(e,t,n){e.exports=n("9fEB")},vI6Y:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("mXGw"))&&r.__esModule?r:{default:r},a=n("9rrO");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},x9yg:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports}},[["mJN6",0,1,2]]]);