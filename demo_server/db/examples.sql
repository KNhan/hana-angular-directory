SELECT  	"EmployerName",	"EmployerNo",	"Year",	"Currency",	sum("PAYE"),	sum("USC"),	sum("PRSI")
FROM "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db::taxes"
where "Year" = '2014'
group by "EmployerName",	"EmployerNo",	"Year",	"Currency"
;

SELECT  	avg(PAYE) 
FROM "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db::taxes"
group by "EmployerName",	"EmployerNo",	"Year",	"Currency"