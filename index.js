// *************File Management*************
let fs=require('fs');


// *************Backend Management*************
let express=require('express');
let app=express();

let path=require('path');
app.use(express.static(path.join(__dirname,"public")));//to make available the imgs or any other files(like css files) to express

app.use(express.urlencoded())    //Used for taking data from backend

app.get("/",(req,res) =>{

    
    res.sendFile(path.join(__dirname,"home.html"));
    
})
app.post("/",(req,res) =>{

    let name=req.body.name;
    let number=req.body.number;
    let email=req.body.email;
    let campus=req.body.campus;
    let partners=req.body.partners;
    let date=req.body.date;
    let reference=req.body.reference;
    res.sendFile(path.join(__dirname,"home.html"));

    con.query("insert into tenders(name,contact,email,campus,partners,date,reference) values(?,?,?,?,?,?,?);",[name,number,email,campus,partners,date,reference],(error,result) =>
    {

    })
    
})





// ********************************FET********************************
app.get("/loginfet",(req,res) =>{
    
    res.sendFile(path.join(__dirname,"pages","fet","loginfet.html"));
    
})
app.post("/loginfet",(req,res) =>{
    let studid = req.body.studid
    let password = req.body.password
    let i=0;
    let check=false;

    con.query(`select studentid,password from canteenfet; `,(err,result,field) =>{
        let length = result.length
        while(i<length)
        {
            if(studid == result[i].studentid)
            {
                if(password == result[i].password)
                    {
                        res.sendFile(path.join(__dirname,"pages","fet","menufet.html"));
                    }
                    else
                    {
                        res.sendFile(path.join(__dirname,"fail.html"));
                    }
                    check=true;
                }
                i++;
            }
            if(check==false)
            {
                res.send("<h1>Wrong Student ID</h1>")
            }
        })
    })
app.get("/signupfet",(req,res) =>{

    res.sendFile(path.join(__dirname,"pages","fet","signupfet.html"))

})
app.post("/signupfet",(req,res) =>{
    
    let name=req.body.name;
    let faculty=req.body.faculty;
    let department=req.body.department;
    let studid=req.body.studid;
    let number=req.body.number;
    let email=req.body.email;
    let createpass=req.body.createpass;
    let confirmpass=req.body.confirmpass;
    res.sendFile(path.join(__dirname,"pages","fet","signupfet.html"));

    con.query("insert into canteenfet(name,faculty,department,studentid,mobilenumber,email,password) values(?,?,?,?,?,?,?);",[name,faculty,department,studid,number,email,createpass],(error,result) =>{
    })
})




// app.get("/confirm",(req,res) =>{

//     req

//     res.send(`Order`);
// })

app.get("/mapfet",(req,res) =>{
    res.sendFile(path.join(__dirname,"pages","fet","mapfet.html"));
})


    
// ********************************Central********************************
app.get("/logincentral",(req,res) =>{
    
    res.sendFile(path.join(__dirname,"pages","central","logincentral.html"));
    
})
app.post("/logincentral",(req,res) =>{
    let studid = req.body.studid
    let password = req.body.password
    let i=0;
    let check=false;

    con.query(`select studentid,password from canteencentral; `,(err,result,field) =>{
        let length = result.length
        while(i<length)
        {
            if(studid == result[i].studentid)
            {
                if(password == result[i].password)
                    {
                        res.sendFile(path.join(__dirname,"pages","central","menucentral.html"));
                    }
                    else
                    {
                        res.sendFile(path.join(__dirname,"fail.html"));
                    }
                check=true;
            }
            i++;
        }
        if(check==false)
        {
            res.send("<h1>Wrong Student ID</h1>")
        }
    })
})

app.get("/signupcentral",(req,res) =>{

    res.sendFile(path.join(__dirname,"pages","central","signupcentral.html"))

})
app.post("/signupcentral",(req,res) =>{
    
    let name=req.body.name;
    let faculty=req.body.faculty;
    let department=req.body.department;
    let studid=req.body.studid;
    let number=req.body.number;
    let email=req.body.email;
    let createpass=req.body.createpass;
    let confirmpass=req.body.confirmpass;
    res.sendFile(path.join(__dirname,"pages","central","signupcentral.html"));

    con.query("insert into canteencentral(name,faculty,department,studentid,mobilenumber,email,password) values(?,?,?,?,?,?,?);",[name,faculty,department,studid,number,email,createpass],(error,result) =>{
    })
})

app.get("/mapcentral",(req,res) =>{
    res.sendFile(path.join(__dirname,"pages","central","mapcentral.html"));
})


// ********************************Castro********************************
app.get("/logincastro",(req,res) =>{
    
    res.sendFile(path.join(__dirname,"pages","castro","logincastro.html"));
    
})
app.post("/logincastro",(req,res) =>{
    let studid = req.body.studid
    let password = req.body.password
    let i=0;
    let check=false;

    con.query(`select studentid,password from canteencastro; `,(err,result,field) =>{
        let length = result.length
        while(i<length)
        {
            if(studid == result[i].studentid)
            {
                if(password == result[i].password)
                    {
                        res.sendFile(path.join(__dirname,"pages","castro","menucastro.html"));
                    }
                    else
                    {
                        res.sendFile(path.join(__dirname,"fail.html"));
                    }
                check=true;
            }
            i++;
        }
        if(check==false)
        {
            res.send("<h1>Wrong Student ID</h1>")
        }
    })
})

app.get("/signupcastro",(req,res) =>{

    res.sendFile(path.join(__dirname,"pages","castro","signupcastro.html"))

})
app.post("/signupcastro",(req,res) =>{
    
    let name=req.body.name;
    let faculty=req.body.faculty;
    let department=req.body.department;
    let studid=req.body.studid;
    let number=req.body.number;
    let email=req.body.email;
    let createpass=req.body.createpass;
    let confirmpass=req.body.confirmpass;
    res.sendFile(path.join(__dirname,"pages","castro","signupcastro.html"));

    con.query("insert into canteencastro(name,faculty,department,studentid,mobilenumber,email,password) values(?,?,?,?,?,?,?);",[name,faculty,department,studid,number,email,createpass],(error,result) =>{
    })
})

app.get("/mapcastro",(req,res) =>{
    res.sendFile(path.join(__dirname,"pages","castro","mapcastro.html"));
})








app.get("/developers",(req,res) =>{
    res.sendFile(path.join(__dirname,"developers.html"));
})
app.get("/about",(req,res) =>{
    res.sendFile(path.join(__dirname,"about.html"));
})


// *************DataBase Management*************
// let mysql=require('mysql');
const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',          // Database host
    user: 'postgres',      // PostgreSQL username
    password: 'Mohd8542@',  // PostgreSQL password
    database: 'StudentsFET',    // Your PostgreSQL database name
    port: 5432                  // Default PostgreSQL port
});
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    console.log("Connected to PostgreSQL Database\n");
    release(); // Release the client after use
});
// let con=mysql.createConnection({

//     host:"localhost",
//     user:"root",
//     // password:"$MySQL$",
//     password:"Mohd8542@",
//     database:"StudentsFET"
// })

// con.connect((err) =>{

//     if(err) throw err;
//     else
//     console.log("Connected to Database\n");
    
// })


app.listen(80,(err) =>{
    if(err) throw err;
    else
    console.log("We are Live");
})