const personas = {

persona:{
   name:"kelvin",
   apellido:"abache",
   telefono:12312123,
   amigos:[
     {name:"fernan", telefono:1321321},
     {name:"nicol", telefono:4564545},
     {name:"maria",telefono:1445645}
   ]
},

persona1: {
   name:"manuel",
   apellido:"abache",
   telefono:12312123,
   amigos:[
     {name:"riqui", telefono:1321321},
     {name:"nicol", telefono:4564545},
     {name:"maria",telefono:1445645}
   ]
},

persona2:{
   name:"kelly",
   apellido:"abache",
   telefono:12312123,
   amigos:[
     {name:"mariana", telefono:1321321},
     {name:"juan", telefono:4564545},
     {name:"maria",telefono:1445645}
   ]
},

persona3:{
   name:"maria",
   apellido:"abache",
   telefono:12312123,
   amigos:[
     {name:"fernan", telefono:1321321},
     {name:"nicol", telefono:4564545},
     {name:"maria",telefono:1445645}
   ]
}

};

for (const [key,valor] of Object.entries(personas)){
    console.log(valor.amigos);
}
