(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{1832:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[id]",function(){return n(4803)}])},5592:function(e,t,n){"use strict";var r=n(5893),s=n(5675),i=n(7294);t.Z=function(e){var t=e.src,n=e.width,a=e.height,c=e.alt,l=(0,i.useState)({image:t||"protfolio/placeholder_1280_720_idtgoz.jpg",blurredImage:"https://res.cloudinary.com/domq50ciy/c_scale,q_10,w_".concat(n,"/")+t})[0];return(0,r.jsx)(s.default,{src:l.image,width:n,height:a,placeholder:"blur",alt:c,blurDataURL:l.blurredImage})}},2446:function(e,t,n){"use strict";var r=n(5893),s=n(8969);t.Z=function(e){var t=e.header,n=e.children;return(0,r.jsxs)("div",{className:"mx-2 grid",children:[null===t||void 0===t?void 0:t.map((function(e){return(0,r.jsx)(s.Z,{className:"my-2 self-center justify-self-center text-xl font-bold",children:e},e)})),n]})}},9315:function(e,t,n){"use strict";var r=n(5893),s=n(7870),i=n(1163),a=n(7294),c=n(8969);t.Z=function(e){var t=e.children,n=(0,i.useRouter)(),l=(0,a.useState)(""),o=l[0],u=l[1];return(0,a.useEffect)((function(){u((function(){var e=n.asPath.split("/");return"".concat(e[2]?"/".concat(e[2]):"")}))}),[n.asPath]),(0,r.jsxs)("div",{className:" flex flex-col items-center",children:[(0,r.jsx)(s.E.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},children:(0,r.jsxs)(c.Z,{className:" text-2xl font-bold ",children:["Project",o]})}),(0,r.jsx)("main",{children:t})]})}},4803:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r,s=n(5893),i=n(7870),a=n(1664),c=n(8703),l=(n(7294),function(e){var t=e.children;return(0,s.jsx)("div",{children:t})}),o=n(9315),u=n(155),d=n(2446),f=n(3750),h=n(7735),m=n(8193);!function(e){e[e.FRONT=0]="FRONT",e[e.SERVER=1]="SERVER",e[e.API=2]="API"}(r||(r={}));var x=function(e){var t="mr-2";switch(e){case r.SERVER:return(0,s.jsx)(f.Tbt,{className:t});case r.FRONT:return(0,s.jsx)(h.PSn,{className:t});case r.API:return(0,s.jsx)(m.U9v,{className:t});default:return(0,s.jsx)(s.Fragment,{})}},p=function(e){var t=e.props;return(0,s.jsx)("div",{className:"mx-2 flex flex-col justify-center",children:t?(0,s.jsx)(s.Fragment,{children:Object.keys(t).map((function(e){var n=e,r=Object.keys(t[e])[0],i=t[e][r];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.default,{href:n,children:(0,s.jsxs)("a",{target:"_blank",className:"my-1 flex min-w-fit items-center self-center rounded-full bg-primary px-2 text-lightShades transition-colors hover:bg-info",children:[x(i),r]})})})}))}):(0,s.jsx)(s.Fragment,{})})},j=n(5592);var v=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,s.jsxs)(i.E.div,{initial:"pageInitial",animate:"pageAnimation",variants:{pageInitial:{opacity:0,x:-50},pageAnimation:{opacity:1,x:0}},className:"grid max-w-3xl",children:[(0,s.jsx)(a.default,{href:"/projects",scroll:!1,children:(0,s.jsxs)("a",{className:" my-2 flex items-center place-self-start rounded-full bg-primary py-2 px-8 text-lightShades hover:bg-info",children:[(0,s.jsx)(u.qvS,{className:" mr-2 rotate-180"})," Back"]})}),(0,s.jsx)("div",{className:" relative flex max-w-xl items-center place-self-center overflow-hidden rounded-lg",children:(0,s.jsx)(j.Z,{src:"protfolio/Thumbnail_w4oehm.jpg",width:1280,height:720})}),(0,s.jsxs)(d.Z,{header:["Description","Stack"],children:[(0,s.jsx)("div",{className:"row-start-2 m-4 flex flex-col self-center",children:"One of the courses I chose for last semester is Internet Technologies which focuses on web development. And I wanted to improve my web development skills. Hence, building a portfolio website as my entry project into web development."}),(0,s.jsx)(p,{props:{"https://nextjs.org/":{"NextJS/React - Front End":r.FRONT}}})]})]})};v.getLayout=function(e){return(0,s.jsx)(c.Z,{children:(0,s.jsx)(o.Z,{children:(0,s.jsx)(l,{children:e})})})};var g=v}},function(e){e.O(0,[737,937,13,260,90,415,617,739,703,774,888,179],(function(){return t=1832,e(e.s=t);var t}));var t=e.O();_N_E=t}]);