{
  "title": "AddOns",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "JSON",
      "name": "distribute",
      "url": "/travelgatex/reference/scalars/json",
      "description": "Extra information from the distribution layer",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": "An option includes hotel information, meal plan, total price, conditions and room description.",
      "url": "/travelgatex/reference/objects/hoteloptionsearch"
    },
    {
      "name": "HotelOptionQuote",
      "description": "Contains information about quote.",
      "url": "/travelgatex/reference/objects/hoteloptionquote"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AddOns"
}
Extra information about the option.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
