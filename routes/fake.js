import { addNewFake } from '../controllers/fake';

const fake = app => {
  app.route('/fake').post(addNewFake);
};

export default fake;
