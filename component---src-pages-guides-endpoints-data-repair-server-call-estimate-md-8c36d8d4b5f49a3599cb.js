(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9252],{907:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return c}});var n,r=t(2122),o=t(9756),d=(t(5007),t(4983)),i=t(9536),l=["components"],p={},m=(n="CodeBlock",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),s={_frontmatter:p},u=i.Z;function c(e){var a=e.components,t=(0,o.Z)(e,l);return(0,d.mdx)(u,(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"server-call-estimate-endpoint"},"Server Call estimate endpoint"),(0,d.mdx)("p",null,"The Server Call estimate endpoint calculates the number of Server Calls for the given Report Suite and date range provided.  It also returns a ",(0,d.mdx)("inlineCode",{parentName:"p"},"validationToken"),", which is required to use the ",(0,d.mdx)("a",{parentName:"p",href:"job.md"},"Job")," endpoint."),(0,d.mdx)("p",null,"This endpoint requires two query string parameters:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dateRangeStart")),": The start of the date range that you would like to repair."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dateRangeEnd")),": The last day of the date range that you would like to repair (inclusive). You cannot include the current month as part of your date range.")),(0,d.mdx)("p",null,"The date range is based on the time zone of the Report Suite."),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{ANALYTICS_GLOBAL_COMPANY_ID}/datarepair/v1/{RSID}/serverCallEstimate?dateRangeStart={YYYY-MM-DD}&dateRangeEnd={YYYY-MM-DD}")),(0,d.mdx)(m,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"request"},"Request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET -H "accept: application/json" \\\n    -H "x-proxy-global-company-id: {ANALYTICS_GLOBAL_COMPANY_ID}" \\\n    -H "Authorization: Bearer {ACCESS_TOKEN}" \\\n    -H "x-api-key: {API_KEY/CLIENT_ID}" \\\n    "https://analytics.adobe.io/api/{ANALYTICS_GLOBAL_COMPANY_ID}/datarepair/v1/examplersid/serverCallEstimate?dateRangeStart={YYYY-03-28}&dateRangeEnd={YYYY-03-29}"\n')),(0,d.mdx)("h4",{id:"response"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "dateRangeEnd": "YYYY-03-28",\n    "dateRangeStart": "YYYY-03-29",\n    "reportSuiteId": "examplersid",\n    "serverCallEstimate": 150000,\n    "validationToken": "gAAAAABee777APCKafp7zDu-I3kFIEq_4AoeZSIap8wt0RhhNHmVdjnlrKCjPOo_PW74uj0qvDPG9B_SiYOe4p1Rg6Um1vCpL7dLwtkBX7i8wNheVPhb2j4nAapE-k6WPVcdP7FXNdjKvogMwHBEvGpAz6uO6TmpxwZUa3LMixaeN65BOFZW3i9ZnzZ400oCHte6XAX6Mo7QF-PyZZ6D--693K0cO_oUYg=="\n}\n')),(0,d.mdx)("p",null,"Once you receive a ",(0,d.mdx)("inlineCode",{parentName:"p"},"validationToken"),", you can start formulating the call to make to the Data Repair API. See ",(0,d.mdx)("a",{parentName:"p",href:"json-body.md"},"Job definition reference")," to establish the desired data repair job variables, actions, and filters."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-data-repair-server-call-estimate-md-8c36d8d4b5f49a3599cb.js.map