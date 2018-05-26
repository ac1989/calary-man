const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

require('./routes/route')(router);

app.use(router.routes());

module.exports = app;
