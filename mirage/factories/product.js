import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  price()
  {
    return faker.commerce.price();
  },
  name()
  {
    return faker.commerce.product();
  },
  color()
  {
    return faker.commerce.color();
  },
  material()
  {
    return faker.commerce.productMaterial();
  },

  id() {
  return faker.helpers.slugify(this.name);
  }


});
