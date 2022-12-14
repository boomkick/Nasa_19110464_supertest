const http = require('http');

require('dotenv').config();
// Nasa19110464 - Nasa19110464

const app = require('./app');

const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();
    await loadLaunchData();
    await mongoConnect();

    server.listen(PORT, () => {
        console.log(`Listening on ${PORT} ...`);
    });
}

startServer();


