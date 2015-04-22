function createPeopleEntry(rs, attribute, obj) {
        return { 
            "PPSno": rs.getNString(1),
            "Year": rs.getNString(2), 	
            "Currency": rs.getNString(3), 	
            "PAYE": rs.getNString(4), 	
            "USC": rs.getNString(5), 	
            "PRSI": rs.getNString(6), 	
            "EmployerName": rs.getNString(7), 	
            "EmployerNo": rs.getNString(8)
        };
    } 
//Get People
function getPeopleList() {
  
    var body = '';
    var conn = $.db.getConnection();
    var pstmt;
    var rs;
    var query;
    var list = [];

    try {
        // Get People List
        query = 'SELECT	"PPSno","Year",	"Currency",	"PAYE",	"USC",	"PRSI",	"EmployerName",	"EmployerNo" FROM "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db::taxes"';
        pstmt = conn.prepareStatement(query);

        rs = pstmt.executeQuery();
        while (rs.next()) {
            list.push(createPeopleEntry(rs));
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


//Get People
function getPersontaxes(peopleId) {
  
    var body = '';
    var conn = $.db.getConnection();
    var pstmt;
    var rs;
    var query;
    var list = [];
  
    try {
    // Get 1 Person
        query = 'SELECT	"PPSno","Year",	"Currency",	"PAYE",	"USC",	"PRSI",	' + 
        ' "EmployerName",	"EmployerNo" FROM "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo_server.db::taxes" where "PPSno" = ?';
        pstmt = conn.prepareStatement(query);
       pstmt.setString(1, peopleId);
       rs = pstmt.executeQuery();
        while (rs.next()) {
            list.push(createPeopleEntry(rs));
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


var peopleId = $.request.parameters.get('peopleId');
if (peopleId){
       getPersontaxes(peopleId);
}else{
         getPeopleList();
}