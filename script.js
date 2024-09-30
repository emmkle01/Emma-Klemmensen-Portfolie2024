document.addEventListener('DOMContentLoaded', function() {
  // Get the buttons by their IDs
  const projectOneButton = document.getElementById('projectOne__button');
  const projectTwoButton = document.getElementById('projectTwo__button');
  const projectThreeButton = document.getElementById('projectThree__button');

  // Add click event listeners
  if (projectOneButton) {
      projectOneButton.addEventListener('click', function() {
          window.location.href = 'projectOne.html'; // Path to Project 1 page
      });
  }

  if (projectTwoButton) {
      projectTwoButton.addEventListener('click', function() {
          window.location.href = 'projectTwo.html'; // Path to Project 2 page
      });
  }

  if (projectThreeButton) {
      projectThreeButton.addEventListener('click', function() {
          window.location.href = 'projectThree.html'; // Path to Project 3 page
      });
  }
});

//animation 
  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-section'); // Vælg alle sektioner
  
    function checkVisibility() {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          section.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility); // Lyt efter scroll
    checkVisibility(); // Tjek synlighed ved load
  });

 