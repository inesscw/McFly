var express = require('express');
var router = express.Router();
const connection = require('../config/db');
const controller = require('../controller/noteController'); 


//localhost:3000/
router.get('/', controller.viewNotes);

//localhost:3000/oneNote/:id_note
router.get('/oneNote/:id_note', controller.viewOneNote); 

//localhost:3000/postNote/:id_note
router.post('/postNote/:id_note', controller.postNote);

//localhost:3000/favNote
router.get('/favNote', controller.viewFavNote); 

//localhost:3000/delete/:id_note
router.get('/delete/:id:note', controller.delete);


module.exports = router;