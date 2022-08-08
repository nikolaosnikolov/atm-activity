const submitButton = document.getElementById('submit')
const loginPage = document.getElementById('login')
const loaderContainer = document.getElementById('loader')
const root = document.getElementById('root')
const checkBox = document.getElementById('checkPass')
const labelPassword = document.getElementById('labelPass')
const password = document.getElementById('password')

root.style.setProperty('display', 'none')

submitButton.onclick = () => {
    loginPage.style.setProperty('display', 'none')
    const loader = document.createElement('div')
    const span = document.createElement('span')
    loader.setAttribute('class', 'spinner-border')
    loader.setAttribute('role', 'status')
    span.setAttribute('class', 'sr-only')

    setTimeout(() => {
        loaderContainer.style.display = 'none'
        loader.style.display = 'none'
        root.style.removeProperty('display')
    }, 3000)

    loader.appendChild(span)
    loaderContainer.appendChild(loader)
}

checkBox.onclick = () => {
    password.type === "password"
        ? (() => {
            password.type = "text"
            labelPassword.textContent = 'Hide Password'
        })()
        : (() => {
            password.type = "password"
            labelPassword.textContent = 'Show Password'
        })()
}