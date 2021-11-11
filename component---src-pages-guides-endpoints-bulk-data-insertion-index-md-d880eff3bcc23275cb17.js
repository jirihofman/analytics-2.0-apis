(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9762],{94693:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return p}});var n=a(22122),i=a(19756),r=(a(15007),a(64983)),l=a(99536),d=["components"],o={},m={_frontmatter:o},s=l.Z;function p(e){var t=e.components,a=(0,i.Z)(e,d);return(0,r.mdx)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"bulk-data-insertion-api"},"Bulk Data Insertion API"),(0,r.mdx)("p",null,"The Bulk Data Insertion API (BDIA) is an Adobe Analytics capability allowing customers to upload server call data in batches of files as opposed to using client-side JavaScript (e.g., tags on web pages or other APIs embedded in application code). The server calls in these batch files can be either current (live) data or historical data. The concept is similar to the ",(0,r.mdx)("a",{parentName:"p",href:"/analytics-2.0-apis/src/pages/1.4/endpoints/data-insertion/index.md"},"Data Insertion API")," available in the 1.4 API. It provides a productized system that scales, handles errors, and addresses the finer details of inserting data into Adobe Analytics."),(0,r.mdx)("p",null,"Bulk Insertion solves several problems for a variety of use cases. Some use case examples include:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"You want to ingest historical data from a previous analytics system."),(0,r.mdx)("li",{parentName:"ul"},"You have an internal analytics collection system that makes it unfeasible to use client-side AppMeasurement. You can use Extract-Transform-Load (ETL) processes to put the data into batch files, then use BDIA to upload them to Adobe Analytics."),(0,r.mdx)("li",{parentName:"ul"},"You collect data from devices that have only intermittent connectivity to the internet. These devices store up the interactions until they receive a connection. You can upload the historical data all at once via BDIA.")),(0,r.mdx)("p",null,"When using BDIA, server calls are sent in batch files. These files are in a specific CSV format where each row of the file defines the details of a server call. Each row, or server call, must specify an identifier for a visitor as well as a timestamp for when the interaction occurred. The server calls must be ordered chronologically by their timestamps, from earliest to latest, in the batch files (this is a requirement of the underlying Analytics system). Each batch file must also be compressed."),(0,r.mdx)("h2",{id:"requirements"},"Requirements"),(0,r.mdx)("p",null,"The Bulk Data Insertion API has many requirements that your organization must meet. Requirements include file formatting, compression, specific inclusion of certain columns, and hit order."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Batch files are CSV files that conform to the ",(0,r.mdx)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc4180"},"RFC-4180 standard")," with one exception: empty lines are ignored."),(0,r.mdx)("li",{parentName:"ul"},"Each file consists of a header row (the first row in the file) and subsequent data rows. Rows appear on lines, terminated by a line break (CRLF or LF)."),(0,r.mdx)("li",{parentName:"ul"},"The last field in a row must not be followed by a comma."),(0,r.mdx)("li",{parentName:"ul"},"Rows are fields separated by commas. See the ",(0,r.mdx)("a",{parentName:"li",href:"faq.md"},"FAQ")," on how to pass commas as part of a value."),(0,r.mdx)("li",{parentName:"ul"},"Rows must have the same number of columns defined as the header row. Empty fields are allowed by putting two commas or an empty string. For example, ",(0,r.mdx)("inlineCode",{parentName:"li"},",,")," or ",(0,r.mdx)("inlineCode",{parentName:"li"},',"",'),"."),(0,r.mdx)("li",{parentName:"ul"},"A file must contain ALL of the following columns:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"reportSuiteID")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"timestamp")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"userAgent")))),(0,r.mdx)("li",{parentName:"ul"},"A file must also contain at least one of the following columns:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"marketingCloudVisitorID")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"IPAddress")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].id")," with ",(0,r.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].isMCSeed")," set to ",(0,r.mdx)("inlineCode",{parentName:"li"},"true")))),(0,r.mdx)("li",{parentName:"ul"},"A file must also contain at least one of the following columns:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"pageURL")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"pageName")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"pe")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"queryString")," (NOTE: If only ",(0,r.mdx)("inlineCode",{parentName:"li"},"queryString")," is used, at least one of ",(0,r.mdx)("inlineCode",{parentName:"li"},"pageURL"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"pageName"),", or ",(0,r.mdx)("inlineCode",{parentName:"li"},"pe")," must be set in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"queryString")," as a query parameter.)"))),(0,r.mdx)("li",{parentName:"ul"},"All rows in a batch file for any given visitor must be sorted in chronological order by timestamp, from earliest to latest. This requirement ensures that data is ingested in the correct order. Sorting is crucial for proper attribution and analyzing visitor behavior. Adobe does not guarantee the integrity of data processed by BDIA if rows are not arranged in chronological order per visitor.")),(0,r.mdx)("h2",{id:"data-collection-method"},"Data collection method"),(0,r.mdx)("p",null,"The Bulk Data Insertion API allows two methods for data collection. Pick the file format that works best for your organization's workflow."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Based on individual columns"),": Each column contains a dimension, and each row contains the desired value for that hit."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Based on query string"),": Place all desired data into the ",(0,r.mdx)("inlineCode",{parentName:"li"},"QueryString")," column. This method is ideal when you're working with image requests generated by AppMeasurement or have an existing workflow that generates a query string. Note that the columns listed above are still required.")),(0,r.mdx)("p",null,"Most variables have options for either an individual column or a query string parameter. You can use any combination of these two methods. ",(0,r.mdx)("strong",{parentName:"p"},"If a given variable contains data in both an individual column and its query string parameter, the individual column overwrites the query string value.")),(0,r.mdx)("p",null,"See the ",(0,r.mdx)("a",{parentName:"p",href:"column-reference.md"},"Column reference")," for details around header names and query string parameters that you can use for each variable."),(0,r.mdx)("h2",{id:"endpoint-url"},"Endpoint URL"),(0,r.mdx)("p",null,"Regardless of which data center your report suite resides in, you can direct BDIA calls to a single global host name. However, if you are legally required to have your data processed in a specific part of the world, Adobe offers direct access to regional hosts to ensure your data is processed in the correct location."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Global (Auto-routing)"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"POST https://analytics-collection.adobe.io/aa/collect/v1/events")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"US Processing (Regional)"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"POST https://analytics-collection-va7.adobe.io/aa/collect/v1/events")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"European Processing (Regional)"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"POST https://analytics-collection-nld2.adobe.io/aa/collect/v1/events"))),(0,r.mdx)("p",null,"The following headers are required in the API call:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Authorization"),": Format is ",(0,r.mdx)("inlineCode",{parentName:"li"},"Bearer <IMS_ACCESS_TOKEN>"),". See ",(0,r.mdx)("a",{parentName:"li",href:"../../getting-started/index.md"},"Getting started")," for authentication details."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"x-adobe-vgid"),": Visitor Group ID. A visitor group represents the name of the processing pipeline to use when processing the file. The header value can be any name you choose. Files uploaded to different visitor groups should have disjoint visitor IDs. See ",(0,r.mdx)("a",{parentName:"li",href:"visitor-groups.md"},"Visitor Groups")," for more information."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"x-api-key"),": Client ID issued from the Adobe I/O console. See ",(0,r.mdx)("a",{parentName:"li",href:"../../getting-started/index.md"},"Getting started")," for more information."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"x-adobe-idempotency-key"),": ",(0,r.mdx)("em",{parentName:"li"},"OPTIONAL")," - File ID. Every file ingest transaction receives a GUID to uniquely identify that ingest event. You can use this header to pass in your own identifier with each request. If an API call does not include this header, Adobe automatically generates its own and returns it with the response.")),(0,r.mdx)("h2",{id:"response-details"},"Response details"),(0,r.mdx)("p",null,"With a file ingest POST request, a file object is returned in the response. That file can contain the following fields:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field"),(0,r.mdx)("th",{parentName:"tr",align:null},"Datatype"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"file_id")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Unique identifier for the file upload transaction")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"visitor_group")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of the visitor group submitted in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"x-adobe-vgid")," header field")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"size")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"long")),(0,r.mdx)("td",{parentName:"tr",align:null},"Size, in bytes, of the uploaded file")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"received_date")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"long")),(0,r.mdx)("td",{parentName:"tr",align:null},"Timestamp when file upload was received in Unix time.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"rows")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"int")),(0,r.mdx)("td",{parentName:"tr",align:null},"The number of rows contained in the file")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"invalid_rows")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"int")),(0,r.mdx)("td",{parentName:"tr",align:null},"The number of invalid rows identified in the file")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"upload_name")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of the file submitted with the request")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"status")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Long form of ",(0,r.mdx)("inlineCode",{parentName:"td"},"status_code"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"status_code")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"UPLOADED")," or ",(0,r.mdx)("inlineCode",{parentName:"td"},"REJECTED"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"processing_log")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Notes about any issues found during processing. Up to 10 rows of each error type will be explicitly mentioned, summarized results for more than 10.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"idempotency_key")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"If submitted as a header value, then this is the submitted value, else it is the internally generated ",(0,r.mdx)("inlineCode",{parentName:"td"},"file_id"))))),(0,r.mdx)("h2",{id:"sample-call"},"Sample Call"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "x-adobe-vgid:prod-18" -H "Authorization: Bearer <IMS_ACCESS_TOKEN>" -H "x-api-key: <CLIENT_ID>" -F file=@/tmp/ingest_file.gz "https://analytics-collection.adobe.io/aa/collect/v1/events"\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-bulk-data-insertion-index-md-d880eff3bcc23275cb17.js.map