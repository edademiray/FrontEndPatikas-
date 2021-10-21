let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (massage) => `<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong> ${massage}!</strong> Lütfen Kontrol Ediniz.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    } else {
        alertDOM.innerHTML = alertFunction("Hatalı-Eksik  Giriş Yaptınız")
    }
}

let userListDom = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName}   <span class="badge bg-primary rounded-pill ms-2 me-auto">    ${score}</span>`
    liDOM.classList.add('list-group-item', 'd-flex', 'ustify-content-between', 'align-items-center')
    userListDom.append(liDOM)

}