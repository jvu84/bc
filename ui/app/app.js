import 'bootstrap/dist/css/bootstrap.css';


import './style/app.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';
//import angularBootstrap from 'angular-bootstrap';
import modal from 'angular-ui-bootstrap/src/modal';

import api from './services/api';
import datastore from './services/datastore';
import routing from './app.config';
import login from './features/login';
import newsfeed from './features/newsfeed';
import userProfile from './features/userProfile';


angular.module('app', [uirouter, modal, login, newsfeed, userProfile, api, datastore ])
  .config(routing);