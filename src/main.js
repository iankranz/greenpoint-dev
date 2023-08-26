const accordions = document.querySelectorAll(".accordion")

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active")
  })
})

const emailObf = "hello[at]greenpoint[dot]dev"
const email = emailObf.replace("[at]", "@").replace("[dot]", ".")
const href = `mailto:${email}`
const emailLink = document.querySelector("#email-link")
emailLink.setAttribute("href", href)
emailLink.textContent = email
