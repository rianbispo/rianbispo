function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}
window.addEventListener('scroll', scrollHeader)

// DropDown menu
const dropDownItem1 = document.getElementById('dropdown-item-1');
const dropDownItem2 = document.getElementById('dropdown-item-2');
const dropDownItem3 = document.getElementById('dropdown-item-3');

const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');

function showDropDown1(e) {
  e.preventDefault();
  dropDownItem1.classList.toggle('active-dropdown-menu');
  dropDownItem2.classList.remove('active-dropdown-menu');
  dropDownItem3.classList.remove('active-dropdown-menu');
}

function showDropDown2(e) {
  e.preventDefault();
  dropDownItem1.classList.remove('active-dropdown-menu');
  dropDownItem2.classList.toggle('active-dropdown-menu');
  dropDownItem3.classList.remove('active-dropdown-menu');
}

function showDropDown3(e) {
  e.preventDefault();
  dropDownItem1.classList.remove('active-dropdown-menu');
  dropDownItem2.classList.remove('active-dropdown-menu');
  dropDownItem3.classList.toggle('active-dropdown-menu');
}

function removeDropDown() {
  dropDownItem1.classList.remove('active-dropdown-menu')
  dropDownItem2.classList.remove('active-dropdown-menu')
  dropDownItem3.classList.remove('active-dropdown-menu')
}

menuItem1.addEventListener('click', showDropDown1);
menuItem2.addEventListener('click', showDropDown2);
menuItem3.addEventListener('click', showDropDown3);

dropDownItem1.addEventListener('mouseleave', removeDropDown);
dropDownItem2.addEventListener('mouseleave', removeDropDown);
dropDownItem3.addEventListener('mouseleave', removeDropDown);

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