/* eslint-disable no-undef */
Feature('Like Unlike Restaurant');

Before((I) => {
  // Pergi ke Home
  I.amOnPage('/');
});

Scenario('Suka dan Batal Suka', (I) => {
  // Lihat data sudah di load
  I.see('Find Restaurant', 'h1');

  // Klik resto pertama
  I.seeElement('.list_item_title a');
  I.click(locate('.list_item_title a').first());

  // Klik like
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Pergi ke favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');

  // Klik resto pertama
  I.seeElement('.list_item_title a');
  I.click(locate('.list_item_title a').first());

  // Klik batal like
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Pergi ke favorite
  I.amOnPage('/#/favorite');

  // Pastikan tidak ada resto yang disukai
  I.seeElement('.restaurant-item__not__found');
});
