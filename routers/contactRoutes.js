const express = require("express");
const router = express.Router();

const {getContacts} = require("../controller/contactController")
const {getContact} = require("../controller/contactController")
const {createContact} = require("../controller/contactController")
const {updateContact} = require("../controller/contactController")
const {deleteContact} = require("../controller/contactController")

router.route("/").get(getContacts).post(createContact);



router.route("/:id").get(getContact) .put(updateContact) .delete(deleteContact);


module.exports = router;