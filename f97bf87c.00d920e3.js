(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(2),b=a(6),n=(a(0),a(88)),l={id:"doc4",title:"Orcadefi-API",sidebar_label:"Orcadefi-API",author:"OrcaDeFi"},c={unversionedId:"doc4",id:"doc4",isDocsHomePage:!1,title:"Orcadefi-API",description:"OrcaDeFI",source:"@site/docs\\doc4.md",slug:"/doc4",permalink:"/docs/doc4",version:"current",sidebar_label:"Orcadefi-API",sidebar:"someSidebar",previous:{title:"Learn Orca",permalink:"/docs/doc0"},next:{title:"Orcadefi-SDK",permalink:"/docs/doc1"}},p=[{value:"Routes",id:"routes",children:[{value:"<strong>Get all data</strong>",id:"get-all-data",children:[]},{value:"<strong>Get Aave all data</strong>",id:"get-aave-all-data",children:[]},{value:"<strong>Get Compound all data</strong>",id:"get-compound-all-data",children:[]},{value:"<strong>Get Dydx all data</strong>",id:"get-dydx-all-data",children:[]},{value:"<strong>Get Fulcrum all data</strong>",id:"get-fulcrum-all-data",children:[]},{value:"<strong>Get Aave pair data</strong>",id:"get-aave-pair-data",children:[]},{value:"<strong>Get Compound pair data</strong>",id:"get-compound-pair-data",children:[]},{value:"<strong>Get Dydx pair data</strong>",id:"get-dydx-pair-data",children:[]},{value:"<strong>Get Fulcrum pair data</strong>",id:"get-fulcrum-pair-data",children:[]},{value:"<strong>Get Uniswap all pair price data</strong>",id:"get-uniswap-all-pair-price-data",children:[]},{value:"<strong>Get Graph pair day history data</strong>",id:"get-graph-pair-day-history-data",children:[]},{value:"<strong>Errors</strong>",id:"errors",children:[]}]}],i={rightToc:p};function o(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("img",{alt:"OrcaDeFI",src:a(94).default})),Object(n.b)("h2",{id:"routes"},"Routes"),Object(n.b)("p",null,"All routes are use the /api/v1/"),Object(n.b)("h3",{id:"get-all-data"},Object(n.b)("strong",{parentName:"h3"},"Get all data")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("h4",{id:"realtime"},"Realtime"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/realtime/all\n")),Object(n.b)("p",null,"Retrieves information from all pairs and platforms in real time by organizing information by platform"),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"token"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The key to request all data in the Orca DeFI API with expiration of 72 hours")))),Object(n.b)("h4",{id:"public"},"Public"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/public/all\n")),Object(n.b)("p",null,"Retrieves 15 minutes ago information from all pairs and platforms by organizing information by platform"),Object(n.b)("p",null,"Response data:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AaveBorrow"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Borrow % APR of the Aave platform")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AaveLend"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Lend % APR of the Aave platform")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CompoundBorrow"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Borrow % APR of the Compound platform")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CompoundLend"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Lend % APR of the Compound platform")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DydxBorrow"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Borrow % APR of the Dydx platform")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DydxLend"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Lend % APR of the Dydx platform")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FulcrumBorrow"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Borrow % APR of the Fulcrum platform")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FulcrumBorrowLend"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Lend % APR of the Fulcrum platform")))),Object(n.b)("h3",{id:"get-aave-all-data"},Object(n.b)("strong",{parentName:"h3"},"Get Aave all data")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("h4",{id:"realtime-1"},"Realtime"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/realtime/aave\n")),Object(n.b)("p",null,"Retrieves information from all pairs and platforms in real time by organizing information by platform"),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"token"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The key to request all data in the Orca DeFI API with expiration of 72 hours")))),Object(n.b)("h4",{id:"public-1"},"Public"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/public/aave\n")),Object(n.b)("p",null,"Retrieves 15 minutes ago information from all pairs in Aave platform "),Object(n.b)("p",null,"Response data:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AaveBorrow"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Borrow % APR of the Aave platform")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AaveLend"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Lend % APR of the Aave platform")))),Object(n.b)("h3",{id:"get-compound-all-data"},Object(n.b)("strong",{parentName:"h3"},"Get Compound all data")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("h4",{id:"realtime-2"},"Realtime"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/realtime/compound\n")),Object(n.b)("p",null,"Retrieves information from all pairs and platforms in real time by organizing information by platform"),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"token"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The key to request all data in the Orca DeFI API with expiration of 72 hours")))),Object(n.b)("h4",{id:"public-2"},"Public"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/public/aave\n")),Object(n.b)("p",null,"Retrieves 15 minutes ago information from all pairs in Compound platform"),Object(n.b)("p",null,"Response data:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CompoundBorrow"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Borrow % APR of the Compound platform")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CompoundLend"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Lend % APR of the Compound platform")))),Object(n.b)("h3",{id:"get-dydx-all-data"},Object(n.b)("strong",{parentName:"h3"},"Get Dydx all data")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("h4",{id:"realtime-3"},"Realtime"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/realtime/dydx\n")),Object(n.b)("p",null,"Retrieves information from all pairs and platforms in real time by organizing information by platform"),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"token"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The key to request all data in the Orca DeFI API with expiration of 72 hours")))),Object(n.b)("h4",{id:"public-3"},"Public"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/public/dydx\n")),Object(n.b)("p",null,"Retrieves 15 minutes ago information from all pairs in Dydx platform"),Object(n.b)("p",null,"Response data:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DydxBorrow"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Borrow % APR of the Dydx platform")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DydxLend"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Lend % APR of the Dydx platform")))),Object(n.b)("h3",{id:"get-fulcrum-all-data"},Object(n.b)("strong",{parentName:"h3"},"Get Fulcrum all data")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("h4",{id:"realtime-4"},"Realtime"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/realtime/fulcrum\n")),Object(n.b)("p",null,"Retrieves information from all pairs and platforms in real time by organizing information by platform"),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"token"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The key to request all data in the Orca DeFI API with expiration of 72 hours")))),Object(n.b)("h4",{id:"public-4"},"Public"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/public/fulcrum\n")),Object(n.b)("p",null,"Retrieves 15 minutes ago information from all pairs in Fulcrum platform"),Object(n.b)("p",null,"Request data:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FulcrumBorrow"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Borrow % APR of the Fulcrum platform")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FulcrumBorrowLend"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Lend % APR of the Fulcrum platform")))),Object(n.b)("h3",{id:"get-aave-pair-data"},Object(n.b)("strong",{parentName:"h3"},"Get Aave pair data")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("h4",{id:"realtime-5"},"Realtime"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/realtime/aave/lend/\nhttp://orcadefi.com/api/v1/realtime/aave/borrow/\n")),Object(n.b)("p",null,"Retrieves information from one pair in real time by platform"),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"token"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The key to request all data in the Orca DeFI API with expiration of 72 hours")))),Object(n.b)("h4",{id:"public-5"},"Public"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/public/aave/lend/\nhttp://orcadefi.com/api/v1/public/aave/borrow/\n")),Object(n.b)("p",null,"Retrieves 15 minutes ago information from one pair by platform"),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pair"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The pair of the Aave platform")))),Object(n.b)("p",null,"Request data:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pair"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pair lend/borrow data of the Aave platform")))),Object(n.b)("h3",{id:"get-compound-pair-data"},Object(n.b)("strong",{parentName:"h3"},"Get Compound pair data")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("h4",{id:"realtime-6"},"Realtime"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/realtime/compound/lend/\nhttp://orcadefi.com/api/v1/realtime/compound/borrow/\n")),Object(n.b)("p",null,"Retrieves information from one pair in real time by platform"),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"token"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The key to request all data in the Orca DeFI API with expiration of 72 hours")))),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pair"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The pair of the Compound platform")))),Object(n.b)("h4",{id:"public-6"},"Public"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/public/compound/lend/\nhttp://orcadefi.com/api/v1/public/compound/borrow/\n")),Object(n.b)("p",null,"Retrieves 15 minutes ago information from one pair by platform"),Object(n.b)("p",null,"Response data:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pair"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pair lend/borrow data of the Compound platform")))),Object(n.b)("h3",{id:"get-dydx-pair-data"},Object(n.b)("strong",{parentName:"h3"},"Get Dydx pair data")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("h4",{id:"realtime-7"},"Realtime"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/realtime/dydx/lend/\nhttp://orcadefi.com/api/v1/realtime/dydx/borrow/\n")),Object(n.b)("p",null,"Retrieves information from one pair in real time by platform"),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"token"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The key to request all data in the Orca DeFI API with expiration of 72 hours")))),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pair"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The pair of the Dydx platform")))),Object(n.b)("h4",{id:"public-7"},"Public"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/public/dydx/lend/\nhttp://orcadefi.com/api/v1/public/dydx/borrow/\n")),Object(n.b)("p",null,"Retrieves 15 minutes ago information from one pair by platform"),Object(n.b)("p",null,"Response data:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pair"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pair lend/borrow data of the Dydx platform")))),Object(n.b)("h3",{id:"get-fulcrum-pair-data"},Object(n.b)("strong",{parentName:"h3"},"Get Fulcrum pair data")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("h4",{id:"realtime-8"},"Realtime"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/realtime/fulcrum/lend/\nhttp://orcadefi.com/api/v1/realtime/fulcrum/borrow/\n")),Object(n.b)("p",null,"Retrieves information from one pair in real time by platform"),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"token"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The key to request all data in the Orca DeFI API with expiration of 72 hours")))),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pair"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The pair of the Fulcrum platform")))),Object(n.b)("h4",{id:"public-8"},"Public"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/public/fulcrum/lend/\nhttp://orcadefi.com/api/v1/public/fulcrum/borrow/\n")),Object(n.b)("p",null,"Retrieves 15 minutes ago information from one pair by platform"),Object(n.b)("p",null,"Response data:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pair"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pair lend/borrow data of the Fulcrum platform")))),Object(n.b)("h3",{id:"get-uniswap-all-pair-price-data"},Object(n.b)("strong",{parentName:"h3"},"Get Uniswap all pair price data")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("h4",{id:"realtime-9"},"Realtime"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/realtime/price\n")),Object(n.b)("p",null,"Retrieves price data from all pairs in Uniswap platform in real time by organizing information by pair."),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"token"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The key to request all data in the Orca DeFI API with expiration of 72 hours")))),Object(n.b)("h4",{id:"public-9"},"Public"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/public/price\n")),Object(n.b)("p",null,"Retrieves 15 minutes ago price data from all pairs in Uniswap platform by organizing information by pair."),Object(n.b)("p",null,"Response data:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PairPrices"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs data from Uniswap in ETH value")))),Object(n.b)("h3",{id:"get-graph-pair-day-history-data"},Object(n.b)("strong",{parentName:"h3"},"Get Graph pair day history data")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("h4",{id:"realtime-10"},"Realtime"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/realtime/graph\n")),Object(n.b)("p",null,"Retrieves the graph data from all pairs in real time by organizing information by pair."),Object(n.b)("p",null,"Request parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"token"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The key to request all data in the Orca DeFI API with expiration of 72 hours")))),Object(n.b)("h4",{id:"public-10"},"Public"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"http://orcadefi.com/api/v1/public/graph\n")),Object(n.b)("p",null,"Retrieves 15 minutes ago graph data from all pairs in platform by organizing information by pair."),Object(n.b)("p",null,"Response data:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphData"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All pairs graph data from OrcaDeFi in %")))),Object(n.b)("h3",{id:"errors"},Object(n.b)("strong",{parentName:"h3"},"Errors")),Object(n.b)("p",null,"Method: ",Object(n.b)("em",{parentName:"p"},"GET")),Object(n.b)("p",null,"Response errors:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"message"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Unauthorized"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Invalid token or expired token")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Not Found"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Invalid route or malformed route")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Method Not Allowed"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Invalid http method or invalid request method")))))}o.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),o=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=o(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),O=o(a),j=r,d=O["".concat(l,".").concat(j)]||O[j]||m[j]||n;return a?b.a.createElement(d,c(c({ref:t},i),{},{components:a})):b.a.createElement(d,c({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=j;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<n;i++)l[i]=a[i];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/bg-orca-2dcd8e6d072828f195af30e70bc0063e.png"}}]);