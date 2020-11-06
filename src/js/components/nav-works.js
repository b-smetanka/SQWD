import vars from '../_vars';

(function () {

  for (let nav of vars.$workLink) {
    nav.addEventListener('click', function (e) {
      e.preventDefault()

      if (e.target.classList.contains('works-nav__link')) {
        document.querySelectorAll('.works-nav__link').forEach(el => el.classList.remove('works-nav__link--current'));

        e.target.classList.add('works-nav__link--current');
      }

      const filterBox = document.querySelectorAll('.card__box');
      let filterClass = e.target.dataset['filter'];

      filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });;
    })
  }





}());


