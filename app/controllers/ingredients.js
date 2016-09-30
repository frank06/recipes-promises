import Ember from 'ember';
import DS from 'ember-data';
const { computed, RSVP } = Ember;

export default Ember.Controller.extend({

  filter1: computed('model', function() {
    return this.get('model').filter(ingredient => {
      return ingredient.get('recipe').then(recipe => {
        return /stew/i.test(recipe.get('name'));
      });
    });
  }),

  filter2: computed('model', function() {
    const promise = RSVP.filter(this.get('model').toArray(), ingredient => {
      return ingredient.get('recipe').then((recipe) => {
        return /stew/i.test(recipe.get('name'));
      });
    });

    return DS.PromiseArray.create({
      promise: promise
    });
  })

});
