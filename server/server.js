const express = require("express");
var shortid = require("shortid");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const Razorpay = require("razorpay");
app.use(cors());




app.post("/pay", (req, res) => {
  console.log(
    'jkbsdkj'
  )
  var instance = new Razorpay({
    key_id: 'rzp_test_R35cwM2Z5iHjvb',
    key_secret: 'wCYQGm7vMefGvkRrAFoNeQd0',
  });

  var options = {
    amount: 50000, // amount in the smallest currency unit
    currency: "INR",
    receipt: shortid.generate(),
    payment_capture: 1
  };

  instance.orders.create(options, function (err, order) {
    console.log('from order',order)
    res.json({
     id:order.id,
     currency:order.currency,
     amount:order.amount
    })
  });
});

app.listen(PORT, () => {
  console.log("server is running at port 8000");
});
