module.exports = {

paths: {

"/create": {

post: {

summary: "Crear tarea",

responses: {

201: {

description: "Task created"

}

}

}

},



"/": {

get: {

summary: "Obtener todas las tareas",

responses: {

200: {

description: "Lista tareas"

}

}

}

},



"/id/{_id}": {

get: {

summary: "Obtener tarea por id",

parameters: [

{

name: "_id",

in: "path",

required: true,

schema: {

type: "string"

}

}

],

responses: {

200: {

description: "Task encontrada"

}

}

},



put: {

summary: "Actualizar tarea",

parameters: [

{

name: "_id",

in: "path",

required: true,

schema: {

type: "string"

}

}

],

responses: {

200: {

description: "Task updated"

}

}

},



delete: {

summary: "Eliminar tarea",

parameters: [

{

name: "_id",

in: "path",

required: true,

schema: {

type: "string"

}

}

],

responses: {

200: {

description: "Task deleted"

}

}

}

}

}

}
