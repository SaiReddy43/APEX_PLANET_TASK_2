// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');

  if (name.value.trim() === '' || email.value.trim() === '') {
    alert("All fields are required.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
  name.value = '';
  email.value = '';
});

// To-do list logic
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button onclick="this.parentElement.remove()">Remove</button>
  `;

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
