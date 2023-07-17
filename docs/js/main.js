function docReady(fn) {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
docReady(function () {
    let menuItems = document.querySelectorAll('.main-menu__link')
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            document.body.classList.remove('menu-opened')
            document.getElementById('main-menu').classList.remove('menu-opened')
            document.getElementById('btn-menu').classList.remove('is-active')
        })
    })
});

console.log('public/main.js loaded!')
