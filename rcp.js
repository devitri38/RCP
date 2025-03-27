function showRecipe(type) {
    let title = '';
    let details = '';
    switch (type) {
        case 'strawberry':
            title = 'Strawberry Shortcake';
            details = '- Mix flour, sugar, and butter\n- Bake at 180°C for 25 minutes\n- Decorate with strawberries and cream';
            break;
        case 'donut':
            title = 'Kawaii Donut';
            details = '- Mix flour, sugar, and eggs\n- Fry in oil until golden brown\n- Add cute icing and sprinkles';
            break;
        case 'bubbletea':
            title = 'Bubble Tea';
            details = '- Brew black tea\n- Add milk and sweetener\n- Mix with tapioca pearls';
            break;
    }
    document.getElementById('recipeTitle').innerText = title;
    document.getElementById('recipeDetails').innerText = details;
    document.getElementById('recipeModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}

function searchRecipe() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.getElementsByClassName('recipe-card');
    for (let card of cards) {
        let title = card.getElementsByTagName('h2')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}
