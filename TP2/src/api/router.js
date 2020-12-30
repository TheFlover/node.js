const config = require('../config/env.config');

const n = require('./components/Utils/UtilsRoute');

const router= (app) => {
    app.use(config.root_api, UtilsRoutes);
    app.use((req,res) => {
        res.status(404).json({error: 'Not Found'});
    });
};

module.exports = router;