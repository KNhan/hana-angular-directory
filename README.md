# angular-directory-hanatrial
A sample mobile application built with AngularJS and linked to SAP HANA Trial backend

General
Update the sample code with your schema name and package from HANA trial

1. Create Model
	1. Create tables \server\db\people.hdbtable
	2. Create tables \server\db\taxes.hdbtable
	3. Create sequence for people ids \server\db\peopleseq.hdbsequence

2. Load data into tables
	1. \server\db\init_data\people.hdbtable
	\server\db\init_data\people.csv 
	\server\db\init_data\sampledata.hdbti
	2. \server\db\init_data\taxes.hdbtable
	 \server\db\init_data\taxes.csv 
	 \server\db\init_data\taxes.hdbti
	3.
	\server\db\init_data\gen_people.hdbprocedure
	\server\db\init_data\gen_taxes.hdbprocedure

	4.
	truncate table "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db::people";

	CALL "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db.init_data::gen_people"(100);
	
	truncate table "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db::taxes";
	call "DEV_39COZS7SO5QZ6WEHD0TVQM8D7"."i058153trial.demo.server.db.init_data::gen_taxes"(1); 

3. Create rest services using XSJS
	\server\rest\people.xsjs
	\server\rest\peopletaxreports.xsjs
	\server\rest\company.xsjs

4. Import client code and update client/js/rest-services.js as appropriate
	\client\*

5. Grant access
        grant select on schema "DEV_EZ3RT47T41KUSXIDXQY2D8GOH" to P1940088139;


OR Using roles
	check your username @ https://accounts.sap.com/ui/protected/profilemanagement

	GRANT EXECUTE,select ON schema "DEV_39COZS7SO5QZ6WEHD0TVQM8D7" TO _SYS_REPO with grant option
	create roles\model.hdbrole

	call "HCP"."HCP_GRANT_ROLE_TO_USER"('i058153trial.demo.server.roles::model_access','I058153');
	
	Try and launch your App.
	\client\index.html
	\client\iphone.html
 
