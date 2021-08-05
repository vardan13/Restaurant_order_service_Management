module.exports = mongoose => {
    const restaurantorder = mongoose.model(
      "restaurantorder",
      mongoose.Schema(
        {
          RestaurantId: String,
          CustomerId: String,
          Datetime: String,
          Items: {itemid:String,Qty:String},
          Amount:String,
          Paidvia:String
        }
       
      )
    );
  
    return restaurantorder;
  };