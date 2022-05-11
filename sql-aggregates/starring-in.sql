select "genres"."name" as "genres",
      count(*) as "numberofAppearance"
from "actors"
join "castMembers" using ("actorId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "genres"."name"
