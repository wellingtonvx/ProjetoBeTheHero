const express = require("express");
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
    Get: Quando queremos buscar/listar uma informação do back-end
    Post: Quando querermos criar uma informação no back-end
    Put: Alterar uma informação no back-end
    Delete: Deletar uma informação no backend

    Tipos de Parâmetro

    Query Parms: Parâmetro nomeados enviados na rota após "?" usado para(filtros, paginação)
    Route Parms: Parâmetro utilizado para identificar recursos ex: (app.get('/user/:id')) ou seja vai retornar os usuarios pelo id passado
    Request Budy: Corpo da requisição, utilizado para criar ou alterar recursos
*/

app.listen(3333);
