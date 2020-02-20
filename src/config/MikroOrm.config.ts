import { Options } from 'mikro-orm';

const moduleNameContaningEntity = ['identityAccess'];
const entitiesDirs = moduleNameContaningEntity.map(
  moduleName => `./dist/module/${moduleName}/infra/persistence/entity`,
);
const entitiesDirsTs = moduleNameContaningEntity.map(
  moduleName => `./src/module/${moduleName}/infra/persistence/entity`,
);

export class MikroOrmConfig {
  static getConfig(): Options {
    return {
      entitiesDirs,
      entitiesDirsTs,
      host: process.env.DB_HOST as string,
      port: parseInt(process.env.DB_PORT as string, 10),
      user: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string,
      dbName: process.env.DB_NAME as string,
      type: 'mysql',
    };
  }
}

export default MikroOrmConfig.getConfig();
