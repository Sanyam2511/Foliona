const plants = [
  {
    name: 'ZZ Plant',
    description: 'A hardy and stylish houseplant that can tolerate low-light and drought',
    imageUrl: './plant_img/zz.png'
  },
  {
    name: 'Spider Plant',
    description: 'A tropical evergreen perennial with grass-like leaves and abundant offsets',
    imageUrl: './plant_img/spider.png'
  },
  {
    name: 'Peace Lily',
    description: 'A popular and easy-care houseplant that can grow in low light and water',
    imageUrl: './plant_img/peacelily.png'
  },
  {
    name: 'Rubber Plant',
    description: 'A houseplant that thrives in containers and is well-loved for the rich color and shine of its thick leaves',
    imageUrl: './plant_img/rubber.png'
  },
  {
    name: 'Fern Plant',
    description: 'An ancient plant that thrives in shady areas',
    imageUrl: './plant_img/fern.png'
  },
  {
    name: 'Pothos Plant',
    description: 'A popular houseplant with shiny, heart-shaped leaves and a vining nature',
    imageUrl: './plant_img/pothos.png'
  },
  {
    name: 'Prayer Plant',
    description:'Tropical ornamental plants with colorful and moving leaves',
    imageUrl: './plant_img/prayer.png'
  },
  {
    name: 'Tradescantia',
    description:'An easy-to-grow, trailing plant that is great for beginners',
    imageUrl: './plant_img/tradescantia.png'
  }

];

function renderPlantList() {
  const container = document.querySelector('.plant-list-section .plant-card-container');
  container.innerHTML = ''; 
  plants.forEach(plant => {
    const card = document.createElement('div');
    card.classList.add('plant-card');

    card.innerHTML = `
      <img src="${plant.imageUrl}" alt="${plant.name} Plant" class="plant-image" />
      <div class="plant-info">
        <h3>${plant.name}</h3>
        <p>${plant.description}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPlantList();
});


