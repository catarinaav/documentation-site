{
  "title": "DefaultSettings",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "connectUser",
      "url": "/travelgatex/reference/scalars/string",
      "description": "This field is got only if the authorization header is of the type JWT. It is used for to change the user that\nhas been set by default in the preload.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "context",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the context of the I/O codes (hotel, board, room and rates)",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Language!",
      "name": "language",
      "url": "/travelgatex/reference/scalars/language",
      "description": "Language to be used in request.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/travelgatex/reference/scalars/currency",
      "description": "Currency requested if supported by supplier.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Country!",
      "name": "nationality",
      "url": "/travelgatex/reference/scalars/country",
      "description": "Nationality of the guest (use ISO3166_1_alfa_2).",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "market",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Targeted zone, country or point of sale to be used in request.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Timeout!",
      "name": "timeouts",
      "url": "/travelgatex/reference/objects/timeout",
      "description": "Group of timeouts to be used in the differents services",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "BusinessRules!",
      "name": "businessRules",
      "url": "/travelgatex/reference/objects/businessrules",
      "description": "Business rules.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Query",
      "description": "",
      "url": "/travelgatex/reference/schema/query"
    },
    {
      "name": "Mutation",
      "description": "Mutations are operations that change or update data in the server.",
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "DefaultSettings"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
