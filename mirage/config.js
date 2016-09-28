import Mirage from 'ember-cli-mirage';

export default function() {

  this.timing = 1200;

  this.get('/recipes');
  this.get('/recipes/:id');

  this.get('/ingredients');
  this.get('/ingredients/:id');

  this.get('/tags');
  this.get('/tags/:id');
  // this.get('/tags/:id', function() {
  //   return new Mirage.Response(500, {}, { message: 'Errrrror' });
  // });

}