function createPeopleEntry(rs) {
        return { 
            "PPSno": rs.getNString(1),
            "firstName": rs.getNString(2), 	
            "lastName": rs.getNString(3), 	
            "title": rs.getNString(4), 	
            "cellPhone": rs.getNString(5), 	
            "officePhone": rs.getNString(6), 	
            "email": rs.getNString(7), 	
            "city": rs.getNString(8), 	
            "pic": rs.getNString(9)
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
        query = 'SELECT top 50 "PPSno","firstName", 	"lastName", 	"title", 	"cellPhone", 	"officePhone", 	"email", ' + 
              '	"city", 	"pic" FROM "DEV_EZ3RT47T41KUSXIDXQY2D8GOH"."p1940088139trial.i058153.demo.server.db::people" ' + 
               ' where "firstName" != \'Eugene\' order by "PPSno"';
               
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
function getPerson(peopleId) {
  function createPeopleEntry(rs) {
        return { 
            "PPSno": rs.getNString(1),
            "firstName": rs.getNString(2), 	
            "lastName": rs.getNString(3), 	
            "title": rs.getNString(4), 	
            "cellPhone": rs.getNString(5), 	
            "officePhone": rs.getNString(6), 	
            "email": rs.getNString(7), 	
            "city": rs.getNString(8), 	
            "pic": rs.getNString(9)
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
        query = 'SELECT top 1 "PPSno","firstName", 	"lastName", 	"title", 	"cellPhone", 	"officePhone", 	"email", 	"city", ' + 
        '	"pic" FROM "DEV_39COZS7SO5QZ6WEHD0TVQM8D7"."i058153trial.demo.server.db::people" where "PPSno" = ?';
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
    if  (list[0]){
    body = JSON.stringify(list[0]);
    }
    $.trace.debug(body);
    $.response.contentType = 'application/json';
    $.response.setBody(body);
    $.response.status = $.net.http.OK;
} 


var peopleId = $.request.parameters.get('peopleId');
if (peopleId){
       getPerson(peopleId);
}else{
         getPeopleList();
}
