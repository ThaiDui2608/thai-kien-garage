
function scrollUp() {
  const scrollUp = document.querySelector('.scrollup')
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)





let userData = [
  {
    userName: "admin",
    id: "admin",
    password: "admin",
    email: "admin@gmail.com",
  },
  {
    userName: "Tran Kien",
    id: "trankien",
    password: "trankien",
    email: "trankien@gmail.com",
  },
  {
    userName: "Thanh Thai",
    id: "thanhthai",
    password: "thanhthai",
    email: "thanhthai@gmail.com",
  },
  {
    userName: "Quang Trung",
    id: "quangtrung",
    password: "quangtrung",
    email: "quangtrung@gmail.com",
  },

]
function loginAlert() {
  Swal.fire({
    icon: 'success',
    timer: 1000,
  }

  )
}

const userNameSignUpInput = document.querySelector("#user-name-signup-input")
const userIdSignUpInput = document.querySelector("#user-id-signup-input")
const userEmailSignUpInput = document.querySelector("#user-email-signup-input")
const userPasswordSignUpInput = document.querySelector("#user-password-signup-input")

// SIGN UP
function failSignUpAlert() {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Bạn nhập thiếu thông tin',
    showConfirmButton: false,
    timer: 2000,
  }

  )
}
function loginAlert() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    showConfirmButton: false,
    timer: 2000,
  }

  )
}

function failAlert() {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Sai tên đăng nhập hoặc mật khẩu',
    showConfirmButton: false,
    timer: 2000,
  }

  )

}
const fakeData = [...userData]
function signup() {
  let userDataFake = {
    userName: userNameSignUpInput.value,
    id: userIdSignUpInput.value,
    password: userPasswordSignUpInput.value,
    email: userEmailSignUpInput.value,
  }

  fakeData.push(userDataFake)

  if (
    userDataFake.userName != "" &&
    userDataFake.email != "" &&
    userDataFake.password != "" &&
    userDataFake.id != ""
  ) {

    loginAlert()
    callLoginSlide()
  } else failSignUpAlert()
}







function check() {

  for (let i = 0; i <= userData.length; i++) {

    if (((fakeData[i].id == userIdInput.value ||
      fakeData[i].email == userIdInput.value)
      && fakeData[i].password === userPasswordInput.value)) {

      loginSlide.style.display = "none"
      hideBtnLoginSignUp.style.display = "none"
      hiUser.style.display = "block"
      hiUser.innerText = `Xin chào ${fakeData[i].userName} !`
      loginAlert();

      if (document.querySelector(".small-icon-login").style.display != "none") {
        document.querySelector(".small-icon-login").style.display = "none"
      }
      break;
    }
    else failAlert()
  }
}



const clickAddToCart = document.querySelectorAll("#click-to-count")
const countCart = document.querySelector(".cart-num")
let currentCount = 0;

function count(){
  currentCount += 1;
  countCart.innerHTML = currentCount
}


