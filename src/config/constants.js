import  devConfig from './environments/dev';
import prodConfig from './environments/prod';
import testConfig from './environments/test';
import defaultConfig from './environments/default';


function envConfig(env) {
  switch (env) {
    case 'QA':
      return testConfig;
    case 'production':
      return prodConfig;
      default:
      case 'development':
        return devConfig;
  }
}

//Take defaultConfig and make it a single object
//So, we have concatenated two objects into one
export default { ...defaultConfig, ...envConfig(process.env.NODE_ENV) };
