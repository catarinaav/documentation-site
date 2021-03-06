+++
title = "Access, Supplier and Context"
pagetitle = "The Holy Grail"
description = "Learn about Core Entities used in TravelgateX"
weight = 1
alwaysopen = false
+++

# Supplier

Product segmentation over a _provider_ API implementation.
_Supplier_ codes are uniques ove all TravelgateX organizations. 


# Access

Configuration to use when interacting with a _supplier_, which includes:

* URLs
* Credentials
* Markets
* Rate Types
* Specific _supplier_ settings

# Context

_Context_ is the way codes are formed.
Every _platform_ can manage its own contexts or reuse existing ones. 
 
That is to say, different _sellers_ and _buyers_ can manage same codes _context_. For example <a href="https://www.smyrooms.com" target="_blank">SmyRooms</a> supplier uses **SMY** contexts.

_Context_ apply to:

* *Hotel Codes*
* *Board Codes*
* *Room Codes*

Thanks to our built in solution you will be able to choose the context that you want to use when requesting an [HotelX](/hotelx/) operation. This _context_ will be used in order to [map](/hotelx/plugins/mappings) with other _suppliers_ contexts.

We recommend to use the **biggest _context_ possible** or use your **own context**, so all _supplier_ mappings can be resolved.