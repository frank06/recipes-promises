import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  vegetarian: attr('boolean'),
  recipe: belongsTo(),
  tags: hasMany()
});