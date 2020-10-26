(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(1),n=a(6),b=(a(0),a(806)),c={id:"criterianode",title:"Class: CriteriaNode",sidebar_label:"CriteriaNode"},i={unversionedId:"api/classes/criterianode",id:"api/classes/criterianode",isDocsHomePage:!1,title:"Class: CriteriaNode",description:"Helper for working with deeply nested where/orderBy/having criteria. Uses composite pattern to build tree from the payload.",source:"@site/docs/api/classes/criterianode.md",slug:"/api/classes/criterianode",permalink:"/docs/next/api/classes/criterianode",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/criterianode.md",version:"current",sidebar_label:"CriteriaNode",sidebar:"API",previous:{title:"Class: ConstraintViolationException",permalink:"/docs/next/api/classes/constraintviolationexception"},next:{title:"Class: CriteriaNodeFactory",permalink:"/docs/next/api/classes/criterianodefactory"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"entityName",id:"entityname",children:[]},{value:"key",id:"key",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"parent",id:"parent",children:[]},{value:"payload",id:"payload",children:[]},{value:"prop",id:"prop",children:[]}]},{value:"Methods",id:"methods",children:[{value:"inspect.custom",id:"inspectcustom",children:[]},{value:"getPath",id:"getpath",children:[]},{value:"getPivotPath",id:"getpivotpath",children:[]},{value:"isPivotJoin",id:"ispivotjoin",children:[]},{value:"process",id:"process",children:[]},{value:"renameFieldToPK",id:"renamefieldtopk",children:[]},{value:"shouldInline",id:"shouldinline",children:[]},{value:"shouldRename",id:"shouldrename",children:[]},{value:"willAutoJoin",id:"willautojoin",children:[]},{value:"isCustomExpression",id:"iscustomexpression",children:[]}]}],p={rightToc:l};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Helper for working with deeply nested where/orderBy/having criteria. Uses composite pattern to build tree from the payload.\nAuto-joins relations and converts payload from { books: { publisher: { name: '...' } } } to { 'publisher_alias.name': '...' }"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"CriteriaNode")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/objectcriterianode"}),"ObjectCriteriaNode")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/arraycriterianode"}),"ArrayCriteriaNode")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/scalarcriterianode"}),"ScalarCriteriaNode")))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new CriteriaNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/metadatastorage"}),"MetadataStorage"),", ",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/icriterianode"}),"ICriteriaNode"),", ",Object(b.b)("inlineCode",{parentName:"p"},"key?"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"validate?"),": boolean): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/criterianode"}),"CriteriaNode")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L12"}),"packages/knex/src/query/CriteriaNode.ts:12"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/metadatastorage"}),"MetadataStorage")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"parent?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"key?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"validate")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/criterianode"}),"CriteriaNode")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"entityname"},"entityName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"entityName"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L15"}),"packages/knex/src/query/CriteriaNode.ts:15"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"key"},"key"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"key"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L17"}),"packages/knex/src/query/CriteriaNode.ts:17"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"metadata"},"metadata"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"metadata"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/metadatastorage"}),"MetadataStorage")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L14"}),"packages/knex/src/query/CriteriaNode.ts:14"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"parent"},"parent"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"parent"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L16"}),"packages/knex/src/query/CriteriaNode.ts:16"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"payload"},"payload"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"payload"),": any"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L11"}),"packages/knex/src/query/CriteriaNode.ts:11"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"prop"},"prop"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L12"}),"packages/knex/src/query/CriteriaNode.ts:12"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"inspectcustom"},"[inspect.custom]"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"[inspect.custom]"),"(): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L119"}),"packages/knex/src/query/CriteriaNode.ts:119"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getpath"},"getPath"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getPath"),"(): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L78"}),"packages/knex/src/query/CriteriaNode.ts:78"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getpivotpath"},"getPivotPath"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getPivotPath"),"(",Object(b.b)("inlineCode",{parentName:"p"},"path"),": string): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L115"}),"packages/knex/src/query/CriteriaNode.ts:115"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"path")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ispivotjoin"},"isPivotJoin"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"isPivotJoin"),"(): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L103"}),"packages/knex/src/query/CriteriaNode.ts:103"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"process"},"process"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"process"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"alias?"),": string): any"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L32"}),"packages/knex/src/query/CriteriaNode.ts:32"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"qb")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"alias?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," any"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"renamefieldtopk"},"renameFieldToPK"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"renameFieldToPK"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L64"}),"packages/knex/src/query/CriteriaNode.ts:64"))),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"qb")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"shouldinline"},"shouldInline"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"shouldInline"),"(",Object(b.b)("inlineCode",{parentName:"p"},"payload"),": any): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L36"}),"packages/knex/src/query/CriteriaNode.ts:36"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"payload")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"shouldrename"},"shouldRename"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"shouldRename"),"(",Object(b.b)("inlineCode",{parentName:"p"},"payload"),": any): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L44"}),"packages/knex/src/query/CriteriaNode.ts:44"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"payload")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"willautojoin"},"willAutoJoin"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"willAutoJoin"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"alias?"),": string): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L40"}),"packages/knex/src/query/CriteriaNode.ts:40"))),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"qb")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/iquerybuilder"}),"IQueryBuilder"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"alias?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"iscustomexpression"},"isCustomExpression"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"isCustomExpression"),"(",Object(b.b)("inlineCode",{parentName:"p"},"field"),": string): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dc81ef0/packages/knex/src/query/CriteriaNode.ts#L123"}),"packages/knex/src/query/CriteriaNode.ts:123"))),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"field")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"))}o.isMDXComponent=!0},806:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,j=m["".concat(c,".").concat(d)]||m[d]||O[d]||b;return a?n.a.createElement(j,i(i({ref:t},p),{},{components:a})):n.a.createElement(j,i({ref:t},p))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);