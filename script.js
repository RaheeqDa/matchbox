const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  document.body.classList.toggle('menu-open', open);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

const taskCards = document.querySelectorAll('.task-card');
const matchName = document.getElementById('matchName');
const matchReason = document.getElementById('matchReason');

taskCards.forEach(card => {
  card.addEventListener('click', () => {
    taskCards.forEach(item => item.classList.remove('selected'));
    card.classList.add('selected');
    matchName.textContent = card.dataset.tool;
    matchReason.textContent = card.dataset.reason;
    document.getElementById('recommendation').animate(
      [{ transform: 'translateY(4px)', opacity: .65 }, { transform: 'translateY(0)', opacity: 1 }],
      { duration: 260, easing: 'ease-out' }
    );
  });
});

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    filter.classList.add('active');
    const category = filter.dataset.filter;
    projects.forEach(project => {
      project.classList.toggle('hidden', category !== 'all' && project.dataset.category !== category);
    });
  });
});
