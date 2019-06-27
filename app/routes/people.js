import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    //debugger;
    return this.store.findAll('people');
  },
  afterModel() {
    //debugger;
  }
});
