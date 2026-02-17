const swaggerUI = require("swagger-ui-express")
const swaggerDocument = require("./docs")
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
app.use(express.json());
app.use("/api-docs",

swaggerUI.serve,

swaggerUI.setup(swaggerDocument)

)

app.use('/', routes);


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));