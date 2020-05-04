//TO START API = npm run dev
//TO START TEST = npm test

const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is up and running at port', port);
});