const express = require("express");
const cors = require("cors");
var faker = require("faker");

const app = express();

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/users", (req, res) => {
  let users = [];

  for (let i = 0; i < 10; i++) {
    let id = faker.random.uuid();
    let name = faker.name.findName();
    let email = faker.internet.email();
    let phone = faker.phone.phoneNumber();
    let country = faker.address.county();

    users.push({
      id: id,
      name: name,
      email: email,
      phone: phone,
      country: country,
    });
  }
  res.send(users);
});

app.listen(4000, () => {
  console.log("Server is listening at PORT 4000");
});
