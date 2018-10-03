import DS from 'ember-data';

export default DS.Model.extend({

   price: DS.attr('string'),
   name: DS.attr('string'),
   color: DS.attr('string'),
   material: DS.attr('string'),
   

});
