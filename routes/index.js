const router = require("express").Router();
const usersController = require("../controllers/usersController");
const auth = require("../controllers/middlewere/session-trecker")

router
.route("/users")
    .post(usersController.create)   // create a user
    .get(auth.authentication, usersController.findAll)   // get all users
  
router
.route("/users/:id1/:id2")          //id1 is username, id2 is password
    .get(usersController.authenticate)
   
router
.route("/user/:id1")            
    .get(auth.authentication, usersController.findByName)    // get 1 user by name (:id1)   
    .put(auth.authentication, usersController.updateByName)      // update 1 user by userName (:id1)


module.exports = router;

////////////////////////////////////////////////////////////////////////
// Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .delete(usersController.remove);
