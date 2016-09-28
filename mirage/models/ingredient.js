import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  recipe: belongsTo('recipe'),
  tags: hasMany('tag')
});