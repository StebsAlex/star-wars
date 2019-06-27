import DS from 'ember-data';

const getId = url => url
  .split('/')
  .filter(x => x)
  .reverse()[0];

export default DS.JSONSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload) {
    const data = payload.results.map(({mass, name, url}) => ({
      id: getId(url),
      type: 'people',
      attributes: {
        mass,
        name,
        url
      }
    }));

    console.log({data}, payload);

    return {data};
  }
});
