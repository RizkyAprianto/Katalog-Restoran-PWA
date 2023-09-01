import FavoriteRestaurantIdb from '../../data/favorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
        <h1>Your Favorite Restaurant</h1>
        <div class="list" id="tes"></div>
    </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const moviesContainer = document.querySelector('#tes');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        moviesContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      moviesContainer.innerHTML = `
        <div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>
    `;
    }
  },
};

export default Favorite;
