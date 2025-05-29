const plants = [
  {
    name: "Fiddle Leaf Fig",
    imageUrl: "./plant_img/fiddle.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "Indoor",
    addedDate: new Date().toISOString()
  },
  {
    name: "Snake Plant",
    imageUrl: "./plant_img/snake.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "Indoor",
    addedDate: new Date().toISOString()
  },
  {
    name: "Aloe Vera",
    imageUrl: "./plant_img/aloevera.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "Outdoor",
    addedDate: new Date().toISOString()
  }
];

const plantContainer = document.querySelector('.plant-card-container');
const form = document.querySelector('.add-plant-form');

function renderPlants() {
  plantContainer.innerHTML = '';

  plants.forEach((plant, index) => {
    const card = document.createElement('div');
    card.className = 'plant-card';

    card.innerHTML = `
      <img src="${plant.imageUrl}" alt="${plant.name}" class="plant-image" />
      <div class="plant-info">
        <h3>${plant.name}</h3>
        <p>${plant.description}</p>
      </div>
      <button class="delete-btn" data-index="${index}">🗑️</button>
    `;

    plantContainer.appendChild(card);
  });

  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const idx = this.getAttribute('data-index');
      const confirmed = confirm('Are you sure you want to delete this plant?');
      if (confirmed) {
        plants.splice(idx, 1);
        renderPlants();
        updateDashboard(plants);
      }
    });
  });
}

function updateDashboard(plants) {
  document.getElementById('total-plants').textContent = plants.length;

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const recentCount = plants.filter(plant => new Date(plant.addedDate) >= oneWeekAgo).length;
  document.getElementById('recent-plants').textContent = recentCount;

  const typeCounts = plants.reduce((acc, plant) => {
    const type = plant.type || "Unknown";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const typeList = document.getElementById('plant-type-list');
  typeList.innerHTML = '';

  for (const [type, count] of Object.entries(typeCounts)) {
    const li = document.createElement('li');
    li.textContent = `${type}: ${count}`;
    typeList.appendChild(li);
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.plantName.value.trim();
  const imageUrl = form.plantImageUrl.value.trim();
  const description = form.description.value.trim();
  const plantType = form.plantType ? form.plantType.value.trim() : "Unknown";

  if (!name || !imageUrl || !plantType || !description) {
    alert('Please fill out all fields.');
    return;
  }

  const newPlant = {
    name,
    imageUrl,
    description,
    type: plantType,
    addedDate: new Date().toISOString()
  };

  plants.push(newPlant);

  renderPlants();
  updateDashboard(plants);

  form.reset();
});

renderPlants();
updateDashboard(plants);
