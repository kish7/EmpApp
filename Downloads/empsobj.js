var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());

app.post('/myaction', function(req, res) {
//  res.send('You sent the name "' + req.body.message + '".');
var empid=req.body.name;
var emailid=req.body.email;
var dofobj=req.body.subject;
var obj=req.body.message;
var tar=req.body.target;
var resu=req.body.result;





//ss
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'emp'
});


connection.connect()
 
//connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
connection.query("insert into EmployeeTargets (Eid,Objectives,targetsProp,Results) values("+empid+","+"'"+obj+"','"+tar+"','"+resu+"')", function (err, rows, fields) {
  if (err) throw err
 	res.send('You sent the name "' + req.body.target + '".');
	console.log('YES.DONE.');
 // console.log('The solution is: ', rows[0].Name)
})
 
connection.end()
//ss







});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});




