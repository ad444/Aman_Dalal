(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{65:function(e,c,t){},67:function(e,c,t){"use strict";t.r(c);var l=t(1),a=t.n(l),s=t(9),n=t.n(s),o=t(7),i=t(21),r=t(14),d=t(89),j=t(0),b=function(e){var c=e.backgroundcolor,t=e.txtColor,a=Object(l.useState)({name:"",number:"",email:""}),s=Object(o.a)(a,2),n=s[0],d=s[1],b=Object(l.useState)({name:"",number:"",email:""}),m=Object(o.a)(b,2),x=m[0],h=m[1],O=function(e){var c=e.target,t=c.name,l=c.value;h((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},t,l))}))},u=function(){d({name:"",number:"",email:""})};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{id:"contact",className:"container-fluid",style:{backgroundColor:c,color:t,border:"1px solid",borderColor:c},children:Object(j.jsxs)("div",{id:"contactcontent",className:"row ",children:[Object(j.jsx)("div",{className:"col-12 text-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"heading",children:"Contact"}),Object(j.jsx)("center",{children:Object(j.jsx)("div",{className:"headborder"})})]})}),Object(j.jsx)("div",{className:"col-md-10 mt-4 mx-auto",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-12 col-xl-10 mx-auto",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();""!==x.name&&x.name.match(/[A-Z][a-z]+/)?""!==x.number&&x.number.match(/^[0-9]+/)&&10===x.number.length?""!==x.email&&x.email.match(/^\w+[./_]?\@\w+\.[a-z]{2,3}$/)?alert("Your Data : "+x.name+" "+x.number+" "+x.email+"\nCurrently Form Does Not Have Any Backend Support\nThank You!"):d((function(e){return Object(r.a)(Object(r.a)({},e),{},{email:"Enter Valid Email"})})):d((function(e){return Object(r.a)(Object(r.a)({},e),{},{number:"Enter Valid Number"})})):d((function(e){return Object(r.a)(Object(r.a)({},e),{},{name:"Enter Valid Name"})}))},method:"post",children:[Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{for:"exampleInputName",children:"Name "}),Object(j.jsx)("input",{type:"text",name:"name",value:x.name,onChange:O,onFocus:u,className:"form-control",id:"contactInput","aria-describedby":"emailHelp"}),Object(j.jsx)("small",{children:n.name})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"exampleInputNumber",children:"Number"}),Object(j.jsx)("input",{type:"text",name:"number",value:x.number,onChange:O,onFocus:u,className:"form-control",id:"contactInput","aria-describedby":"emailHelp"}),Object(j.jsx)("small",{children:n.number})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(j.jsx)("input",{type:"text",name:"email",value:x.email,onChange:O,onFocus:u,className:"form-control",id:"contactInput","aria-describedby":"emailHelp"}),Object(j.jsx)("small",{children:n.email}),Object(j.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"I'll never share your details with anyone else."})]}),Object(j.jsx)("center",{children:Object(j.jsx)("button",{type:"submit",id:"infosubmitbtn",className:"btn",children:"Submit"})})]})})})})]})})})},m=t(88),x=t(86),h=t(42),O=t.n(h),u=t(43),v=t.n(u),p=t(44),N=t.n(p),g=t.p+"static/media/photo.f571f8d2.jpg",k=function(e){var c=e.backgroundcolor,t=e.txtColor;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{id:"home",className:"container-fluid",style:{backgroundColor:c,color:t,border:"1px solid",borderColor:c},children:Object(j.jsxs)("div",{id:"homecontent",className:"row mx-auto",children:[Object(j.jsx)("div",{className:"order-2 order-md-1 col-12 col-md-6",children:Object(j.jsxs)("div",{id:"innerhomecontent",className:"row text-center text-md-left",children:[Object(j.jsx)("div",{className:"d-none d-md-inline col-md-2 col-xl-4"}),Object(j.jsx)("div",{className:"col-12 col-md-10 col-xl-8",children:Object(j.jsxs)("div",{id:"Name",className:"mt-2 mt-md-0",children:[Object(j.jsx)("div",{id:"border"}),Object(j.jsx)("p",{id:"nametext",children:"Hello I am Aman Dalal"}),Object(j.jsx)("p",{id:"designation",children:"Front-End Developer"}),Object(j.jsx)("a",{href:"#contact",id:"contactbtnlink",children:Object(j.jsx)(x.a,{variant:"outlined",id:"contactbtn",children:"Contact Me"})}),Object(j.jsx)("a",{href:"https://instagram.com/aman_dalal111",target:"blank",children:Object(j.jsx)(m.a,{"aria-label":"Instagram",id:"profile",children:Object(j.jsx)(O.a,{})})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/aman-dalal-01533617a",target:"blank",children:Object(j.jsx)(m.a,{"aria-label":"LinkedIn",id:"profile",children:Object(j.jsx)(v.a,{})})}),Object(j.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100009207178332",target:"blank",children:Object(j.jsx)(m.a,{"aria-label":"Facebook",id:"profile",children:Object(j.jsx)(N.a,{})})})]})})]})}),Object(j.jsx)("div",{id:"imagecontainer",className:"order-1 order-md-2  col-12 col-md-6 text-center text-md-left",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-3 d-md-none",id:"homeimagegrid"}),Object(j.jsxs)("div",{className:"col-6 col-sm-6 col-md-10 col-xl-8 text-md-center",children:[Object(j.jsx)("img",{id:"homeimage",className:"img-fluid",src:g,alt:"loading error"}),Object(j.jsx)("div",{id:"imageshadow"})]}),Object(j.jsx)("div",{className:"col-3 col-sm-3 col-md-2 col-xl-4"})]})})]})})})},f=t(33),C=t.n(f),w=t(19),y=(t(61),function(e){var c=e.backgroundcolor,t=e.txtColor;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{id:"about",className:"container-fluid",style:{backgroundColor:c,color:t,border:"1px solid ".concat(c)},children:Object(j.jsxs)("div",{id:"aboutcontent",className:"row mx-auto",children:[Object(j.jsx)("div",{className:"col-12 text-center mt-2 mt-sm-4 mt-md-2",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"heading",children:"About"}),Object(j.jsx)("center",{children:Object(j.jsx)("div",{className:"headborder"})})]})}),Object(j.jsx)("div",{className:"col-12 col-md-10 col-xl-8 mx-auto mt-4",children:Object(j.jsx)("h5",{id:"abouttext",children:"Pursuing an integrated M.Tech course in IT from International Institute of Professional Studies, DAVV, Indore. Seeking  to learn about new technologies, tools and  industrial approach. I am looking for an opportunity where I can learn new skills in the real world and also I can utilize my potential towards the advancement of company."})}),Object(j.jsx)("div",{className:"col-12 mt-4",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"d-none d-md-inline col-md-1 col-xl-2"}),Object(j.jsx)("div",{className:"col-4 col-md-3 col-xl-2 text-left",children:Object(j.jsx)("p",{id:"acadyear",children:"12th"})}),Object(j.jsx)("div",{className:"col-4 col-md-2 col-xl-1 text-center ",children:Object(j.jsx)(C.a,{children:function(e){var c=e.isVisible?81.9:0;return Object(j.jsx)(w.a,{className:"marks",value:c,text:"".concat(c,"%"),styles:Object(w.b)({strokeLinecap:"rounded",textSize:"16px",pathTransitionDuration:.5,pathColor:"rgba(62, 152, 199, ".concat(c/100,")"),trailColor:"#d6d6d6",backgroundColor:"#3e98c7"})})}})}),Object(j.jsx)("div",{className:"col-4 col-md-5 col-xl-5 text-right",children:Object(j.jsx)("p",{className:"acadname",children:"The Creative Public Higher Secondary School"})}),Object(j.jsx)("div",{className:"d-none d-md-inline col-md-1 col-xl-2"})]})}),Object(j.jsx)("div",{className:"col-12 mt-4",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"d-none d-md-inline col-md-1 col-xl-2"}),Object(j.jsx)("div",{className:"col-4 col-md-3 col-xl-2 text-left",children:Object(j.jsxs)("p",{id:"acadyear",children:["1",Object(j.jsx)("sup",{children:"st"})," Year"]})}),Object(j.jsx)("div",{className:"col-4 col-md-2 col-xl-1 text-center",children:Object(j.jsx)(C.a,{children:function(e){var c=e.isVisible?8.02:0;return Object(j.jsx)(w.a,{className:"marks",value:c,maxValue:10,text:"".concat(c," CGPA"),styles:Object(w.b)({strokeLinecap:"rounded",textSize:"16px",pathTransitionDuration:.5,pathColor:"rgba(62, 152, 199, ".concat(c/10,")"),trailColor:"#d6d6d6",backgroundColor:"#3e98c7"})})}})}),Object(j.jsx)("div",{className:"col-4 col-md-5 col-xl-5 text-right",children:Object(j.jsx)("p",{className:"acadname",children:"International Institute of Professional Studies, DAVV"})}),Object(j.jsx)("div",{className:"d-none d-md-inline col-md-1 col-xl-2"})]})}),Object(j.jsx)("div",{className:"col-12 mt-4",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"d-none d-md-inline col-md-1 col-xl-2"}),Object(j.jsx)("div",{className:"col-4 col-md-3 col-xl-2 text-left",children:Object(j.jsxs)("p",{id:"acadyear",children:["2",Object(j.jsx)("sup",{children:"nd"})," Year"]})}),Object(j.jsx)("div",{className:"col-4 col-md-2 col-xl-1 text-center",children:Object(j.jsx)(C.a,{children:function(e){var c=e.isVisible?7.9:0;return Object(j.jsx)(w.a,{className:"marks",value:c,maxValue:10,text:"".concat(c," CGPA"),styles:Object(w.b)({strokeLinecap:"rounded",textSize:"16px",pathTransitionDuration:.5,pathColor:"rgba(62, 152, 199, ".concat(c/10,")"),trailColor:"#d6d6d6",backgroundColor:"#3e98c7"})})}})}),Object(j.jsx)("div",{className:"col-4 col-md-5 col-xl-5 text-right",children:Object(j.jsx)("p",{className:"acadname",children:"International Institute of Professional Studies, DAVV"})}),Object(j.jsx)("div",{className:"d-none d-md-inline col-md-1 col-xl-2"})]})})]})})})}),S=t(38),I=t.n(S),_=function(e){var c=e.backgroundcolor,t=e.txtColor;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{id:"skill",className:"container-fluid",style:{backgroundColor:c,color:t,border:"1px solid",borderColor:c},children:Object(j.jsxs)("div",{id:"skillcontent",className:"row",children:[Object(j.jsx)("div",{className:"col-12 mb-4 mt-2 mt-sm-4 mt-md-2 text-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"heading",children:"Skills"}),Object(j.jsx)("center",{children:Object(j.jsx)("div",{className:"headborder"})})]})}),Object(j.jsx)("div",{className:"d-none d-inline col-md-1 col-xl-2"}),Object(j.jsx)("div",{className:"col-6 col-md-5 col-xl-4",children:Object(j.jsx)(I.a,{left:!0,cascade:!0,children:Object(j.jsxs)("ol",{id:"skillslist",className:"text-center",children:[Object(j.jsx)("li",{children:"HTML"}),Object(j.jsx)("li",{children:"CSS"}),Object(j.jsx)("li",{children:"Javascript"}),Object(j.jsx)("li",{children:"React"})]})})}),Object(j.jsx)("div",{className:"col-6 col-md-5 col-xl-4",children:Object(j.jsx)(I.a,{left:!0,cascade:!0,children:Object(j.jsxs)("ol",{id:"skillslist",className:"text-center",children:[Object(j.jsx)("li",{children:"GitHub"}),Object(j.jsx)("li",{children:"Bootstrap"}),Object(j.jsx)("li",{children:"Core Java"})]})})}),Object(j.jsx)("div",{className:"d-none d-inline col-md-1 col-xl-2"})]})})})},F=t.p+"static/media/calculator.8115f3ef.png",T=t.p+"static/media/stopwatch.659051f9.png",V=t.p+"static/media/Working On New Projects.ae750ad5.png",A=function(e){var c=e.backgroundcolor,t=e.txtColor;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{id:"projects",className:"container-fluid",style:{backgroundColor:c,color:t,border:"1px solid",borderColor:c},children:Object(j.jsxs)("div",{id:"projectcontent",className:"row",children:[Object(j.jsx)("div",{className:"col-12 text-center mt-2 mt-sm-4 mt-md-2 mb-4",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"heading",children:"Projects"}),Object(j.jsx)("center",{children:Object(j.jsx)("div",{className:"headborder"})})]})}),Object(j.jsx)("div",{className:"d-none d-md-inline col-md-1 col-xl-2"}),Object(j.jsxs)("div",{className:"col-12 col-md-10 col-xl-8",children:[Object(j.jsxs)("div",{id:"projectscontainer",className:"carousel slide","data-ride":"carousel",children:[Object(j.jsxs)("div",{className:"carousel-inner",children:[Object(j.jsx)("div",{className:"carousel-item active",children:Object(j.jsx)("a",{className:"project_link",href:"https://ad444.github.io/calculator.github.io/",target:"_parent",alt:"loading error",children:Object(j.jsx)("img",{className:"img-fluid",src:F,alt:"Calculator_Image"})})}),Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)("a",{className:"project_link",href:"https://ad444.github.io/stopwatch.github.io/",target:"_parent",alt:"loading error",children:Object(j.jsx)("img",{className:"img-fluid",src:T,alt:"Stopwatch_Image"})})}),Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)("img",{className:"img-fluid",src:V,alt:"New York"})})]}),Object(j.jsx)("a",{className:"carousel-control-prev",href:"#projectscontainer","data-slide":"prev",children:Object(j.jsx)("span",{className:"carousel-control-prev-icon"})}),Object(j.jsx)("a",{className:"carousel-control-next",href:"#projectscontainer","data-slide":"next",children:Object(j.jsx)("span",{className:"carousel-control-next-icon"})})]}),Object(j.jsx)("p",{children:"Click on slide to see the project."})]}),Object(j.jsx)("div",{className:"d-none d-md-inline col-md-1 col-xl-2"})]})})})},D=function(e){var c=e.position,t=e.bgColor,s=e.txtColor,n=e.sbgColor,b=e.tbgColor,m=e.darkTheme,x=a.a.useState(!1),h=Object(o.a)(x,2),O=h[0],u=h[1],v=Object(l.useState)("100%"),p=Object(o.a)(v,2),N=p[0],g=p[1],k=Object(l.useState)({home:"menu_links",about:"menu_links",skill:"menu_links",projects:"menu_links",contact:"menu_links"}),f=Object(o.a)(k,2),C=f[0],w=f[1],y=function(e){console.log("changeState called");var c=e.target.name;w((function(e){return e.home="menu_links",e.about="menu_links",e.skill="menu_links",e.projects="menu_links",e.contact="menu_links",Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},c,"active_menu_links"))}))},S=function(){g("100%")};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"mySidenav",className:"sidenav",style:{left:N,backgroundColor:t},children:[Object(j.jsx)("a",{id:"closebtn",onClick:S,style:{color:s},children:"\xd7"}),Object(j.jsx)("a",{href:"#home",onClick:S,style:{color:s},children:"Home"}),Object(j.jsx)("a",{href:"#about",onClick:S,style:{color:s},children:"About"}),Object(j.jsx)("a",{href:"#skill",onClick:S,style:{color:s},children:"Skills"}),Object(j.jsx)("a",{href:"#projects",onClick:S,style:{color:s},children:"Projects"}),Object(j.jsx)("a",{href:"#contact",onClick:S,style:{color:s},children:"Contact"})]}),Object(j.jsx)("div",{id:"navbar",className:"container-fluid",style:{backgroundColor:t},children:Object(j.jsxs)("div",{id:"navigationrow",className:"row",children:[Object(j.jsx)("div",{id:"nav",className:"col-8 col-md-3",children:Object(j.jsx)("div",{id:"navbrandcontainer",children:Object(j.jsx)("a",{id:"navbrand",href:"#home",children:"Aman Dalal"})})}),Object(j.jsx)("div",{id:"menubar",className:"d-none d-md-inline col-md-9",children:Object(j.jsxs)("ul",{id:"menu",className:"float-right",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{name:"home",className:C.home,href:"#home",onClick:y,children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{name:"about",className:C.about,href:"#about",onClick:y,children:"About"},"about")}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{name:"skill",className:C.skill,href:"#skill",onClick:y,children:"Skills"},"skill")}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{name:"projects",className:C.projects,href:"#projects",onClick:y,children:"Projects"},"projects")}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{name:"contact",className:C.contact,href:"#contact",onClick:y,children:"Contact"},"contact")}),Object(j.jsx)(d.a,{className:"d-none d-md-inline",open:O,onClose:function(){u(!1)},onOpen:function(){u(!0)},title:"Switch to dark/white theme",placement:"bottom",arrow:!0,children:Object(j.jsx)("span",{id:"slidercontainer",children:Object(j.jsx)("div",{className:"align-middle",id:"togglebutton",onClick:m,style:{backgroundColor:b},children:Object(j.jsx)("div",{id:"slider",style:{left:c,backgroundColor:n}})})})})]})}),Object(j.jsx)("div",{id:"sidemenu",className:"col-4 d-md-none",children:Object(j.jsxs)("div",{id:"innersidemenu",className:"row",children:[Object(j.jsx)("div",{className:"col-7 d-md-none m-auto ",children:Object(j.jsx)("div",{id:"slidercontainer2",children:Object(j.jsx)("div",{id:"sidetogglebutton",style:{backgroundColor:b},children:Object(j.jsx)("div",{id:"slider",onClick:m,style:{left:c,backgroundColor:n}})})})}),Object(j.jsx)("div",{className:"col-5 mx-auto",children:Object(j.jsx)("div",{id:"open",onClick:function(){g("0%")},children:"\u2630"})})]})})]})})]})},H=function(){var e=Object(l.useState)("none"),c=Object(o.a)(e,2),t=c[0],a=c[1];window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?a("block"):a("none")};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{id:"rocket",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},style:{display:t},children:[Object(j.jsx)("div",{id:"rocketbody"}),Object(j.jsx)("div",{id:"rocketwingleft"}),Object(j.jsx)("div",{id:"rocketwingright"}),Object(j.jsx)("div",{id:"exhaust"}),Object(j.jsx)("div",{id:"flame"})]})})},P=function(e){var c=e.backgroundcolor,t=e.txtColor;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{id:"footer",className:"container-fluid",style:{backgroundColor:c,color:t},children:Object(j.jsx)("div",{id:"footercontent",className:"row",children:Object(j.jsx)("div",{className:"col-12 text-center",children:Object(j.jsx)("p",{id:"footerText",children:"All the \xa9 copyrights are reserved for this website."})})})})})},E=function(){var e=Object(l.useState)("100%"),c=Object(o.a)(e,2),t=c[0],a=c[1],s=Object(l.useState)("white"),n=Object(o.a)(s,2),i=n[0],r=n[1],d=Object(l.useState)("cadetblue"),m=Object(o.a)(d,2),x=m[0],h=m[1],O=Object(l.useState)("cadetblue"),u=Object(o.a)(O,2),v=u[0],p=u[1],N=Object(l.useState)("black"),g=Object(o.a)(N,2),f=g[0],C=g[1],w=Object(l.useState)("white"),S=Object(o.a)(w,2),I=S[0],F=S[1],T=Object(l.useState)("cadetblue"),V=Object(o.a)(T,2),E=V[0],z=V[1],L=Object(l.useState)("black"),Y=Object(o.a)(L,2),J=Y[0],B=Y[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(D,{position:t,bgColor:i,txtColor:x,sbgColor:v,tbgColor:f,darkTheme:function(){"50%"==t?(a("100%"),r("white"),h("cadetblue"),p("cadetblue"),C("black"),F("white"),z("cadetblue"),B("black")):(a("50%"),r("black"),h("whitesmoke"),C("white"),F("black"),z("whitesmoke"),B("whitesmoke"))}}),Object(j.jsx)(H,{}),Object(j.jsx)(k,{backgroundcolor:I,txtColor:E}),Object(j.jsx)(y,{backgroundcolor:I,txtColor:J}),Object(j.jsx)(_,{backgroundcolor:I,txtColor:J}),Object(j.jsx)(A,{backgroundcolor:I,txtColor:E}),Object(j.jsx)(b,{backgroundcolor:I,txtColor:E}),Object(j.jsx)(P,{backgroundcolor:I,txtColor:J})]})};t(65),t(66);n.a.render(Object(j.jsx)(E,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.10a211ae.chunk.js.map