const Company = require('../models').Company;

export const addNewCompany = async (req, res) => {
  console.log(req.body.name);
  try {
    const data = await Company.create({
      name: req.body.name,
      email: req.body.email
    });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
