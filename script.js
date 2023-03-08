const mainMenu = document.querySelector('.main-menu');
const enterItemsScreen = document.querySelector('#enter-items-screen');
const processPaymentsScreen = document.querySelector('#process-payments-screen');
const manageInventoryScreen = document.querySelector('#manage-inventory-screen');
const viewInventoryScreen = document.querySelector('#view-inventory-screen');
const editInventoryScreen = document.querySelector('#edit-inventory-screen');
const returnToMainMenuBtn = document.querySelector('#return-to-main-menu-btn');
const enterItemsBtn = document.querySelector('#enter-items-btn');
const processPaymentsBtn = document.querySelector('#process-payments-btn');
const manageInventoryBtn = document.querySelector('#manage-inventory-btn');
const addItemBtn = document.querySelector('#add-item-btn');
const processPaymentBtn = document.querySelector('#process-payment-btn');
const viewInventoryBtn = document.querySelector('#view-inventory-btn');
const editInventoryBtn = document.querySelector('#edit-inventory-btn');
const returnToManageInventoryBtn = document.querySelector('#return-to-manage-inventory-btn');

enterItemsBtn.addEventListener('click', () => {
  mainMenu.classList.add('hidden');
  enterItemsScreen.classList.remove('hidden');
});

processPaymentsBtn.addEventListener('click', () => {
  mainMenu.classList.add('hidden');
  processPaymentsScreen.classList.remove('hidden');
});

manageInventoryBtn.addEventListener('click', () => {
  mainMenu.classList.add('hidden');
  manageInventoryScreen.classList.remove('hidden');
});

returnToMainMenuBtn.addEventListener('click', () => {
  enterItemsScreen.classList.add('hidden');
  processPaymentsScreen.classList.add('hidden');
  manageInventoryScreen.classList.add('hidden');
  viewInventoryScreen.classList.add('hidden');
  editInventoryScreen.classList.add('hidden');
  mainMenu.classList.remove('hidden');
});

viewInventoryBtn.addEventListener('click', () => {
  manageInventoryScreen.classList.add('hidden');
  viewInventoryScreen.classList.remove('hidden');
});

editInventoryBtn.addEventListener('click', () => {
  manageInventoryScreen.classList.add('hidden');
  editInventoryScreen.classList.remove('hidden');
});

returnToManageInventoryBtn.addEventListener('click', () => {
  viewInventoryScreen.classList.add('hidden');
  editInventoryScreen.classList.add('hidden');
  manageInventoryScreen.classList.remove('hidden');
});

addItemBtn.addEventListener('click', () => {
  // TODO: Add code to add item to inventory
});

processPaymentBtn.addEventListener('click', () => {
  // TODO: Add code to process payment
});

// Add event listener to each button that corresponds to a screen
enterItemsBtn.addEventListener('click', () => {
  toggleScreen(enterItemsScreen);
});

processPaymentsBtn.addEventListener('click', () => {
  toggleScreen(processPaymentsScreen);
});

manageInventoryBtn.addEventListener('click', () => {
  toggleScreen(manageInventoryScreen);
});

viewInventoryBtn.addEventListener('click', () => {
  toggleScreen(viewInventoryScreen);
});

editInventoryBtn.addEventListener('click', () => {
  toggleScreen(editInventoryScreen);
});

// Define function to toggle screen visibility
function toggleScreen(screen) {
  screen.classList.toggle('hidden');
}
