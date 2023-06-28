function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}
window.addEventListener('scroll', scrollHeader)

//Menu mobile

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav ) {
    //ação
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active-menu-mobile');
      toggle.classList.toggle('active-bx')
    })
  }
}

showMenu('bx', 'menu-mobile')