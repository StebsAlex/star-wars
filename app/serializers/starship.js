import DS from 'ember-data';

const getId = url => url
  .split('/')
  .filter(x => x)
  .reverse()[0];

export default DS.JSONSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload) {
    const data = payload.results.map(({crew, name, url}) => ({
      id: getId(url),
      type: 'starship',
      attributes: {
        crew,
        name,
        url
      }
    }));

    // console.log({data}, payload);

    return {data};
  }
});
