(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),i=(n(0),n(807)),o={title:"Advanced Configuration"},l={unversionedId:"configuration",id:"version-3.6/configuration",isDocsHomePage:!1,title:"Advanced Configuration",description:"Entity Discovery",source:"@site/versioned_docs/version-3.6/configuration.md",slug:"/configuration",permalink:"/docs/3.6/configuration",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/configuration.md",version:"3.6",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1605282066,sidebar:"version-3.6/docs",previous:{title:"Read Replica Connections",permalink:"/docs/3.6/read-connections"},next:{title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",permalink:"/docs/3.6/usage-with-sql"}},c=[{value:"Entity Discovery",id:"entity-discovery",children:[]},{value:"Driver",id:"driver",children:[]},{value:"Connection",id:"connection",children:[]},{value:"Auto-flush",id:"auto-flush",children:[]},{value:"Naming Strategy",id:"naming-strategy",children:[]},{value:"Auto-join of 1:1 owners",id:"auto-join-of-11-owners",children:[]},{value:"Propagation of 1:1 and m:1 owners",id:"propagation-of-11-and-m1-owners",children:[]},{value:"Forcing UTC Timezone",id:"forcing-utc-timezone",children:[]},{value:"Custom Hydrator",id:"custom-hydrator",children:[]},{value:"Custom Repository",id:"custom-repository",children:[]},{value:"Strict Mode",id:"strict-mode",children:[]},{value:"Debugging &amp; Logging",id:"debugging--logging",children:[]},{value:"Custom Fail Handler",id:"custom-fail-handler",children:[]},{value:"Migrations",id:"migrations",children:[]},{value:"Caching",id:"caching",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"entity-discovery"},"Entity Discovery"),Object(i.b)("p",null,"You can either provide array of entity instances via ",Object(i.b)("inlineCode",{parentName:"p"},"entities"),", or let the ORM look up your\nentities in selected folders. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  entities: [Author, Book, Publisher, BookTag],\n});\n")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"entitiesDirs"),", you can optionally provide also set of directories with TS source files,\nthat will be used to look up missing types (see more at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/metadata-providers"}),"Metadata Providers"),")."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"entitiesDirsTs")," option is used only with the default ",Object(i.b)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),". By default, all your\nsource files will be scanned, based on your ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.json"),". ")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  entitiesDirs: ['./dist/modules/users/entities', './dist/modules/projects/entities'],\n  // optional, more specific paths will speed up the discovery\n  entitiesDirsTs: ['./src/modules/users/entities', './src/modules/projects/entities'],\n  // optionally you can override the base directory (defaults to `process.cwd()`)\n  baseDir: process.cwd(),\n});\n")),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider")," is used that analyses your entity source files. You can\nuse ",Object(i.b)("inlineCode",{parentName:"p"},"ReflectMetadataProvider")," if you do not want the source file analyses to happen.\nIf you aim to use plain JavaScript instead of TypeScript, use the ",Object(i.b)("inlineCode",{parentName:"p"},"JavaScriptMetadataProvider"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also implement your own metadata provider and use it instead. To do so, extend the\n",Object(i.b)("inlineCode",{parentName:"p"},"MetadataProvider")," class.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  metadataProvider: ReflectMetadataProvider,\n});\n")),Object(i.b)("p",null,"There are also some additional options how you can adjust the discovery process:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  discovery: {\n    warnWhenNoEntities: false, // by default, discovery throws when no entity is processed\n    requireEntitiesArray: true, // force usage of `entities` instead of `entitiesDirs`\n    alwaysAnalyseProperties: false, // do not analyse properties when not needed (with ts-morph)\n\n    // you can explicitly specify the path to your tsconfig.json (used only when `entitiesDirsTs` is not provided)\n    tsConfigPath: string,\n  },\n});\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you disable ",Object(i.b)("inlineCode",{parentName:"p"},"discovery.alwaysAnalyseProperties")," option, you will need to explicitly\nprovide ",Object(i.b)("inlineCode",{parentName:"p"},"nullable")," and ",Object(i.b)("inlineCode",{parentName:"p"},"wrappedReference")," parameters (where applicable).")),Object(i.b)("p",null,"Read more about this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/metadata-providers"}),"Metadata Providers")," sections."),Object(i.b)("h2",{id:"driver"},"Driver"),Object(i.b)("p",null,"To select driver, you can either use ",Object(i.b)("inlineCode",{parentName:"p"},"type")," option, or provide the driver class reference."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"driver name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"dependency"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"note"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mongo")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"MongoDriver")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mongodb^3.3.4")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"default driver")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mysql")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"MySqlDriver")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mysql2^2.0.0")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"compatible with MariaDB")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mariadb")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"MariaDbDriver")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mariadb^2.0.0")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"compatible with MySQL")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"postgresql")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"PostgreSqlDriver")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"pg^7.0.0")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"sqlite")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"SqliteDriver")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"sqlite3^4.0.0")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Driver and connection implementations are not directly exported from ",Object(i.b)("inlineCode",{parentName:"p"},"mikro-orm")," module.\nYou can import them from ",Object(i.b)("inlineCode",{parentName:"p"},"mikro-orm/dist/drivers"),".")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can pass additional options to the underlying driver (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"mysql2"),") via ",Object(i.b)("inlineCode",{parentName:"p"},"driverOptions"),".\nThe object will be deeply merged, overriding all internally used options.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { MySqlDriver } from 'mikro-orm/dist/drivers/MySqlDriver';\n\nMikroORM.init({\n  driver: MySqlDriver,\n  driverOptions: { connection: { timezone: '+02:00' } },\n});\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"From v3.5.1 you can also set the timezone directly in the ORM configuration:"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  type: 'mysql',\n  timezone: '+02:00',\n});\n"))),Object(i.b)("h2",{id:"connection"},"Connection"),Object(i.b)("p",null,"Each platform (driver) provides default connection string, you can override it as a whole\nthrough ",Object(i.b)("inlineCode",{parentName:"p"},"clientUrl"),", or partially through one of following options:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface ConnectionOptions {\n  dbName?: string;\n  name?: string; // for logging only (when replicas are used)\n  clientUrl?: string;\n  host?: string;\n  port?: number;\n  user?: string;\n  password?: string;\n  multipleStatements?: boolean; // for mysql driver\n  pool?: PoolConfig; // provided by `knex`\n}\n")),Object(i.b)("p",null,"Following table shows default client connection strings:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"default connection url"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mongo")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mongodb://127.0.0.1:27017"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mysql")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mysql://root@127.0.0.1:3306"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mariadb")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mysql://root@127.0.0.1:3306"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"postgresql")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"postgresql://postgres@127.0.0.1:5432"))))),Object(i.b)("p",null,"To set up read replicas, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"replicas")," option. You can provide only those parts of the\n",Object(i.b)("inlineCode",{parentName:"p"},"ConnectionOptions")," interface, they will be used to override the ",Object(i.b)("inlineCode",{parentName:"p"},"master")," connection options."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  type: 'mysql',\n  dbName: 'my_db_name',\n  user: 'write-user',\n  host: 'master.db.example.com',\n  port: 3306,\n  replicas: [\n    { user: 'read-user-1', host: 'read-1.db.example.com', port: 3307 },\n    { user: 'read-user-2', host: 'read-2.db.example.com', port: 3308 },\n    { user: 'read-user-3', host: 'read-3.db.example.com', port: 3309 },\n  ],\n});\n")),Object(i.b)("p",null,"Read more about this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/installation"}),"Installation")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/read-connections"}),"Read Connections")," sections."),Object(i.b)("h2",{id:"auto-flush"},"Auto-flush"),Object(i.b)("p",null,"Since MikroORM v3, default value for ",Object(i.b)("inlineCode",{parentName:"p"},"autoFlush")," is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),". That means you need to call\n",Object(i.b)("inlineCode",{parentName:"p"},"em.flush()")," yourself to persist changes into database. You can still change this via ORM's\noptions to ease the transition but generally it is not recommended as it can cause unwanted\nsmall transactions being created around each ",Object(i.b)("inlineCode",{parentName:"p"},"persist"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  autoFlush: true,\n});\n\nawait orm.em.persist(new Entity()); // flushed\norm.em.persist(new Entity(), false); // you can still use second parameter to disable auto-flushing\n")),Object(i.b)("p",null,"Read more about this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/entity-manager#auto-flushing"}),"Entity Manager")," docs."),Object(i.b)("h2",{id:"naming-strategy"},"Naming Strategy"),Object(i.b)("p",null,"When mapping your entities to database tables and columns, their names will be defined by naming\nstrategy. There are 3 basic naming strategies you can choose from:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UnderscoreNamingStrategy")," - default of all SQL drivers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MongoNamingStrategy")," - default of ",Object(i.b)("inlineCode",{parentName:"li"},"MongoDriver")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EntityCaseNamingStrategy")," - uses unchanged entity and property names")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also define your own custom ",Object(i.b)("inlineCode",{parentName:"p"},"NamingStrategy")," implementation.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  namingStrategy: EntityCaseNamingStrategy,\n});\n")),Object(i.b)("p",null,"Read more about this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/naming-strategy"}),"Naming Strategy")," section."),Object(i.b)("h2",{id:"auto-join-of-11-owners"},"Auto-join of 1:1 owners"),Object(i.b)("p",null,"By default, owning side of 1:1 relation will be auto-joined when you select the inverse side\nso we can have the reference to it. You can disable this behaviour via ",Object(i.b)("inlineCode",{parentName:"p"},"autoJoinOneToOneOwner"),"\nconfiguration toggle."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  autoJoinOneToOneOwner: false,\n});\n")),Object(i.b)("h2",{id:"propagation-of-11-and-m1-owners"},"Propagation of 1:1 and m:1 owners"),Object(i.b)("p",null,"MikroORM defines getter and setter for every owning side of m:1 and 1:1 relation. This is\nthen used for propagation of changes to the inverse side of bi-directional relations."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const author = new Author('n', 'e');\nconst book = new Book('t');\nbook.author = author;\nconsole.log(author.books.contains(book)); // true\n")),Object(i.b)("p",null,"You can disable this behaviour via ",Object(i.b)("inlineCode",{parentName:"p"},"propagateToOneOwner")," option."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  propagateToOneOwner: false,\n});\n")),Object(i.b)("h2",{id:"forcing-utc-timezone"},"Forcing UTC Timezone"),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"forceUtcTimezone")," option to force the ",Object(i.b)("inlineCode",{parentName:"p"},"Date"),"s to be saved in UTC in datetime columns\nwithout timezone. It works for MySQL (",Object(i.b)("inlineCode",{parentName:"p"},"datetime")," type) and PostgreSQL (",Object(i.b)("inlineCode",{parentName:"p"},"timestamp")," type).\nSQLite does this by default. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  forceUtcTimezone: true,\n});\n")),Object(i.b)("h2",{id:"custom-hydrator"},"Custom Hydrator"),Object(i.b)("p",null,"Hydrator is responsible for assigning values from the database to entities.\nYou can implement your custom ",Object(i.b)("inlineCode",{parentName:"p"},"Hydrator")," (by extending the abstract ",Object(i.b)("inlineCode",{parentName:"p"},"Hydrator")," class):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  hydrator: MyCustomHydrator,\n});\n")),Object(i.b)("h2",{id:"custom-repository"},"Custom Repository"),Object(i.b)("p",null,"You can also register custom base repository (for all entities where you do not specify\n",Object(i.b)("inlineCode",{parentName:"p"},"customRepository"),") globally:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can still use entity specific repositories in combination with global base repository.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  entityRepository: CustomBaseRepository,\n});\n")),Object(i.b)("p",null,"Read more about this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/repositories"}),"Repositories")," section."),Object(i.b)("h2",{id:"strict-mode"},"Strict Mode"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MirkoORM")," will validate your properties before actual persisting happens. It will try to fix wrong\ndata types for you automatically. If automatic conversion fails, it will throw an error. You can\nenable strict mode to disable this feature and let ORM throw errors instead. Validation is triggered\nwhen persisting the entity. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  strict: true,\n});\n")),Object(i.b)("p",null,"Read more about this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/property-validation"}),"Property Validation")," section."),Object(i.b)("h2",{id:"debugging--logging"},"Debugging & Logging"),Object(i.b)("p",null,"You can enable logging with ",Object(i.b)("inlineCode",{parentName:"p"},"debug")," option. Either set it to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," to log everything, or\nprovide array of ",Object(i.b)("inlineCode",{parentName:"p"},"'query' | 'query-params' | 'discovery' | 'info'")," namespaces."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  logger: (message: string) => myLogger.info(message), // defaults to `console.log()`\n  debug: true, // or provide array like `['query', 'query-params']`\n  highlight: false, // defaults to true\n  highlightTheme: { ... }, // you can also provide custom highlight there\n});\n")),Object(i.b)("p",null,"Read more about this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/debugging"}),"Debugging")," section."),Object(i.b)("h2",{id:"custom-fail-handler"},"Custom Fail Handler"),Object(i.b)("p",null,"When no entity is found during ",Object(i.b)("inlineCode",{parentName:"p"},"em.findOneOrFail()")," call, ",Object(i.b)("inlineCode",{parentName:"p"},"new Error()")," will be thrown.\nYou can customize how the ",Object(i.b)("inlineCode",{parentName:"p"},"Error")," instance is created via ",Object(i.b)("inlineCode",{parentName:"p"},"findOneOrFailHandler"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  findOneOrFailHandler: (entityName: string, where: Dictionary | IPrimaryKey) => {\n    return new NotFoundException(`${entityName} not found!`);\n  },\n});\n")),Object(i.b)("p",null,"Read more about this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/entity-manager#handling-not-found-entities"}),"Entity Manager")," docs."),Object(i.b)("h2",{id:"migrations"},"Migrations"),Object(i.b)("p",null,"Under the ",Object(i.b)("inlineCode",{parentName:"p"},"migrations")," namespace, you can adjust how the integrated migrations support works.\nFollowing example shows all possible options and their defaults:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  migrations: {\n    tableName: 'mikro_orm_migrations', // migrations table name\n    path: process.cwd() + '/migrations', // path to folder with migration files\n    pattern: /^[\\w-]+\\d+\\.ts$/, // how to match migration files\n    transactional: true, // run each migration inside transaction\n    disableForeignKeys: true, // try to disable foreign_key_checks (or equivalent)\n    allOrNothing: true, // run all migrations in current batch in master transaction\n    emit: 'ts', // migration generation mode\n  },\n});\n")),Object(i.b)("p",null,"Read more about this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/migrations"}),"Migrations")," section."),Object(i.b)("h2",{id:"caching"},"Caching"),Object(i.b)("p",null,"By default, metadata discovery results are cached. You can either disable caching, or adjust\nhow it works. Following example shows all possible options and their defaults:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"MikroORM.init({\n  cache: {\n    enabled: true,\n    pretty: false, // allows to pretty print the JSON cache\n    adapter: FileCacheAdapter, // you can provide your own implementation here, e.g. with redis\n    options: { cacheDir: process.cwd() + '/temp' }, // options will be passed to the constructor of `adapter` class\n  },\n});\n")),Object(i.b)("p",null,"Read more about this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/metadata-cache"}),"Metadata Cache")," section."))}s.isMDXComponent=!0},807:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);