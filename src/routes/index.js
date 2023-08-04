const productRouter = require('./products');
const defaultRouter = require('./site');
const personalRouter = require('./personal');

function route(app) {
    app.use('/products', productRouter);
    app.use('/personal', personalRouter);
    app.use('/', defaultRouter);
}
module.exports = route;
