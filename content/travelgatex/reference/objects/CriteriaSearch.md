{
  "title": "CriteriaSearch",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Date!",
      "name": "checkIn",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-in date for the booking.\nFormat: yyyy-MM-dd",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "checkOut",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-out, date for the booking.\nFormat: yyyy-MM-dd",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[String!]!",
      "name": "hotels",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Contains the list of hotels's ID.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[RoomCriteria!]!",
      "name": "occupancies",
      "url": "/travelgatex/reference/objects/roomcriteria",
      "description": "For multi room bookings, this array will contain multiple elements (rooms).\nFor each room you have to specify its own occupancy.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Language",
      "name": "language",
      "url": "/travelgatex/reference/scalars/language",
      "description": "Language to be used in request.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Currency",
      "name": "currency",
      "url": "/travelgatex/reference/scalars/currency",
      "description": "Currency requested if supported by supplier.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Country",
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
    }
  ],
  "requireby": [
    {
      "name": "HotelSearch",
      "description": "Results of Avail Hotel. Contains all the available options for a given date and itinerary.",
      "url": "/travelgatex/reference/objects/hotelsearch"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CriteriaSearch"
}
Criteria of search contains destination, travel dates and the number of pax in each room.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
