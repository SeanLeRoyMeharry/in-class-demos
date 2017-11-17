import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import './index.css'; //our css (bundled)

import App from './App';

import firebase from 'firebase/app';
import 'firebase/database';

// TODO: input your own firebase configuration


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDGS6IiHsGIN4fsSibhgXCNFulunx53uP8",
    authDomain: "fir-demo-ef11d.firebaseapp.com",
    databaseURL: "https://fir-demo-ef11d.firebaseio.com",
    projectId: "fir-demo-ef11d",
    storageBucket: "",
    messagingSenderId: "1074950780575"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
