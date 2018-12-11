import { addNewCompany } from '../controllers/company';

const company = app => {
  app.route('/company').post(addNewCompany);
};

export default company;
