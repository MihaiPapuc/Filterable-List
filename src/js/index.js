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

  // get list actions
  const listActions = ul.getElementsByClassName('list-group-item-action');

  // loop through list actions
  // for (const listAction of listActions) {
  //   if (listAction.innerHTML.toUpperCase().includes(filterValue)) {
  //     listAction.style.display = '';
  //   } else {
  //     listAction.style.display = 'none';
  //   }
  // }

  for (const listAction of listActions) {
    listAction.style.display = listAction.innerHTML
      .toUpperCase()
      .includes(filterValue)
      ? ''
      : 'none';
  }

  // listActions.forEach(listAction => {
  //   if (listAction.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
  //     listAction.style.display = '';
  //   } else {
  //     listAction.style.display = 'none';
  //   }
  // });

  // for (let i = 0; i < listActions.length; i++) {
  //   if (listActions[i].innerHTML.toUpperCase().indexOf(filterValue) > -1) {
  //     listActions[i].style.display = '';
  //   } else {
  //     listActions[i].style.display = 'none';
  //   }
  // }
}
