const path = require("path");
const express = require("express");
const db = require("./data/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "viwes"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/images", express.static("images"));
app.use(express.json()); //  this line is added to handle JSON data in the request body

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/", async function (req, res) {
  try {
    const data = [
      req.body.fname,
      req.body.lname,
      req.body.email,
      req.body.contact,
      req.body.Gender,
      req.body.dateofbirth,
      req.body.Address,
      req.body.cityname,
      req.body.pincode,
      req.body.country,
      req.body.state,
      req.body.collagename,
      req.body.branch,
      req.body.percentage,
      req.body.yearofpassing,
      req.body.courceapplied,
    ];
    await db.query(
      `INSERT INTO student(fname,lname,email,cno,gender,bdate,address,city,
      pincode,country,state,cname,branch,persentage,passingyear,corce) 
      VALUES (?) `,
      [data]
    );
    console.log("data inserted");
    res.redirect("/");
  } catch (error) {
    console.error("Error inserting record:", error);
  }
});

app.get("/admin", async function (req, res) {
  const [data] = await db.query(
    "SELECT * FROM student ORDER BY persentage DESC"
  );
  res.render("admin", { data: data });
});

app.listen(3000);
