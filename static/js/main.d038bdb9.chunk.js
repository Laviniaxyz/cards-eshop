(this["webpackJsonpgcards-app"]=this["webpackJsonpgcards-app"]||[]).push([[0],{128:function(e,t,a){},131:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(10),c=a.n(s),i=(a(128),a(12)),o=a(17),l=a(13),d=a(2),u=function(){return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:"Homepage"})},j=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,function(){return Object(d.jsx)("div",{})}),b=function(){return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:"Contact"})},p=a(24),m=a.n(p),h=a(33),O=a(31),x=a(43),v=(a(131),a(25)),f=a(274),g=a(273),w=a(23),N=a(111),y=(a(231),N.a.initializeApp({apiKey:"AIzaSyCNVtrOikpvN2MnPuuOoyncvWV5XM7dRv4",authDomain:"auth-development-shop.firebaseapp.com",projectId:"auth-development-shop",storageBucket:"auth-development-shop.appspot.com",messagingSenderId:"371018280428",appId:"1:371018280428:web:7e89cf5a7c84cecf0da4c9"}).auth()),S=n.a.createContext(),E=function(){return Object(r.useContext)(S)},k=function(e){var t=e.children,a=Object(r.useState)(),n=Object(i.a)(a,2),s=n[0],c=n[1];Object(r.useEffect)((function(){return y.onAuthStateChanged((function(e){c(e)}))}),[]);var o={currentUser:s,signup:function(e,t){return y.createUserWithEmailAndPassword(e,t)},signin:function(e,t){return y.signInWithEmailAndPassword(e,t)},signout:function(){return y.signOut()},resetPass:function(e){return y.sendPasswordResetEmail(e)}};return Object(d.jsx)(S.Provider,{value:o,children:t})},P=function(e){var t=e.label,a=e.emailError,r=e.passwordError,n=Object(x.a)(e,["label","emailError","passwordError"]),s=Object(v.c)(n),c=Object(i.a)(s,2),o=c[0],l=c[1];return Object(d.jsxs)("div",{className:"user-box",children:[Object(d.jsx)(f.a,Object(O.a)(Object(O.a)({id:"standard-basic",label:t},o),n)),l.touched&&l.error?Object(d.jsx)("div",{className:"error",children:l.error}):null,a?Object(d.jsx)("div",{className:"error",children:a}):null,r?Object(d.jsx)("div",{className:"error",children:r}):null]})},C=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(""),c=Object(i.a)(s,2),l=c[0],u=c[1],j=E(),b=j.signin;j.currentUser;return Object(d.jsxs)("div",{className:"sign-in-page",children:[Object(d.jsxs)("div",{className:"sign-in",children:[Object(d.jsx)("h3",{children:"Log in with your email and password"}),Object(d.jsx)(v.b,{initialValues:{email:"",password:""},validationSchema:w.a({email:w.c().email("Email is not valid").required("Email is required"),password:w.c().required("Password is required")}),onSubmit:function(){var e=Object(h.a)(m.a.mark((function e(t,a){var r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.setSubmitting,s=a.resetForm,e.prev=1,n(""),u(""),r(!0),alert(JSON.stringify(t,null,2)),e.next=8,b(t.email,t.password);case 8:r(!1),s(t),e.next=21;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0,"err"),e.t1=e.t0.code,e.next="auth/invalid-email"===e.t1||"auth/user-not-found"===e.t1?18:"auth/wrong-password"===e.t1||"auth/too-many-requests"===e.t1?20:21;break;case 18:return n(e.t0.message),e.abrupt("break",21);case 20:u(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){return Object(d.jsxs)(v.a,{children:[Object(d.jsx)(P,{name:"email",label:"Email",type:"email",emailError:a}),Object(d.jsx)(P,{name:"password",label:"Password",type:"password",passwordError:l}),Object(d.jsx)(g.a,{className:"button",type:"submit",disabled:e.isSubmitting,variant:"contained",color:"primary",children:"Log in"}),Object(d.jsx)("div",{className:"reset-pass",children:Object(d.jsx)(o.b,{to:"/reset-password",children:"Forgot password?"})})]})}})]}),Object(d.jsxs)("p",{children:["Need an account? ",Object(d.jsx)(o.b,{to:"/signup",children:"Sign up"})," today"]})]})},q=(a(236),function(e){var t=e.label,a=e.emailError,r=Object(x.a)(e,["label","emailError"]),n=Object(v.c)(r),s=Object(i.a)(n,2),c=s[0],o=s[1];return Object(d.jsxs)("div",{className:"user-box",children:[Object(d.jsx)(f.a,Object(O.a)(Object(O.a)({id:"standard-basic",label:t},c),r)),o.touched&&o.error?Object(d.jsx)("div",{children:o.error}):null,a?Object(d.jsx)("div",{className:"error",children:a}):null]})}),A=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=E(),c=s.signup;s.currentUser;return Object(d.jsxs)("div",{className:"sign-up-page",children:[Object(d.jsxs)("div",{className:"sign-up",children:[Object(d.jsx)("h3",{children:"Sign up with your email and password"}),Object(d.jsx)(v.b,{initialValues:{email:"",password:"",confirmPassword:""},validationSchema:w.a({email:w.c().email("Email is not valid").required("Email is required"),password:w.c().required("Password is required").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"Password must contain at least 8 characters, one uppercase, one number and one special case character"),confirmPassword:w.c().oneOf([w.b("password"),null],"Passwords must match")}),onSubmit:function(){var e=Object(h.a)(m.a.mark((function e(t,a){var r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.setSubmitting,s=a.resetForm,e.prev=1,n(""),r(!0),alert(JSON.stringify(t,null,2)),e.next=7,c(t.email,t.password);case 7:r(!1),s(t),e.next=18;break;case 11:e.prev=11,e.t0=e.catch(1),e.t1=e.t0.code,e.next="auth/email-already-in-use"===e.t1||"auth/invalid-email"===e.t1?16:18;break;case 16:return n(e.t0.message),e.abrupt("break",18);case 18:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){return Object(d.jsxs)(v.a,{children:[Object(d.jsx)(q,{name:"email",label:"Email",type:"email",emailError:a}),Object(d.jsx)(q,{name:"password",label:"Password",type:"password"}),Object(d.jsx)(q,{name:"confirmPassword",label:"Confirm Password",type:"password"}),Object(d.jsx)(g.a,{className:"button",type:"submit",disabled:e.isSubmitting,variant:"contained",color:"primary",children:"Sign up"})]})}})]}),Object(d.jsxs)("p",{children:["Already have an account? ",Object(d.jsx)(o.b,{to:"/login",children:"Log in"})]})]})},F=(a(237),a(275)),I=function(e){var t=e.label,a=e.emailError,r=(e.passwordError,Object(x.a)(e,["label","emailError","passwordError"])),n=Object(v.c)(r),s=Object(i.a)(n,2),c=s[0],o=s[1];return Object(d.jsxs)("div",{className:"user-box",children:[Object(d.jsx)(f.a,Object(O.a)(Object(O.a)({id:"standard-basic",label:t},c),r)),o.touched&&o.error?Object(d.jsx)("div",{className:"error",children:o.error}):null,a?Object(d.jsx)("div",{className:"error",children:a}):null]})},L=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(!1),c=Object(i.a)(s,2),l=c[0],u=c[1],j=E(),b=j.resetPass;j.currentUser;return Object(d.jsxs)("div",{className:"sign-in-page",children:[Object(d.jsxs)("div",{className:"sign-in",children:[Object(d.jsx)("h3",{children:"Enter your email to reset your password"}),l?Object(d.jsx)(F.a,{severity:"success",variant:"outlined",children:"Check your inbox for instructions"}):null,Object(d.jsx)(v.b,{initialValues:{email:""},validationSchema:w.a({email:w.c().email("Email is not valid").required("Email is required")}),onSubmit:function(){var e=Object(h.a)(m.a.mark((function e(t,a){var r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.setSubmitting,s=a.resetForm,e.prev=1,u(!1),n(""),r(!0),alert(JSON.stringify(t,null,2)),e.next=8,b(t.email);case 8:r(!1),s(t),u(!0),e.next=21;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0,"err"),e.t1=e.t0.code,e.next="auth/invalid-email"===e.t1||"auth/user-not-found"===e.t1?19:21;break;case 19:return n(e.t0.message),e.abrupt("break",21);case 21:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){return Object(d.jsxs)(v.a,{children:[Object(d.jsx)(I,{name:"email",label:"Email",type:"email",emailError:a}),Object(d.jsx)(g.a,{className:"button",type:"submit",disabled:e.isSubmitting,variant:"contained",color:"primary",children:"Reset pass"})]})}})]}),Object(d.jsxs)("p",{children:["Need an account? ",Object(d.jsx)(o.b,{to:"/signup",children:"Sign up"})," today"]})]})},T=function(){return Object(d.jsx)("div",{children:"Checkout"})},U=function(){return Object(d.jsx)("div",{children:"PageNotFound"})},J=(a(238),a(239),a.p+"static/media/logo2.fd52e288.jpg"),M=a.p+"static/media/shopping-bag.a688874f.svg",V=function(e){var t=Object(r.useState)(""),a=Object(i.a)(t,2),n=(a[0],a[1]),s=Object(r.useState)(!1),c=Object(i.a)(s,2),l=c[0],u=c[1],j=E(),b=j.currentUser,p=j.signout,O=Object(r.useRef)(),x=function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(""),e.prev=1,e.next=4,p();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),n("Failed to sign out");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){return window.addEventListener("click",v),function(){window.removeEventListener("click",v)}}),[l]);var v=function(e){O.current.contains(e.target)?u(!l):u(!1)};return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsxs)("div",{className:"hamburger-menu",ref:O,children:[Object(d.jsx)("a",{children:Object(d.jsx)("i",{className:"fa fa-bars fa-2x"})}),l?Object(d.jsxs)("div",{className:"mobile-navigation",children:[Object(d.jsx)("div",{children:Object(d.jsx)(o.b,{to:"/shop",children:"SHOP"})}),Object(d.jsx)("div",{children:Object(d.jsx)(o.b,{to:"/contact",children:"CONTACT"})})]}):null]}),Object(d.jsxs)("div",{className:"logoAndName",children:[Object(d.jsx)(o.b,{to:"/",children:Object(d.jsx)("img",{src:J,alt:"Greeting Card Logo"})}),Object(d.jsx)("div",{children:"eCards"})]})]}),Object(d.jsxs)("div",{className:"navigation",children:[Object(d.jsx)("div",{className:"shop-nav",children:Object(d.jsx)(o.b,{to:"/shop",children:"SHOP"})}),Object(d.jsx)("div",{className:"contact-nav",children:Object(d.jsx)(o.b,{to:"/contact",children:"CONTACT"})}),Object(d.jsx)("div",{children:b?Object(d.jsx)(o.b,{to:"/login",onClick:x,children:"SIGN OUT"}):Object(d.jsx)(o.b,{to:"/login",children:"SIGN IN"})}),Object(d.jsxs)("div",{className:"bag-nav",children:[Object(d.jsx)("div",{className:"item-number",children:"0"}),Object(d.jsx)(o.b,{to:"checkout",children:Object(d.jsx)("img",{className:"shopping-bag",src:M,alt:"shopping-bag-icon"})})]})]})]})};var R=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(d.jsx)(o.a,{children:Object(d.jsx)("div",{className:"App",onClick:function(){n(!a)},children:Object(d.jsxs)(k,{children:[Object(d.jsx)(V,{toggleMobileNav:function(){n(!a)},showMobileNav:a}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:u}),Object(d.jsx)(l.a,{path:"/shop",component:j}),Object(d.jsx)(l.a,{path:"/contact",component:b}),Object(d.jsx)(l.a,{path:"/login",component:C}),Object(d.jsx)(l.a,{path:"/signup",component:A}),Object(d.jsx)(l.a,{path:"/reset-password",component:L}),Object(d.jsx)(l.a,{path:"/checkout",component:T}),Object(d.jsx)(l.a,{path:"*",children:Object(d.jsx)(U,{})})]})]})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,277)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),z()}},[[240,1,2]]]);
//# sourceMappingURL=main.d038bdb9.chunk.js.map