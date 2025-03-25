// Call backend API to load approved listings
fetch('http://localhost:3000/api/listings')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('listings-container');
    container.innerHTML = ''; // Clear old content

    data.forEach(listing => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${listing.image}" class="card-img" />
        <div class="card-body">
          <h3>${listing.title}</h3>
          <p>${listing.location}</p>
          <a href="listing.html?id=${listing.id}">View Details</a>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading listings:', error);
  });
