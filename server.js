const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51MigWXBlMs4Sl1WT79R8bfpi9O1NHlUKw2zBvkfwaT11sZ02mCc9TV28E1YzdAtBcvFEFvvQEcu84w0oEXWRbhiQ00PJe1hfmH');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity
    });
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel'
    });

    res.send({
      url: session.url
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(4000, () => console.log('listening on port 4000'));
