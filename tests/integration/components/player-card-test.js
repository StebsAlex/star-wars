import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import EmberObject from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

const player = EmberObject.create({
  id: '1',
  mass: '7',
  name: 'Stebin',
  url: 'https://swapi.co/api/people/1/'
});
// const player2 = EmberObject.create({
//   id: '2',
//   mass: '74',
//   name: 'StebinAlex',
//   url: 'https://swapi.co/api/people/2/'
// });

module('Integration | Component | player-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('name', 'people');
    this.set('player', player);
    await render(hbs`{{player-card player=player name=name}}`);
    assert.async();
    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#player-card}}
        template block text
      {{/player-card}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
