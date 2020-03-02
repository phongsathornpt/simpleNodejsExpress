const express = require('express')
const router = express.Router()
const { validation, schema } = require('../validator/users')
const db = require('../config/db')
  
router.route('/users?')
.get((req, res, next) => { 
    // ทำการแสดงข้อมูลทั้งหมด
    let sql = ' SELECT * FROM users '
    db.query(sql,(error, results, fields)=>{
        // เกิด error ในคำสั่ง sql
        if(error) return res.status(500).json({
            "status": 500,
            "message": "Internal Server Error" // error.sqlMessage
        })
        // แสดงข้อมูลกร๊ไม่เกิด error
        const result = {
            "status": 200,
            "data": results
        }
        return res.json(result)        
    })
})
    .post(validation(schema),(req, res, next) => {   
        // เพิ่มข้อมูลใหม่เข้าไปในฐานข้อมูล และแสดงข้อมูลใหม่ที่เพิ่งเพิ่ม
        return res.json({})
    })
  
router.route('/user/:id')
    .all((req, res, next) => { 
        // ตรวจสอบว่า  id ข้อมูลที่ส่งมา หรืออยู่ในฐานข้อมูลหรือไม่ 
        // ถ้ามีส่งต่อไปดึงมาแสดง / แก้ไข / ลบ
        next()
    })
    .get((req, res, next) => { 
        // แสดงรายการข้อมูลจากฐานข้อมูลของ id ข้อมูลที่อต้กงาร
        return res.json({})
    })
    .put(validation(schema),(req, res, next) => {   
        // ทำการแก้ไขรายการข้อมูลของ id ข้อมูลที่ต้องการ จากฐานข้อมูล แล้วแสดงรายการข้อมูลที่แก้ไข
        return res.json({})
    })
    .delete((req, res, next) => { 
        // ทำการลบช้อมูลของ id ข้อมูลที่ต้องการ จากฐานข้อมูล แล้วแสดงข้อมูลที่เพิ่งลบ
        return res.json({})
    })
  
module.exports = router