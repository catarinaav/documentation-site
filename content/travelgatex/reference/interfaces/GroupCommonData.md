{
  "title": "GroupCommonData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "MemberConnection",
      "name": "members",
      "url": "/travelgatex/reference/objects/memberconnection",
      "description": "",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "APIConnection",
      "name": "apis",
      "url": "/travelgatex/reference/objects/apiconnection",
      "description": "",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "interface",
  "typename": "GroupCommonData"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
