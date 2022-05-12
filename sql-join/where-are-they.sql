select "line1",
        "city"."name" as "city",
        "country"."name" as "country",
        "district"
from "addresses"
join "cities" as "city" using ("cityId")
join "countries" as "country" using ("countryId")
