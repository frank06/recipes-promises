import Ember from 'ember';
import DS from 'ember-data';
const { computed, RSVP } = Ember;

export default Ember.Controller.extend({

  filter1: computed('model', function() {

    const ingredients = this.get('model');

    return ingredients.filter(ingredient => {
      return ingredient.get('recipe').then(recipe => {
        return recipe.get('name') === "Jamaican Oxtail Stew";
      });
    });

  }),

  filter2: computed('model', function() {

    const ingredients = this.get('model');

    const promise = RSVP.filter(ingredients.toArray(), ingredient => {
      return ingredient.get('recipe').then((recipe) => {
        return recipe.get('name') === "Jamaican Oxtail Stew";
      });
    });

    return DS.PromiseArray.create({
      promise: promise
    });

  })

});
