import angular from 'angular';

import {hello} from './app/hello';
import 'angular-ui-router';
import routesConfig from './routes';

import {myComponent} from './app/components/game/myComponent';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('myComponent', myComponent)
  .component('app', hello);
