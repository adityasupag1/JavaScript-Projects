const displayModal= document.querySelector('#popup');
function openModal(){
  displayModal.style.display= 'flex';
}
function  closeModal(){
  displayModal.style.display= 'none';
}

const tabBtns= document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn=>{
   btn.addEventListener('click', function(){
    const tabId= btn.getAttribute('data-tab');
    // remove all active class from all tab and their correspoding contents
    tabBtns.forEach(btn=>btn.classList.remove('active'));
    tabContent.forEach(content=> content.classList.remove('active'));

    // add active class to the current clicked tab and corresponding content
    btn.classList.add('active');
    document.getElementById(tabId).classList.add('active');
   });
});
