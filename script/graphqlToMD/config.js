/**
 * CONSTANTS CONFIG
 */

var URL = "https://api.travelgatex.com";
var DIRNAME = "reference";
var PATH = "/travelgatex/";
var relURL = PATH + DIRNAME;
var LOCATION = __dirname + "/../../content" + relURL;
var BODY = {
  operationName: "IntrospectionQuery",
  query: require("./query").query,
  variable: null
};

var frontMatter = (title, pagetitle, description, weight, icon) =>
  JSON.stringify(
    {
      title: title,
      pagetitle: pagetitle,
      description: description,
      weight: weight || 1,
      icon: icon,
      alwaysopen: false
    },
    null,
    2
  );

var dirnameFrontMatter = {
  title: "Reference",
  pagetitle: "",
  description: "Reference Documentation",
  icon: "fa-book",
  weight: 4,
  alwaysopen: false
};

var schemaFrontmatter = {
  title: "Schema",
  pagetitle: null,
  description: "",
  weight: 1,
  alwaysopen: false
};

var INDEX = frontMatter(
  "Reference",
  "Reference Documentation",
  "Reference Documentation",
  2,
  "fa-book"
);
var INDEXSCHEMA = frontMatter("Schema", null, "", 1, null);
var INDEXOBJECTS = frontMatter("Objects", null, "", 2, null);
var INDEXSCALARS = frontMatter("Scalars", null, "", 3, null);
var INDEXINTERFACES = frontMatter("Interfaces", null, "", 4, null);
var INDEXINPUTOBJECTS = frontMatter("Input objects", null, "", 5, null);
var INDEXENUMS = frontMatter("Enums", null, "", 6, null);

var QUERY = frontMatter("Query", null, "", 1, null);
var MUTATION = frontMatter("Mutation", null, "", 2, null);

var SECTION1 = "GraphQL Schema definition";
var SECTION2 = "Fields";
var SECTION3 = "Require by";

module.exports = {
  URL,
  LOCATION,
  DIRNAME,
  relURL,
  BODY,
  frontmatters: {
    frontMatter,
    INDEX,
    INDEXOBJECTS,
    INDEXSCHEMA,
    INDEXSCALARS,
    INDEXINTERFACES,
    INDEXINPUTOBJECTS,
    INDEXENUMS,
    QUERY,
    MUTATION
  },
  SECTION1,
  SECTION2,
  SECTION3
};
