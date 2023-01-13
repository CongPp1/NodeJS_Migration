const express = require('express');
const app = express();
const port = process.env.port || 8008;
const employeeRoute = require('./api/user-route');
const db = require('./models/index');


app.use(express.json());
app.use('/api/employee', employeeRoute);


app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const testDatabase = async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
testDatabase();

module.exports = app;