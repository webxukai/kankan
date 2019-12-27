/*
 * @Author: your name
 * @Date: 2019-12-26 17:56:29
 * @LastEditTime: 2019-12-26 17:57:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \kankan\kankan-ser\query\index.js
 */
const mysql = require('mysql');

const config = require('../config/sql');
const pool = mysql.createPool(config);
let services = {
  query(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if(err){
          reject(err)
        }
        
        connection.query(sql,values,(err, rows) => {
          if(err){
            reject (err)
          }else {
            resolve(rows)
          }
          connection.release();
        })
      })
    })
  }
}

module.exports = services;