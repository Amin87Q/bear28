// script.js

// Function to show a specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Function to hide the current section
function hideSection() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
}

// Example function for buying a card
function buyCard(cardIndex) {
    const prices = [1000, 5000, 10000]; // Prices for cards
    const profits = [100, 500, 1000]; // Profits for cards

    const totalCoins = parseInt(document.getElementById('totalCoins').innerText);
    if (totalCoins >= prices[cardIndex]) {
        // Deduct the price and update profit
        document.getElementById('totalCoins').innerText = totalCoins - prices[cardIndex];
        const currentProfit = parseInt(document.getElementById('profitPerHour').innerText);
        document.getElementById('profitPerHour').innerText = currentProfit + profits[cardIndex];
        alert('Card purchased successfully!');
    } else {
        alert('Not enough coins!');
    }
}

// Initial setup
document.getElementById('clickableHamster').addEventListener('click', function() {
    const totalCoins = parseInt(document.getElementById('totalCoins').innerText);
    document.getElementById('totalCoins').innerText = totalCoins + 10; // Example: add 10 coins on hamster click
});
