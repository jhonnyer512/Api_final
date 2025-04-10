const express = require("express");

const mysql = require("mysql");

const app = express();

app.use(express.static('public'));

let conexion = mysql.createConnection({
    host: "localhost",
    database: "basedatosejemplo",
    user: "root",
    password:""
})

app.set("view engine", "ejs");


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function(req,res){
    res.render("registro")
});

app.post("/validar", function(req, res){
    const datos = req.body;

    //console.log(datos);

    let cedula = datos.ced;
    let nombre = datos.nom;
    let apellido = datos.apell;
    let password = datos.pass;
    let correo = datos.correo; 

    let registrar = "INSERT INTO tabla_usuarios (ced, nombre, apellido, correo, contraseña) VALUES('"+cedula +"','"+nombre +"','"+ apellido+"','"+ correo+"','"+ password +"')";

    conexion.query(registrar, function(error){
        if(error){
            throw error;
    }else{
        console.log("datos registros");
    }
    });
});

app.listen(2000, function(){
    console.log("servidor creado http://localhost:2000");
});