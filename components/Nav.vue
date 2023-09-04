<template>
  <nav class="navPadding">
    <div class="logo">
      <nuxt-link to="/"
        ><img alt="JituLogo" src="~/assets/images/logo.png"
      /></nuxt-link>
    </div>
    <div
      class="hamburger"
      :class="{ toggle: isMenuOpen }"
      @click="mobileMenuOpen()"
    >
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <ul class="nav-links" :class="{ open: isMenuOpen }">
      <li :class="{ fade: isMenuOpen }">
        <nuxt-link to="/" class="navLink">Home</nuxt-link>
      </li>
      <li :class="{ fade: isMenuOpen }">
        <nuxt-link to="/about" class="navLink">About Me</nuxt-link>
      </li>

      <li :class="{ fade: isMenuOpen }">
        <nuxt-link to="/contact" class="navLink">Contact us</nuxt-link>
      </li>
    </ul>
    <div
      class="flex items-center loginDiv"
      style="position: absolute; right: 1px; height: 100px"
    >
      <label class="dropdown">
        <div class="dd-button">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-6"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
            />
          </svg> -->
        </div>

        <input type="checkbox" class="dd-input" id="test" />

        <!-- <ul class="dd-menu">
          <li><nuxt-link to="/contact">Hire Me</nuxt-link></li>
          <li><nuxt-link to="/about">About Me</nuxt-link></li>
        </ul> -->
      </label>
    </div>
  </nav>
</template>

<style>
nav {
  height: 6rem;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  z-index: 10;
}
.auth {
  display: none;
}

.logo {
  padding: 1vh 1vw;
  text-align: center;
}

.logo img {
  height: 5rem;
  width: 8rem;
}

/*Styling Links*/

.navPadding {
  padding-left: 40px;
  padding-right: 40px;
}
.nav-links {
  display: flex;
  list-style: none;
  width: 25vw;
  padding: 0 0.7vw;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
}

.nav-links li a {
  text-decoration: none;
  /* margin: 0 0.7vw; */
  font-weight: 700;
}

.nav-links li a:hover {
  color: #333333;
}

.nav-links li {
  position: relative;
}

.nav-links li a::before {
  content: "";
  display: block;
  height: 3px;
  width: 0%;
  background-color: #ec0911;
  position: absolute;
  transition: all ease-in-out 250ms;
  margin: 0 0 0 10%;
  bottom: 1px;
}

.nav-links li a:hover::before {
  width: 80%;
}

/*Styling Hamburger Icon*/
.hamburger div {
  width: 30px;
  height: 3px;
  background: #000000;
  margin: 5px;
  transition: all 0.3s ease;
}

.hamburger {
  display: none;
}

.navLink-login {
  @apply px-3 py-2 text-sm font-semibold;
  font-size: 18px;
  font-weight: 500;
  line-height: 17.23px;
}

.dropdown {
  display: inline-block;
  position: relative;
}

.dd-button {
  display: inline-block;
  border-radius: 4px;
  margin-right: 20px;
  padding: 10px 20px 10px 20px;
  background-color: #ffffff;
  cursor: pointer;
  white-space: nowrap;
}

.dd-button:hover {
  background-color: #eeeeee;
}

.dd-input {
  display: none;
}

.dd-menu {
  z-index: 1;
  position: absolute;
  top: 100%;
  left: -111px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
  margin: 2px 0 0 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  list-style-type: none;
}

.dd-input + .dd-menu {
  display: none;
}

.dd-input:hover + .dd-menu {
  display: block;
}

dd-input:hover + .dd-menu {
  display: block;
}

.dd-menu li {
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;
}

.dd-menu li:hover {
  background-color: #f6f6f6;
}

.dd-menu li a {
  display: block;
  margin: -10px -20px;
  padding: 10px 20px;
}

.dd-menu li.divider {
  padding: 0;
  border-bottom: 1px solid #cccccc;
}

/*Stying for small screens*/

@media screen and (max-width: 900px) {
  .nav-links li a {
    -webkit-text-decoration: none;
    text-decoration: none;
    margin: 0px 0.7vw;
    font-weight: 500;
    font-size: 15px;
  }

  .logo img {
    height: 4rem;
    width: 7rem;
  }

  .navPadding {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media screen and (max-width: 1200px) {
  nav {
    /* position: fixed; */
    z-index: 11;
  }
  .auth {
    display: block;
  }
  .loginDiv {
    display: none;
  }

  .hamburger {
    display: block;
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 7%;
    transform: translate(-5%, -50%);
    z-index: 12;
    transition: all 0.7s ease;
  }

  .nav-links {
    position: fixed !important;
    background: #ffffff;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    clip-path: circle(50px at 90% -20%);
    -webkit-clip-path: circle(50px at 90% -10%);
    transition: all 1s ease-out;
    pointer-events: none;
    justify-content: start !important;
    padding-top: 50px !important;
  }

  .nav-links.open li {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }

  .nav-links.open {
    z-index: 11;
    clip-path: circle(1000px at 90% -10%);
    -webkit-clip-path: circle(1000px at 90% -10%);
    pointer-events: all;
  }

  .nav-links li {
    opacity: 0;
  }

  .nav-links li:nth-child(1) {
    transition: all 0.5s ease 0.2s;
  }

  .nav-links li:nth-child(2) {
    transition: all 0.5s ease 0.4s;
  }

  .nav-links li:nth-child(3) {
    transition: all 0.5s ease 0.6s;
  }

  .nav-links li:nth-child(4) {
    transition: all 0.5s ease 0.7s;
  }

  .nav-links li:nth-child(5) {
    transition: all 0.5s ease 0.8s;
  }

  .nav-links li:nth-child(6) {
    transition: all 0.5s ease 0.9s;
    margin: 0;
  }

  .nav-links li:nth-child(7) {
    transition: all 0.5s ease 1s;
    margin: 0;
  }

  li.fade {
    opacity: 1;
  }
}

/*Animating Hamburger Icon on Click*/
.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
  transition: all 0.7s ease;
  width: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    mobileMenuOpen() {
      console.log("Function is Working");
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>