const hostForm = document.getElementById('hostForm');
const cardsContainer = document.getElementById('cardsContainer');

hostForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(hostForm);

  try {
    const res = await fetch('/add-listing', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
  
    // Display new card
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${data.image}" alt="Location Image">
      <h3>${data.title}</h3>
      <p><strong>${data.location}</strong></p>
      <p>${data.description}</p>
    `;

    cardsContainer.appendChild(card);
    hostForm.reset();
  } catch (err) {
    console.log('Error uploading listing:', err);
  }
});
