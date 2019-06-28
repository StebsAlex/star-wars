import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';


module('Integration | Component | game-board', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`{{game-board}}`);

    assert.ok(this.element.textContent.trim());

    // Template block usage:
    await render(hbs`
      {{#game-board}}
      template block text
      {{/game-board}}
    `);
    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
