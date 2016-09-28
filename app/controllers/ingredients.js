import Ember from 'ember';
import DS from 'ember-data';
const { computed, RSVP } = Ember;

export default Ember.Controller.extend({

  filter1: computed('model', function() {

    const ingredients = this.get('model');

    return ingredients.filter(ingredient => {
      return ingredient.get('recipe').then(recipe => {
        return /stew/i.test(recipe.get('name'));
      });
    });

  }),

  filter2: computed('model', function() {

    const ingredients = this.get('model');

    const promise = RSVP.filter(ingredients.toArray(), ingredient => {
      return ingredient.get('recipe').then((recipe) => {
        return /stew/i.test(recipe.get('name'));
      });
    });

    return DS.PromiseArray.create({
      promise: promise
    });

  })

});
