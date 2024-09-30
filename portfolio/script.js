//buttons//

//prodjectOne//
document.getElementById('projectOne__button').addEventListener('click', function() {
    window.location.href = 'projectOne.html';
  });

  //prodjectTwo//
document.getElementById('projectTwo__button').addEventListener('click', function() {
    window.location.href = 'projectTwo.html';
  });

//prodjectThree//
document.getElementById('projectThree__button').addEventListener('click', function() {
    window.location.href = 'projectThree.html';
  });


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

 