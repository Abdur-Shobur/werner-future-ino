let toggle = document.getElementById('toggle_handler');
let toggle_items = document.getElementById('toggle_menu_items');
toggle.addEventListener('click', () => {
	toggle_items.classList.toggle('hidden');
});
