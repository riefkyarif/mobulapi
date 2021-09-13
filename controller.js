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