select "countries"."name" as "countryname",
      count("cityId") as "totalCities"
from "countries"
join "cities" using ("countryId")
group by "countries"."countryId";
