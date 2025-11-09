const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const secretToggle = document.getElementById('secretToggle');
const secretMsg = document.getElementById('secretMsg');
const moodBox = document.getElementById('moodBox');
const growBtn = document.getElementById('growBtn');
const shrinkBtn = document.getElementById('shrinkBtn');
const moodEmoji = document.getElementById('moodEmoji');

nameInput.addEventListener('input', (e) => {
const name = e.target.value.trim();
if (name.length === 0) {
greeting.innerHTML = 'Hello, friend! <span class="emoji">👋</span>';
greeting.style.color = '';
} else {
greeting.innerHTML = `Hello, ${name}! <span class="emoji">👋</span>`;
greeting.style.color = '#84cc16'; 
}
});

modeToggle.addEventListener('change', (e) => {
if (e.target.checked) {
body.classList.add('night');
} else {
body.classList.remove('night');
}
});

let secretVisible = false;
secretToggle.addEventListener('click', () => {
secretVisible = !secretVisible;
secretMsg.style.display = secretVisible ? 'block' : 'none';
secretToggle.innerText = secretVisible ? 'Hide Secret Message' : 'Show Secret Message';
});

const STEP = 20;
const MIN_SIZE = 80;
const MAX_SIZE = 350;

function getSize() {
const style = window.getComputedStyle(moodBox);
return parseFloat(style.width);
}

growBtn.addEventListener('click', () => {
const size = getSize();
if (size < MAX_SIZE) moodBox.style.width = moodBox.style.height = `${size + STEP}px`;
});

shrinkBtn.addEventListener('click', () => {
const size = getSize();
if (size > MIN_SIZE) moodBox.style.width = moodBox.style.height = `${size - STEP}px`;
});


/*
“What is the difference between ".innerHTML" and ".innerText”?

- .innerHTML returns/sets the HTML content (it includes any HTML tags inside the element).
Example: element.innerHTML = "<strong>Hi</strong>";
This will render a bold "Hi" inside the element.

- .innerText returns/sets the visible text content of an element (it strips any HTML markup
and represents what the user actually sees). It also respects CSS and layout, and can be
influenced by styles like "display: none".
Example: element.innerText = "<strong>Hi</strong>";
This will display the text "<strong>Hi</strong>" literally, without any bold formatting.
*/