import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  ingredients: hasMany('ingredient')
});