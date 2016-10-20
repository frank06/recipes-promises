import Ember from 'ember';
const { computed, observer } = Ember;
import DS from 'ember-data';
import computedFilterByQuery from 'ember-cli-filter-by-query';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({

  ingredients: computed.alias('model.ingredients'),

  _filter1: observer('ingredients.@each.vegetarian', function() {
    this.get('ingredients').then(ingredients => {
      this.set('filter1', ingredients.filterBy('vegetarian'));
    });
  }),

  filter2: computed('ingredients.@each.vegetarian', function() {
    return this.get('ingredients').then(ingredients => {
      return ingredients.filterBy('vegetarian');
    });
  }),

  filter3: computed('ingredients.@each.vegetarian', function() {
    return DS.PromiseArray.create({
      promise: this.get('ingredients').then(ingredients => {
        return ingredients.filterBy('vegetarian');
      })
    });
  }),

  filter4: computed('ingredients.@each.vegetarian', function() {
    return this.task1.perform();
  }),

  task1: task(function * (reload = false) {
    const ingredients = yield this.get('ingredients').reload();
    return ingredients.filterBy('vegetarian');
  }).keepLatest(),

  filter5: computedFilterByQuery('ingredients', 'name', 'input'),

  actions: {

    reload() {
      this.notifyPropertyChange('ingredients.@each.vegetarian');
    }

  }

});