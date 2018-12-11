const Fake = require('../models').Fake;
const faker = require('faker');

export const addNewFake = async (req, res) => {
  var x = 0;

  try {
    while (x < 10000) {
      var randomBoolean = faker.random.boolean();
      var randomAge = faker.random.number({
        min: 48,
        max: 85
      });
      var randomProduct = faker.random.number({
        min: 1,
        max: 6
      });
      var randomMonth = faker.random.number({
        min: 1,
        max: 60
      });

      console.log(`Boolean:${randomBoolean},
         Age:${randomAge}
         Product:${randomProduct},
         Month:${randomMonth}`);
      const data = await Fake.create({
        boolean: randomBoolean,
        age: randomAge,
        productId: randomProduct,
        months: randomMonth
      });
      x++;
    }
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
