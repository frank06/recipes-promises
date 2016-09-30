import Ember from 'ember';
const { computed, observer } = Ember;
import DS from 'ember-data';
import computedFilterByQuery from 'ember-cli-filter-by-query';

export default Ember.Controller.extend({

  ingredients: computed.alias('model.ingredients'),

  _filter1: observer('ingredients.@each.vegetarian', function() {
    this.get('ingredients').then(ingredients => {
      this.set('filter1', ingredients.filter(i => i.get('vegetarian')));
    });
  }),

  filter2: computed('ingredients.@each.vegetarian', function() {
    return this.get('ingredients').then(ingredients => {
      return ingredients.filter(i => i.get('vegetarian'));
    });
  }),

  filter3: computed('ingredients.@each.vegetarian', function() {
    return DS.PromiseArray.create({
      promise: this.get('ingredients').then(ingredients => {
        return ingredients.filter(i => i.get('vegetarian'));
      })
    });
  }),

  filter4: computedFilterByQuery('ingredients', 'name', 'input')

});
