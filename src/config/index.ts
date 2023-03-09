import developmentConfig from './development';
import productionConfig from './production';

const configs = {
    development: developmentConfig,
    production: productionConfig,
};

export default process.env.NODE_ENV == 'production' ?  configs.production : configs.development;