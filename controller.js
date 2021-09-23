'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req, res){
    response.ok("App RestAPI worked", res);
}

// menampilkan semua data pengguna
exports.tampilsemuapengguna = function(req,res){
    connection.query('SELECT * FROM pengguna', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};

//menampilkan semua data berdasar ID
exports.tampilberdasarid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM pengguna WHERE PersonId = ?', [id] , function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};

//menambahkan data pengguna
exports.tambahuser = function (req, res) {
    var LastName = req.body.LastName;
    var FirstName = req.body.FirstName;
    var Address = req.body.Address;
    var City = req.body.City;

    connection.query('INSERT INTO pengguna (LastName, FirstName, Address, City) VALUES(?,?,?,?)',
        [LastName, FirstName, Address, City], function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Succes Adding Data!", res)
            }
        });
};