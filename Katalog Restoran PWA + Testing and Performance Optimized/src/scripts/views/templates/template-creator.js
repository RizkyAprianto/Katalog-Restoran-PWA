import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="list_item">
<img loading="lazy" class="list_item_thumb"  src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" min-width="600px" min-height="400" alt="${restaurant.name}" title="${restaurant.name}">
<div class="list_item_content">
    <p class="list_item_rating">
        Rating : 
        ${restaurant.rating}
    </p>
    <h1 class="list_item_title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
    <p class="article-city" tabindex="0"><img loading="lazy" src="../pin.png" alt="pin">${restaurant.city}</p>
    <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
</div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant__name">${restaurant.name}</h2>
<img loading="lazy" class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" min-width="600px" min-height="400" alt="${restaurant.name}" />
<div class="restaurant__info">
<h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address} , Kota ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
</div>
<div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
</div>
<div class="restaurant__description">
<h3>Customer Reviews</h3>
<p class="review">${restaurant.customerReviews.map((customer) => customer.review).join(' | ')}</p>
</div>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
