(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6087],{93470:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return s}});var a=n(22122),d=n(19756),r=(n(15007),n(64983)),i=n(99536),m=["components"],l={},o={_frontmatter:l},p=i.Z;function s(e){var t=e.components,n=(0,d.Z)(e,m);return(0,r.mdx)(p,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"vrs-json-body-reference"},"VRS JSON body reference"),(0,r.mdx)("p",null,"Use the following object parameters when creating or editing virtual report suites. See also ",(0,r.mdx)("a",{parentName:"p",href:"examples.md"},"Examples")," for context around how to use them."),(0,r.mdx)("h2",{id:"virtualreportsuite"},"VirtualReportSuite"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"User defined friendly name of the virtual report suite")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"id")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The unique id for the virtual report suite. System generated.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"rsid")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Same as ",(0,r.mdx)("inlineCode",{parentName:"td"},"id"),". Included so normal and virtual report suites can both use this ",(0,r.mdx)("inlineCode",{parentName:"td"},"rsid")," attribute. System generated.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"parentRsid")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The id of the report suite from which this virtual report suite inherits data and settings (The Analytics UI calls this ",(0,r.mdx)("inlineCode",{parentName:"td"},"Source"),")")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"parentRsidName")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Friendly name of the parent report suite")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"description")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Description of the purpose of the virtual report suite")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"timezone")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"integer")),(0,r.mdx)("td",{parentName:"tr",align:null},"Timezone ID. Use the ",(0,r.mdx)("inlineCode",{parentName:"td"},"reportsuites/reportsuites/timezones")," endpoint to retrieve a lookup of values. Valid integers range from ",(0,r.mdx)("inlineCode",{parentName:"td"},"0"),"-",(0,r.mdx)("inlineCode",{parentName:"td"},"74"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"currentTimezoneOffset")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"integer")),(0,r.mdx)("td",{parentName:"tr",align:null},"Timezone offset from GMT")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"timezoneZoneinfo")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Friendly timezone name")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"segmentList")),(0,r.mdx)("td",{parentName:"tr",align:null},"Array of ",(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"List of segment ids to be used to filter the data for this virtual report suite. Retrieve segment IDs using the ",(0,r.mdx)("a",{parentName:"td",href:"../segments/index.md"},"Segments API"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"globalCompanyKey")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The global company id of the Analytics Company that owns the virtual report suite")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"modified")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")," (date-time)"),(0,r.mdx)("td",{parentName:"tr",align:null},"The date and time the virtual report suite was last modified. System generated.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"dataCurrentAsOf")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")," (date-time)"),(0,r.mdx)("td",{parentName:"tr",align:null},"Timestamp of the most recent data that is processed and ready for reporting for this report suite. System generated.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"type")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The virtual report suite type. System generated.",(0,r.mdx)("br",null),(0,r.mdx)("strong",{parentName:"td"},"advancedVrs"),": A VRS is advanced if ",(0,r.mdx)("inlineCode",{parentName:"td"},"dataSchema")," is ",(0,r.mdx)("inlineCode",{parentName:"td"},"CacheAndMid")," or ",(0,r.mdx)("inlineCode",{parentName:"td"},"Stitched"),".",(0,r.mdx)("br",null),(0,r.mdx)("strong",{parentName:"td"},"vrs"),": A VRS is basic if ",(0,r.mdx)("inlineCode",{parentName:"td"},"dataSchema")," is set to ",(0,r.mdx)("inlineCode",{parentName:"td"},"Cache"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"dataSchema")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Defines the data schema type for the virtual report suite.",(0,r.mdx)("br",null),(0,r.mdx)("strong",{parentName:"td"},"Cache"),": Basic ",(0,r.mdx)("inlineCode",{parentName:"td"},"dataSchema")," type. Does not allow setting ",(0,r.mdx)("inlineCode",{parentName:"td"},"sessionDefinition")," or CDA.",(0,r.mdx)("br",null),(0,r.mdx)("strong",{parentName:"td"},"CacheAndMid"),": Must use this ",(0,r.mdx)("inlineCode",{parentName:"td"},"dataSchema")," if ",(0,r.mdx)("inlineCode",{parentName:"td"},"sessionDefinition")," is provided.",(0,r.mdx)("br",null),(0,r.mdx)("strong",{parentName:"td"},"Stitched"),": Enables ",(0,r.mdx)("a",{parentName:"td",href:"https://docs.adobe.com/content/help/en/analytics/components/cda/cda-home.html"},"Cross-Device Analytics"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"internal")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,r.mdx)("td",{parentName:"tr",align:null},"Adobe-use only")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"isDeleted")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,r.mdx)("td",{parentName:"tr",align:null},"Indicates if the virtual report suite has been deleted. Virtual report suites are not actually removed from the database. This flag is set to true instead.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"curationEnabled")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,r.mdx)("td",{parentName:"tr",align:null},"Indicates if curation is enabled for the virtual report suite.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"curatedComponents")),(0,r.mdx)("td",{parentName:"tr",align:null},"Array of ",(0,r.mdx)("a",{parentName:"td",href:"#curatedcomponent"},"CuratedComponent")),(0,r.mdx)("td",{parentName:"tr",align:null},"List of components to curate.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"sessionDefinition")),(0,r.mdx)("td",{parentName:"tr",align:null},"Array of ",(0,r.mdx)("a",{parentName:"td",href:"#sessiondefinitionoptions"},"SessionDefinitionOptions")),(0,r.mdx)("td",{parentName:"tr",align:null},"Used to enable report time processing and change session timeout rules (The Analytics UI calls this ",(0,r.mdx)("inlineCode",{parentName:"td"},"Visit Definition"),")")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"owner")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#owner"},"Owner")),(0,r.mdx)("td",{parentName:"tr",align:null},"Information about the Analytics user that owns the virtual report suite.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"compatibility")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#vrscompatibility"},"VrsCompatibility")),(0,r.mdx)("td",{parentName:"tr",align:null},"Contains information about if the virtual report suite definition is valid and the products with which it is compatible.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"backgroundSessionsEnabled")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,r.mdx)("td",{parentName:"tr",align:null},"Indicates if background hits will start a new visit. See ",(0,r.mdx)("a",{parentName:"td",href:"https://docs.adobe.com/content/help/en/analytics/components/virtual-report-suites/vrs-mobile-visit-processing.html#background-hit-processing"},"Context-aware sessions - Background Hit Processing")," for more information.")))),(0,r.mdx)("h2",{id:"curatedcomponent"},"CuratedComponent"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"componentId")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The id of the component to curate. Depends on ",(0,r.mdx)("inlineCode",{parentName:"td"},"componentType"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"componentType")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The type of component to curate. dimension, metric")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"curatedName")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The curated name of the component. User defined")))),(0,r.mdx)("h2",{id:"sessiondefinitionoptions"},"SessionDefinitionOptions"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"func")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Session definition option type.",(0,r.mdx)("br",null),(0,r.mdx)("strong",{parentName:"td"},"inactivity"),": Defines the amount of inactivity a unique visitor must have before a new visit is automatically started.",(0,r.mdx)("br",null),(0,r.mdx)("strong",{parentName:"td"},"beforeEvents"),": A new session starts when any of these events are fired regardless of whether a session has timed out. The new session that is created includes the event that started it.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"numPeriods")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"integer")),(0,r.mdx)("td",{parentName:"tr",align:null},"Number of periods of the selected granularity before a new visit is started when using ",(0,r.mdx)("inlineCode",{parentName:"td"},"inactivity")," type.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"granularity")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Granularity selection when using ",(0,r.mdx)("inlineCode",{parentName:"td"},"inactivity")," type. Valid values include ",(0,r.mdx)("inlineCode",{parentName:"td"},"minute"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"hour"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"day"),", or ",(0,r.mdx)("inlineCode",{parentName:"td"},"week"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"events")),(0,r.mdx)("td",{parentName:"tr",align:null},"Array of ",(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"List of metrics ids (events) that start a new session when using ",(0,r.mdx)("inlineCode",{parentName:"td"},"beforeEvents")," type. For example, ",(0,r.mdx)("inlineCode",{parentName:"td"},"metrics/orders"))))),(0,r.mdx)("h2",{id:"owner"},"Owner"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"id")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"integer")),(0,r.mdx)("td",{parentName:"tr",align:null},"Analytics integer id for the user. System generated.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Analytics user friendly name.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"login")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Analytics login name.")))),(0,r.mdx)("h2",{id:"vrscompatibility"},"VrsCompatibility"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"valid")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,r.mdx)("td",{parentName:"tr",align:null},"Indicates if the virtual report suite definition is valid.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"validator_version")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Virtual report suite validator version")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"message")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Message with more information about what is wrong with the virtual report suite definition if it is invalid")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"supported_products")),(0,r.mdx)("td",{parentName:"tr",align:null},"Array of ",(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"List of Analytics products with which the virtual report suite is compatible. Valid values include ",(0,r.mdx)("inlineCode",{parentName:"td"},"analysis_workspace"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"reports_and_analytics"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"ad_hoc_analysis"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"report_builder"),", and ",(0,r.mdx)("inlineCode",{parentName:"td"},"data_warehouse"),".")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-vrs-reference-md-d2aaa0428416bca2fc7d.js.map