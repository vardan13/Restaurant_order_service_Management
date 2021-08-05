const db = require("../models");
const Restaurantorder = db.restaurantorder;



exports.create = (req, res) => {
    // Validate request
    if (!req.body.Items) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  // console.log(req.body);
    // Create a restaurantorder
      const restaurantorder = new Restaurantorder(
        {
            "RestaurantId": Math.ceil(Math.random() * 100),
            "CustomerId": Math.ceil(Math.random() * 277),
            "Datetime": new Date(),
            "Items": {"itemid":req.body.Items.itemid,"Qty":req.body.Items.Qty},
            "Amount":req.body.Amount,
            "Paidvia":req.body.Paidvia
          }
        );
   
 
  
    // Save restaurantorder in the database
    restaurantorder
      .save(restaurantorder)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the restaurantorder."
        });
      });
  };


  exports.findAll = (req, res) => {
    // console.log(req.query.Name);
    const title = req.query.RestaurantId;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Restaurantorder.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Orders."
        });
      });
  };

  exports.findOne = (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
  console.log(id);
    Restaurantorder.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Restaurantorder with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Restaurantorder with id=" + id });
      });
  };




  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).json({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Restaurantorder.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).json({
            message: `Cannot update Restaurantorder with id=${id}. Maybe Restaurantorder was not found!`
          });
        } else res.json({ message: "Restaurantorder was updated successfully." });
      })
      .catch(err => {
        res.status(500).json({
          message: "Error updating Restaurantorder with id=" + id
        });
      });
  };


  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Restaurantorder.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Restaurantorder with id=${id}. Maybe Restaurantorder was not found!`
          });
        } else {
          res.send({
            message: "Restaurantorder was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Restaurantorder with id=" + id
        });
      });
  };
