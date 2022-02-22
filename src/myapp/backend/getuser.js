var express = require("express");
var router = express.Router();
var db = require("./db_conn");

//-------check user-----
router.post("/check" ,function(req, res){
  console.log("check :  ",req.body)

  if(req.body.username && req.body.password !== null)
  {
   return runQuery("SELECT * FROM my_app WHERE username ='" + req.body.username + "' AND password='" + req.body.password + "'")
    .then((result)=>{
      result.length === 0 ? res.status(500).json({error: "no data found", data: req.body}) : res.send(result)
    })
      .catch((err) => {
         return res.status(500).json({missing: "sql syntax error"})
      });
  }
  res.status(500).json({error : "username and password required"})
})

//------get all data-------
router.get("/", function (req, res) {
  runQuery("SELECT * FROM  my_app order by id desc") 
    .then((result) => {
      res.send(result)  
    })
    .catch((err) => console.log(err));
});

//------post data-------
router.post("/save", function (req, res) {
    console.log(req.body)
    runQuery("INSERT INTO my_app (username , password) VALUES ('" + req.body.username +  "' , '" +  req.body.password +  "')")
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=> console.log(err));
});

//----------delete data----------
router.delete("/delete/:id", function (req, res) {

    let id = req.params.id;
    runQuery(`DELETE FROM my_app WHERE id = ${id}`)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>console.log(err))
  });

//----------update data--------
router.put("/update/:id", function (req, res) {
    //console.log(req.body);
    let id = req.body.id;
    let username = req.body.username;
    let password = req.body.password;
  
    runQuery(`UPDATE my_app SET username="${username}" , password="${password}" WHERE id= ${id}`)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>console.log(err))
  });

//-------promise-----------
var runQuery = (query) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = router;
