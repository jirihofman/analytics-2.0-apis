"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[5645],{86838:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return x}});var a,r=t(87462),d=t(63366),l=(t(15007),t(64983)),m=t(91515),i=["components"],o={},p=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),s={_frontmatter:o},u=m.Z;function x(e){var n=e.components,t=(0,d.Z)(e,i);return(0,l.mdx)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"reporting-api"},"Reporting API"),(0,l.mdx)("p",null,"The Analytics 2.0 reporting API endpoints allow you to access reports programmatically through Adobe Developer. The endpoints use the same data and methods that are used when working with reports in the UI. By using this API, you can programmatically report to executive dashboards, custom reporting platforms, tight Experience Cloud integrations, or other options."),(0,l.mdx)("p",null,"The report endpoints described in this guide are routed through analytics.adobe.io. To use them, you will need to first create a client with access to the Adobe Analytics Reporting API. For more information, refer to ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/analytics-apis/docs/2.0/guides/"},"Getting started with the Analytics API"),"."),(0,l.mdx)("p",null,"This guide includes instructions for using the following endpoints:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"POST reports: Requests and returns report data from an existing report suite"),(0,l.mdx)("li",{parentName:"ul"},"GET top items: Returns only the specified number of items in the report, ranked by highest data values")),(0,l.mdx)("p",null,"This guide does not include descriptions for all request and response parameters for the reports endpoint. For more information on parameters included with this endpoint, see the ",(0,l.mdx)("a",{parentName:"p",href:"/analytics-2.0-apis/src/pages/apis/index.md"},"API reference"),". Also, you can copy API JSON request payloads and responses associated with any visualization directly from Analysis Workspace with the ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/cja-apis/docs/endpoints/reporting/debugger/"},"Oberon debugger tool"),". This can be a helpful aid in structuring any API reporting request from Analysis Workspace visualizations."),(0,l.mdx)("h2",{id:"request-reporting-data"},"Request reporting data"),(0,l.mdx)("p",null,"This guide includes API instructions that correspond to an example free-form table visualization in Analysis Workspace with the ",(0,l.mdx)("inlineCode",{parentName:"p"},"page")," dimension and the following metrics:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"pageviews")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"visits")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"visitors"))),(0,l.mdx)("p",null,"This example appears in Analysis Workspaces similar to the following graphic:"),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/38ae806f4e568ad2f635e552d2c8479a/5530d/free-form-example.webp 320w","/analytics-2.0-apis/static/38ae806f4e568ad2f635e552d2c8479a/0c8fb/free-form-example.webp 640w","/analytics-2.0-apis/static/38ae806f4e568ad2f635e552d2c8479a/94b1e/free-form-example.webp 1280w","/analytics-2.0-apis/static/38ae806f4e568ad2f635e552d2c8479a/fb030/free-form-example.webp 1479w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/38ae806f4e568ad2f635e552d2c8479a/dd4a7/free-form-example.png 320w","/analytics-2.0-apis/static/38ae806f4e568ad2f635e552d2c8479a/0f09e/free-form-example.png 640w","/analytics-2.0-apis/static/38ae806f4e568ad2f635e552d2c8479a/bbbf7/free-form-example.png 1280w","/analytics-2.0-apis/static/38ae806f4e568ad2f635e552d2c8479a/7d6aa/free-form-example.png 1479w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-2.0-apis/static/38ae806f4e568ad2f635e552d2c8479a/bbbf7/free-form-example.png",alt:"visualization",title:"visualization",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("p",null,"To make the request, use the following URI for your POST HTTP call:"),(0,l.mdx)("p",null,"POST ",(0,l.mdx)("inlineCode",{parentName:"p"},"https://analytics.adobe.io/api/{global-company-id}/reports")),(0,l.mdx)("p",null,"Click the ",(0,l.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a a request for the data shown in the visualization above, limited to the top ten values.\nClick the ",(0,l.mdx)("strong",{parentName:"p"},"Response")," tab to see a successful JSON response for the request."),(0,l.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h3",{id:"example-request"},"Example request"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X \'POST\' \\\n  \'https://analytics.adobe.io/api/{global-company-id}/reports\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'x-api-key: {API-key}\' \\\n  -H \'Authorization: {Bearer-token}\n  -d \'{REQUESTJSON}\n{\n    "rsid": "examplersid",\n    "globalFilters": [\n        {\n            "type": "dateRange",\n            "dateRange": "2023-07-01T00:00:00.000/2023-08-01T00:00:00.000",\n            "dateRangeId": "thisMonth"\n        }\n    ],\n    "metricContainer": {\n        "metrics": [\n            {\n                "columnId": "0",\n                "id": "metrics/pageviews"\n            },\n            {\n                "columnId": "1",\n                "id": "metrics/visits",\n                "sort": "desc"\n            },\n            {\n                "columnId": "2",\n                "id": "metrics/visitors"\n            }\n        ]\n    },\n    "dimension": "variables/page",\n    "settings": {\n        "countRepeatInstances": true,\n        "includeAnnotations": true,\n        "limit": 10,\n        "page": 0,\n        "nonesBehavior": "exclude-nones"\n    },\n    "statistics": {\n        "functions": [\n            "col-max",\n            "col-min"\n        ]\n    },\n    "capacityMetadata": {\n        "associations": [\n            {\n                "name": "applicationName",\n                "value": "Analysis Workspace UI"\n            },\n            {\n                "name": "projectId",\n                "value": "undefined"\n            },\n            {\n                "name": "projectName",\n                "value": "New project"\n            },\n            {\n                "name": "panelName",\n                "value": "Freeform table"\n            }\n        ]\n    }\n}\n')),(0,l.mdx)("h2",{id:"example-response"},"Example response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "totalPages": 877,\n    "firstPage": true,\n    "lastPage": false,\n    "numberOfElements": 10,\n    "number": 0,\n    "totalElements": 8768,\n    "columns": {\n        "dimension": {\n            "id": "variables/page",\n            "type": "string"\n        },\n        "columnIds": [\n            "0",\n            "1",\n            "2"\n        ]\n    },\n    "rows": [\n        {\n            "itemId": "3306266643",\n            "value": "home",\n            "data": [\n                219567,\n                151478,\n                151478\n            ]\n        },\n        {\n            "itemId": "2796092754",\n            "value": "category 5",\n            "data": [\n                90943,\n                71248,\n                71248\n            ]\n        },\n        {\n            "itemId": "1738577623",\n            "value": "category 2",\n            "data": [\n                84192,\n                69067,\n                69067\n            ]\n        },\n        {\n            "itemId": "3553521723",\n            "value": "category 4",\n            "data": [\n                83645,\n                67272,\n                67272\n            ]\n        },\n        {\n            "itemId": "3455114909",\n            "value": "category 3",\n            "data": [\n                80090,\n                66950,\n                66950\n            ]\n        },\n        {\n            "itemId": "545858230",\n            "value": "articles",\n            "data": [\n                84854,\n                61158,\n                61158\n            ]\n        },\n        {\n            "itemId": "894732499",\n            "value": "app: launch",\n            "data": [\n                109829,\n                59618,\n                59618\n            ]\n        },\n        {\n            "itemId": "338857740",\n            "value": "category 1",\n            "data": [\n                66972,\n                58834,\n                58834\n            ]\n        },\n        {\n            "itemId": "1284838141",\n            "value": "forum",\n            "data": [\n                82860,\n                56420,\n                56420\n            ]\n        },\n        {\n            "itemId": "773465109",\n            "value": "lead form: step 1",\n            "data": [\n                78256,\n                55995,\n                55995\n            ]\n        }\n    ],\n    "summaryData": {\n        "filteredTotals": [\n            3080619,\n            357996,\n            357996\n        ],\n        "annotations": [],\n        "totals": [\n            3080619,\n            424407,\n            424407\n        ],\n        "annotationExceptions": [],\n        "col-max": [\n            219567,\n            151478,\n            151478\n        ],\n        "col-min": [\n            1,\n            1,\n            1\n        ]\n    }\n}\n')),(0,l.mdx)("h3",{id:"example-request-details"},"Example request details"),(0,l.mdx)("p",null,"In addition to the metrics described above, the JSON body requests the following:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Time period From July 1, 2023 00:00:00.000 - August 1, 2023 00:00:00.000, using the report suite timezone")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Sort response ",(0,l.mdx)("inlineCode",{parentName:"p"},"visits")," by descending ",(0,l.mdx)("inlineCode",{parentName:"p"},"value"),", i.e. highest to lowest"))),(0,l.mdx)("h4",{id:"request-parameters"},"Request parameters"),(0,l.mdx)("p",null,"The example request includes the following parameters in the payload:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Req/Opt"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"rsid")),(0,l.mdx)("td",{parentName:"tr",align:null},"required"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"report suite ID")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"globalFilters")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"array"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,l.mdx)("inlineCode",{parentName:"td"},"type"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"dateRange"),", and ",(0,l.mdx)("inlineCode",{parentName:"td"},"dateRangeId"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"type")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The type of filter applied")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"dateRange")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The date range of the data")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"dateRangeId")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The label for the date range; e.g., ",(0,l.mdx)("inlineCode",{parentName:"td"},"ThisMonth"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"metricContainer")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,l.mdx)("inlineCode",{parentName:"td"},"metrics")," array")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"metrics")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"array"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,l.mdx)("inlineCode",{parentName:"td"},"ColumnId"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"id"),", and ",(0,l.mdx)("inlineCode",{parentName:"td"},"sort"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"columnId")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The column number in the table visualization, left to right, starting from ",(0,l.mdx)("inlineCode",{parentName:"td"},"0"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"id")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The name of the element for the column; e.g., the name of the ",(0,l.mdx)("inlineCode",{parentName:"td"},"metric"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"sort")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The sorting applied to the column data--",(0,l.mdx)("inlineCode",{parentName:"td"},"asc")," or ",(0,l.mdx)("inlineCode",{parentName:"td"},"desc"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"dimension")),(0,l.mdx)("td",{parentName:"tr",align:null},"required"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The dimension used for the report")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"settings")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"The settings requested for the reporting response, as specified by the parameters in the following five rows")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"countRepeatInstances")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether to count repeat instances of a returned metric")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"includeAnnotations")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether to include annotations in the response")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"limit")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"The maximum number of items to return in the response")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"page")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"The maximum number of pages to return in the response")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"nonesBehavior")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Excludes instances with values of ",(0,l.mdx)("inlineCode",{parentName:"td"},"0")," if set to ",(0,l.mdx)("inlineCode",{parentName:"td"},"exclude-nones"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"statistics")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains the ",(0,l.mdx)("inlineCode",{parentName:"td"},"functions")," array")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"functions")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"array"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,l.mdx)("inlineCode",{parentName:"td"},"col-max")," and ",(0,l.mdx)("inlineCode",{parentName:"td"},"col-min"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"col-max")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The column maximum")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"col-min")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The column minimum")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"capacityMetadata")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,l.mdx)("inlineCode",{parentName:"td"},"associations")," array")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"associations")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"array"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,l.mdx)("inlineCode",{parentName:"td"},"name")," and ",(0,l.mdx)("inlineCode",{parentName:"td"},"value")," parameters for each type of metadata associated with report; e.g., ",(0,l.mdx)("inlineCode",{parentName:"td"},"applicationName"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"projectId"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"projectName"),", and ",(0,l.mdx)("inlineCode",{parentName:"td"},"panelName"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"name")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The associated category type of the associated metadata")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"value")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The actual name or title specified for the metadata category in the report")))),(0,l.mdx)("h3",{id:"example-response-details"},"Example response details"),(0,l.mdx)("p",null,"The response above shows the following top ten ranked pages for this month according to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"pageViews"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"visits"),", and ",(0,l.mdx)("inlineCode",{parentName:"p"},"visitors")," metrics:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"home"),(0,l.mdx)("li",{parentName:"ol"},"category 5"),(0,l.mdx)("li",{parentName:"ol"},"category 2"),(0,l.mdx)("li",{parentName:"ol"},"category 4"),(0,l.mdx)("li",{parentName:"ol"},"category 3"),(0,l.mdx)("li",{parentName:"ol"},"articles"),(0,l.mdx)("li",{parentName:"ol"},"app: launch"),(0,l.mdx)("li",{parentName:"ol"},"category 1"),(0,l.mdx)("li",{parentName:"ol"},"forum"),(0,l.mdx)("li",{parentName:"ol"},"leaf form: step 1")),(0,l.mdx)("p",null,"Additionally, the response above shows the following:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Each ",(0,l.mdx)("inlineCode",{parentName:"p"},"row")," secion contains each report record.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"value")," property contains the dimension value.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"data")," property contains a list of metric counts for each metric requested.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"summaryData")," section contains a total of the metrics in the current report."))),(0,l.mdx)("p",null,"If you do not include  a ",(0,l.mdx)("inlineCode",{parentName:"p"},"limit")," with your POST request, you can subsequently use the GET top items endpoint--described in a following section--to have only the top specified number of items returned."),(0,l.mdx)("h4",{id:"response-parameters"},"Response parameters"),(0,l.mdx)("p",null,"The example response includes the following parameters:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"totalPages")),(0,l.mdx)("td",{parentName:"tr",align:null},"integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"The total number of pages with data")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"firstPage")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether to include the first page of results")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"lastPage")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether to include the last page of results")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"numberOfElements")),(0,l.mdx)("td",{parentName:"tr",align:null},"integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"The number of item elements in the report")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"number")),(0,l.mdx)("td",{parentName:"tr",align:null},"integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"The number of pages, starting with ",(0,l.mdx)("inlineCode",{parentName:"td"},"0"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"totalElements")),(0,l.mdx)("td",{parentName:"tr",align:null},"integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"Total number of elements in the report")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"columns")),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains column and ",(0,l.mdx)("inlineCode",{parentName:"td"},"dimension")," data")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"dimension")),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,l.mdx)("inlineCode",{parentName:"td"},"id")," and ",(0,l.mdx)("inlineCode",{parentName:"td"},"type"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"id")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Name of the dimension")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"type")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The ",(0,l.mdx)("inlineCode",{parentName:"td"},"dimension")," ID data type")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"columnIds")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The column number in the table visualization, left to right, starting from ",(0,l.mdx)("inlineCode",{parentName:"td"},"0"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"rows")),(0,l.mdx)("td",{parentName:"tr",align:null},"container"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,l.mdx)("inlineCode",{parentName:"td"},"itemId"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"value")," and ",(0,l.mdx)("inlineCode",{parentName:"td"},"data"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"itemId")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The item ID")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"value")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The name specified for the ",(0,l.mdx)("inlineCode",{parentName:"td"},"itemId")," in the report")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"data")),(0,l.mdx)("td",{parentName:"tr",align:null},"number($double)"),(0,l.mdx)("td",{parentName:"tr",align:null},"The numerical values returned for the requested items")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"summaryData")),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains the ",(0,l.mdx)("strong",{parentName:"td"},"ranked")," summary data information described in the following rows")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"filteredTotals")),(0,l.mdx)("td",{parentName:"tr",align:null},"number($double)"),(0,l.mdx)("td",{parentName:"tr",align:null},"The data totals after the specified filters are applied")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"annotations")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Annotations for the summary data, if specified")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"totals")),(0,l.mdx)("td",{parentName:"tr",align:null},"number($double)"),(0,l.mdx)("td",{parentName:"tr",align:null},"The data totals")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"annotationExceptions")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Exceptions for annotations")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"col-max")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"The column maximum")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"col-min")),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"The column minimum")))),(0,l.mdx)("h2",{id:"retrieve-top-items"},"Retrieve top items"),(0,l.mdx)("p",null,"Use the GET Top Items request to return only the top items from the previous POST body, according the maximum number of items you want returned (excluding ",(0,l.mdx)("inlineCode",{parentName:"p"},"NonValues"),"). They are returned in ranked order. You can specify the maximum with ",(0,l.mdx)("inlineCode",{parentName:"p"},"limit")," included as a query parameter in the request."),(0,l.mdx)("p",null,"To make the request, use the following URI for your GET HTTP call:"),(0,l.mdx)("p",null,"GET ",(0,l.mdx)("inlineCode",{parentName:"p"},"https://analytics.adobe.io/api/{global-company-id}/reports/topItems")),(0,l.mdx)("h3",{id:"example-request-1"},"Example request"),(0,l.mdx)("p",null,"The following example shows a request for a top items report for the POST body shown above:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X 'GET' \\\n  'https://analytics.adobe.io/api/{global-company-id}/reports/topItems?rsid=examplersid=variables%2Fpage&locale=en_US&lookupNoneValues=false&limit=10&page=0' \\\n  -H 'accept: application/json' \\\n  -H 'x-api-key: 5a8dcc2cfa71472cbfa4fb53671c45ed' \\\n  -H 'Authorization: {Bearer-token} \n")),(0,l.mdx)("p",null,"In this example, you append the previous request body to the cURL call. Note that this request specifies that ",(0,l.mdx)("inlineCode",{parentName:"p"},"NoneValues")," not be included and that the ",(0,l.mdx)("inlineCode",{parentName:"p"},"limit")," of items to return be ",(0,l.mdx)("inlineCode",{parentName:"p"},"10"),"."),(0,l.mdx)("p",null,"The response for this request is the same as the example response shown above."),(0,l.mdx)("h2",{id:"partial-responses-206-status-code"},"Partial Responses (206 Status Code)"),(0,l.mdx)("p",null,"A 206 status code indicates a partial response. This status code means that there were some columns in the reporting response that have errors. These errors can include any of the following:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Unauthorized Metric"),": User does not have access to the requested metric"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Metric Not Enabled"),": The requested metric is not enabled in this report suite"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Unauthorized Dimension"),": User does not have access to the requested dimension"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Dimension Not Enabled"),": The requested dimension is not enabled in this report suite"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Unauthorized Global Dimension"),": User does not have access to the global dimension for this request"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Global Dimension Not Enabled"),": The global dimension for this request is not enabled in this report suite"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Unexpected Number of Items"),": Anomaly Detection algorithm returned an unexpected number of anomalies"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"General Service Error"),": General Anomaly Detection service error")),(0,l.mdx)("h2",{id:"additonial-information"},"Additonial information"),(0,l.mdx)("p",null,"For more information on the Reporting API, see the following resources:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"breakdowns.md"},"Breakdown dimensions")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"examples.md"},"Example reporting API calls")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"search-filters.md"},"Search filters")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"segments.md"},"Use segments in the reporting API")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"debugger.md"},"Oberon XML and JSON debugger"))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-reports-index-md-3fbc461e5dcd5324e6f1.js.map