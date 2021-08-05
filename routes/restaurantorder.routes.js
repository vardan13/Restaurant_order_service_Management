module.exports = app => {
    const restaurantorder = require("../controllers/restaurantorder.controller");
  
    var router = require("express").Router();
  
    // Create a new restaurantorder
    router.post("/", restaurantorder.create);
  
    // Retrieve all restaurantorder
    router.get("/", restaurantorder.findAll);
  
    // // // Retrieve all published restaurantorder
    // router.get("/published", restaurantorder.findAllPublished);
  
    // // // Retrieve a single restaurantorder with id
    router.get("/:id", restaurantorder.findOne);
  
    // // // Update a restaurantorder with id
    router.put("/:id", restaurantorder.update);
  
    // // // Delete a restaurantorder with id
    router.delete("/:id", restaurantorder.delete);
  
    // // // Create a new restaurantorder
    // router.delete("/", restaurantorder.deleteAll);
  
    app.use('/api/restaurantorder', router);
  };