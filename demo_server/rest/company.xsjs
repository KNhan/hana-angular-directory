


//Get People
function getcompanytaxes(company) {
function createCompanyEntry(rs, attribute, obj) {
        return { 
            "EmployerName": rs.getNString(1),
            "EmployerNo": rs.getNString(2), 	
            "Year": rs.getNString(3), 	
            "Currency": rs.getNString(4), 	
            "USC": rs.getNString(5), 	
            "PRSI": rs.getNString(6), 	
            "PAYE": rs.getNString(7)
        };
    } 
  
    var body = '';
    var conn = $.db.getConnection();
    var pstmt;
    var rs;
    var query;
    var list = [];
  
    try {
    // Get 1 Person
        query = 'SELECT  	"EmployerName",	"EmployerNo",	"Year",	"Currency",	sum("PAYE") as "PAYE" ,	sum("USC") as USC,	sum("PRSI") as PSRSI' + 
' FROM "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db::taxes" ' +
' where 	"EmployerNo" = ?' +
' group by "EmployerName",	"EmployerNo",	"Year",	"Currency" ';
        pstmt = conn.prepareStatement(query);
       pstmt.setString(1, company);
     //   pstmt.setString(2, year);
       rs = pstmt.executeQuery();
        while (rs.next()) {
            list.push(createCompanyEntry(rs));
        }

        rs.close();
        pstmt.close();
    } catch (e) {
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        $.response.setBody(e.message);
        return;
    }

    body = JSON.stringify(list);
    
    $.trace.debug(body);
    $.response.contentType = 'application/json';
    $.response.setBody(body);
    $.response.status = $.net.http.OK;
}


var company = $.request.parameters.get('company');

if (company){
       getcompanytaxes(company);
}