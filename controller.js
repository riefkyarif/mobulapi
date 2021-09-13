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
