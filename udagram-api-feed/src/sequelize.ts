import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';
console.debug(`${config.username}`, config.password)
console.debug("type of config.username " ,typeof(config.username))
export const sequelize = new Sequelize({
  'username': `${config.username}`,
  'password': `${config.password}`,
  'database': `${config.database}`,
  'host': `${config.host}`,

  'dialect': `${config.dialect}`,
  'storage': ':memory:',
});
//not doing anything, just trying to trigger travis
//again 