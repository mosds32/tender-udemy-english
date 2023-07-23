/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");


const logger = require("firebase-functions/logger");
// Import Admin Library

const admin = require('firebase-admin');

// Initialize the Admin SDK
admin.initializeApp();

const firestore=admin.firestore();

 exports.get = onRequest(async (request, response) => {
  //logger.info("Hello logs!", {structuredData: true});
   response.send("Hello I AM GET the Version 1!");
 });
 // We execute an insertion inside the user collection
const result= await firestore.collection('users').add({name: 'Jesse'}),





exports.get = onRequest((request, response) => {
  //logger.info("Hello logs!", {structuredData: true});
   response.send(result);
 });