import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1>Find Restaurant</h1>
                <div class="list" id="tes"></div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDBSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#tes');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
