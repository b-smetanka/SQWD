import vars from '../_vars';

(function () {

  for (let anchor of vars.$anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

      if (e.target.classList.contains('nav__link')) {
        document.querySelectorAll('.nav__link').forEach(el => el.classList.remove('nav__link--current'));

        e.target.classList.add('nav__link--current');
      }

    })
  }

  const checkHeader = () => {
    let scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 200) {
      document.querySelector('.header').classList.add('header-fixed');
    } else {
      document.querySelector('.header').classList.remove('header-fixed');
    }
  }

  window.addEventListener('scroll', checkHeader);
}());