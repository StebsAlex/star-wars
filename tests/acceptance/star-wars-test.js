import {module, test} from 'qunit';
import {visit, currentURL, click} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | star wars', function (hooks) {
  setupApplicationTest(hooks);

  test('Visit the Game page', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/game');
  });
  test('Visit the Starship page', async function (assert) {
    await visit('/');

    await click('.starship')
    assert.equal(currentURL(), '/starship');
  });
  test('Visit the People page', async function (assert) {
    await visit('/');

    await click('.people')
    assert.equal(currentURL(), '/people');
  });
});
