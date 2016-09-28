export default function(server) {

  server.loadFixtures('recipes');
  server.loadFixtures('ingredients');
  server.loadFixtures('tags');

}