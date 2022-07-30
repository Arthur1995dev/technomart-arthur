const login = document.querySelector('.login');
const registration = document.querySelector('.registration');
const authorizer = document.querySelector('.authorizer');
const exit = authorizer.querySelector('.fa-right-to-bracket');


login.addEventListener('click', function(evt) {
    evt.preventDefault();
    login.classList.add('hidden');
    registration.classList.add('hidden');
    authorizer.classList.add('authorized');
})

exit.addEventListener('click', function(evt) {
    evt.preventDefault();
    login.classList.remove('hidden');
    registration.classList.remove('hidden');
    authorizer.classList.remove('authorized');
})