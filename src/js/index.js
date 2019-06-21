// Create an input element
const filter = document.getElementById('inputElement');
filter.addEventListener('keyup', filterList);

function filterList() {
  //   get value of input
  const filterValue = document
    .getElementById('inputElement')
    .value.toUpperCase();

  // get element ul
  const ul = document.getElementById('list');

  //   get lis form ul
  const li = ul.querySelectorAll('li.collection-item');

  // loop through ul
  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName('a')[0];
    // check----//if minim one element match
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
