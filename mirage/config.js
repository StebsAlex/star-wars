export default function () {
  this.namespace = '/api';

  this.get('/people', function () {
    return {
      count: 12,
      next: 'www.bbc.co.uk',
      previous: 'www.google.co.uk',
      results: [{
        name: 'Stebin Alex',
        height: "173",
        mass: "74",
        url: "https://swapi.co/api/people/1/"
      },
      {
        name: 'Robbo ',
        height: "178",
        mass: "80",
        url: "https://swapi.co/api/people/2/"
      },
      {
        name: 'Icy',
        height: "165",
        mass: "50",
        url: "https://swapi.co/api/people/3/"
      }
      ]
    }
  })
}

// These comments are here to help you get started. Feel free to delete them.

/*
  Config (with defaults).

  Note: these only affect routes defined *after* them!
*/

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

/*
  Shorthand cheatsheet:

  this.get('/posts');
  this.post('/posts');
  this.get('/posts/:id');
  this.put('/posts/:id'); // or this.patch
  this.del('/posts/:id');

  http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
*/
