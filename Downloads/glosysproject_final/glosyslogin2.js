/*var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var http = require('http'),
    fs = require('fs');

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());
var usrnm,pass,passg,clas;
app.post('/myaction', function(req, res) {
 // res.send('You sent the name "' + req.body.name + '".');
usrnm=req.body.t1;
pass=req.body.t2;





//mysql


var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'aakash12',
  database : 'emp'
});

connection.connect()

//connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
connection.query('SELECT * from Employee where Username="'+usrnm+'"', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows)
    passg=rows[0].Password;
    clas = rows[0].Class;
if(pass==passg){

//res.send("Welcome");
if(clas=="1")
{
fs.readFile('./admin.html', function (err, html) {
    if (err) {
        throw err; 
    }       
      
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  
    
});
}
else if(clas=="2")
{
fs.readFile('./projectmanager.html', function (err, html) {
    if (err) {
        throw err; 
    }       
      
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  
    
});
}
else if(clas=="3")
{
fs.readFile('./teamleader.html', function (err, html) {
    if (err) {
        throw err; 
    }       
      
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  
    
});
}
else if(clas=="4")
{
fs.readFile('./employee.html', function (err, html) {
    if (err) {
        throw err; 
    }       
      
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  
    
});
}
}
else
res.send("Wrong Pass "+pass+passg)
})

connection.end()






//mysqlend
});

app.listen(8081, function() {
  console.log('Server running at http://127.0.0.1:8081/');
});
*/

var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
 
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 
 
//app.use(express.bodyParser());
var usrnm,pass,passg,cls;
app.post('/myaction', function(req, res) {
 // res.send('You sent the name "' + req.body.name + '".');
usrnm=req.body.t1;
pass=req.body.t2;
 
//mysql
 
 
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'aakash12',
  database : 'emp'
});
 
connection.connect()
 
//connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
connection.query('SELECT * from Employee where Username="'+usrnm+'"', function (err, rows, fields) {
  if (err) throw err
 
  console.log('The solution is: ', rows)
    passg=rows[0].Password;
    cls=rows[0].Class;
 
 
if(pass==passg)
{
    if(cls==1)
    {
    res.writeHead(301,
      {Location: '/admin.html'});
    res.end();
    }
    
    else if(cls==2)
    {
    res.writeHead(301,
      {Location: 'http://127.0.0.1/glosysproject_final/projectmanager.html'});
    res.end();
    }
 
    else if(cls==3)
    {
    res.writeHead(301,
      {Location: 'http://127.0.0.1/glosysproject_final/teamleader.html'});
    res.end();
    }
    
    else if(cls==4)
    {
    res.writeHead(301,
      {Location: 'http://127.0.0.1/glosysproject_final/employee.html'});
    res.end();
    }
    
    
 
//res.send("Welcome");
 
}
 
else
res.send("Wrong Pass "+pass+passg)
})
 
connection.end()
 
 
 
 
 
 
//mysqlend
});
 
app.listen(8081, function() {
  console.log('Server running at http://127.0.0.1:8081/');
});
 




