

const arrow_left_button = document.getElementById('arrow-left');
const arrow_right_button = document.getElementById('arrow-right');

const arrow_icon_left = document.getElementById('angle-left');
const arrow_icon_right = document.getElementById('angle-right');

function showLeft(){
    const side_menu_left = document.getElementById('side-menu-left');

    if (side_menu_left.style.width == '350px'){
        side_menu_left.style.width = '0px';
        arrow_icon_left.style.transform = 'rotate(180deg)';
    } else {
        side_menu_left.style.width = '350px';
        arrow_icon_left.style.transform = 'rotate(0deg)';
    }
}

function showRight(){
    const side_menu_right = document.getElementById('side-menu-right');

    if (side_menu_right.style.width == '350px'){
        side_menu_right.style.width = '0px';
        arrow_icon_right.style.transform = 'rotate(180deg)';
    } else {
        side_menu_right.style.width = '350px';
        arrow_icon_right.style.transform = 'rotate(0deg)';
    }
}

arrow_left_button.addEventListener('click', showLeft);
arrow_right_button.addEventListener('click', showRight);

const profile = document.getElementById('profile');
const profileList = document.getElementById('profile-list');
const down = document.getElementById('down');

function showProfileList() {
    if (profileList.style.height === '0px') {
        profileList.style.height = '20vh';
        down.style.transform = 'rotate(180deg)';
    } else {
        profileList.style.height = '0px';
        down.style.transform = 'rotate(0deg)';
    }
}

function hideProfileListOnClickOutside(event) {
    if (event.target !== down && !profileList.contains(event.target)) {
        profileList.style.height = '0px';
        down.style.transform = 'rotate(0deg)';
    }
}

document.body.addEventListener('click', hideProfileListOnClickOutside);
down.addEventListener('click', showProfileList);


const create = document.getElementById('create');
const forms = document.getElementById('forms');

function showForms() {
    if (forms.style.height === '0px') {
        forms.style.height = '185px';
    } else {
        forms.style.height = '0px';
    }
}

function hideFormsOnClickOutside(event) {
    if (event.target !== create && !forms.contains(event.target)) {
        forms.style.height = '0px';
    }
}

document.body.addEventListener('click', hideFormsOnClickOutside);
create.addEventListener('click', showForms);

var modalTriggers = document.querySelectorAll('.btn-forms');
var modals = document.querySelectorAll('.modal');

  modalTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      var modalId = this.getAttribute('data-modal-target');
      var modal = document.getElementById(modalId);
      modal.style.display = 'block';
    });
  });


  window.addEventListener('click', function(event) {
    modals.forEach(function(modal) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });

  var datefile = document.querySelectorAll('.date-file');

  var today_date = new Date();
  
  
  datefile.forEach(function(date) {
      date.value = formatDate(today_date);
  })
  
  function formatDate(date) {
      var year = date.getFullYear();
      var month = (date.getMonth() + 1).toString().padStart(2, "0");
      var day = date.getDate().toString().padStart(2, "0");
       return year + "-" + month + "-" + day;
  }
  
  $(document).ready(function(){
      var range = 4;
      if (!isNaN(range) && range > 0) { 
          for (var i = 0; i < range; i++) {
              $("#myTable tbody").append(`
                  <tr>
                      <td>New Reference No ${i+1}</td>
                      <td>New Requester name ${i+1}</td>
                      <td>New type of form ${i+1}</td>
                      <td>New date requested ${i+1}</td>
                      <td>New status ${i+1}</td>
                  </tr>
              `);
          }
      }  else {
          alert("no data")
      }
  });
  
  
  




