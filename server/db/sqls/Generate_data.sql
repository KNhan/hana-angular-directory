truncate table "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db::people";
CALL "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db.init_data::gen_people"(100);



truncate table "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db::taxes";
insert into "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db::taxes"
SELECT TOP 1000 
  p."PPSno",
	"Year",
	"Currency",
	"PAYE",
	"USC",
	"PRSI",
	"EmployerName",
	"EmployerNo"
FROM 
"DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db::people" as p
cross join
"DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db.init_data::taxes" as t;