(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function C(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(z,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},z=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,w=e.loading,C=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,d.default)({opacity:O?1:0,transition:N?"opacity "+y+"ms":"none"},o),x="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},N&&P,{},o,{},f),j={title:t,alt:this.state.isVisible?"":a,style:T,className:g,itemProp:v};if(m){var q=m,_=p(m);return l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),x&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&P)}),_.base64&&l.default.createElement(V,{ariaHidden:!0,src:_.base64,spreadProps:j,imageVariants:q,generateSources:L}),_.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,src:_.tracedSVG,spreadProps:j,imageVariants:q,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,E(q),l.default.createElement(z,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:C})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:a,title:t,loading:w},_,{imageVariants:q}))}}))}if(h){var H=h,F=p(h),W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},x&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:x,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},N&&P)}),F.base64&&l.default.createElement(V,{ariaHidden:!0,src:F.base64,spreadProps:j,imageVariants:H,generateSources:L}),F.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,src:F.tracedSVG,spreadProps:j,imageVariants:H,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,E(H),l.default.createElement(z,{alt:a,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:C})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:a,title:t,loading:w},F,{imageVariants:H}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});N.propTypes={resolutions:R,sizes:x,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=N;t.default=P},F7ra:function(e,t,a){"use strict";a("0mN4");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=(a("oXV0"),a("jf4w"),a("9eSz")),o=a.n(s);var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=r.prototype;return s.getPostList=function(){var e=[];return this.props.postEdges.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,featuredImage:t.node.frontmatter.featuredImage,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt})})),e},s.render=function(){var e=this.getPostList();return i.a.createElement("div",{className:"posts"},e.map((function(e){var t;return e.featuredImage&&(t=e.featuredImage.childImageSharp.fixed),i.a.createElement(n.Link,{to:e.path,key:e.title},t?i.a.createElement(o.a,{fixed:t}):i.a.createElement("div",null),i.a.createElement("div",{className:"post-title"},i.a.createElement("h2",null,e.title),i.a.createElement("small",{className:"text-muted"},e.date)))})))},r}(i.a.Component);t.a=d},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},L9e7:function(e,t,a){"use strict";a.r(t),a.d(t,"postsQuery",(function(){return m}));a("Z2Ku"),a("L9s1");var r=a("q1tI"),i=a.n(r),n=a("83Zx"),s=a("TJpk"),o=a.n(s),d=a("S6qR"),l=a.n(d),c=a("F7ra"),u=a("IP2g"),f=a("wHSu"),g=(a("7SNo"),a("jf4w"),a("e7T6"));var p=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={filteredEdges:a.props.data.articles.edges,currentCategory:"",sidebarShown:!0,toggleIcon:!0},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=r.prototype;return s.categoryFilter=function(e){var t=this.props.data.articles.edges.filter((function(t){return t.node.frontmatter.category[0].toLowerCase().includes(e.toLowerCase())}));this.setState({filteredEdges:t,currentCategory:e})},s.allPosts=function(){this.setState({filteredEdges:this.props.data.articles.edges,currentCategory:""})},s.toggleSidebar=function(){console.log("Sidebar Clicked"),this.setState({sidebarShown:!this.state.sidebarShown,toggleIcon:!this.state.toggleIcon})},s.render=function(){var e=this,t=this.props.data.categories.group;this.props.data.articles.edges;return i.a.createElement(n.a,null,i.a.createElement(o.a,{title:"Posts | "+l.a.siteTitle+" – Software Engineer"}),i.a.createElement("div",{className:"container"},this.state.currentCategory&&i.a.createElement("h3",{style:{textAlign:"center"}},"Filtered Posts under ",i.a.createElement("b",{style:{color:"rgb(26, 188, 156)"}},this.state.currentCategory)," category"),i.a.createElement("section",null,i.a.createElement(c.a,{postEdges:this.state.filteredEdges})),i.a.createElement("div",{className:"sidebar-circle "+(this.state.sidebarShown?"sidebar-circle-position":""),onClick:function(){e.toggleSidebar()}},!this.state.toggleIcon&&i.a.createElement(u.a,{icon:f.a}),this.state.toggleIcon&&i.a.createElement(u.a,{icon:f.g})),i.a.createElement("div",{className:"sidebar "+(this.state.sidebarShown?"":"sidebar-toggle")+"\n            "+(g.a.isDark?"isDarkBackground":"isNotDarkBackground")},i.a.createElement("p",{style:{fontSize:"1.5em",fontWeight:"bold",textAlign:"center"}},"Categories"),i.a.createElement("div",{className:"category-list"},i.a.createElement("p",{onClick:function(){e.allPosts()}},i.a.createElement(u.a,{icon:f.c}),i.a.createElement("span",{style:{marginLeft:5}},"All (",this.props.data.articles.totalCount,")"),i.a.createElement("br",null)),t.map((function(t){return i.a.createElement("p",{key:t.fieldValue,onClick:function(){e.categoryFilter(t.fieldValue)}},i.a.createElement(u.a,{icon:f.c}),i.a.createElement("span",{style:{marginLeft:5}},t.fieldValue," (",t.totalCount,")"),i.a.createElement("br",null))}))))))},r}(i.a.Component);t.default=p;var m="2563843266"}}]);
//# sourceMappingURL=component---src-pages-posts-js-ccc2688c1422b12b5355.js.map