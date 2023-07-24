<template>
  <div>
    <header>
      <div class="logo">Nordic Rose</div>
      <button v-if="isMobile" class="hamburger" @click="toggleMenu">
        <span v-if="!showMenu">&#9776;</span>
        <span class="close-hamburger" v-else>&#10006;</span>
      </button>
      <nav :class="isMobile && showMenu ? 'menu-mobile' : 'menu-desktop'">
        <router-link to="/" exact class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
      </nav>
    </header>
  </div>
</template>

<!-- 
    checkMobile() {
  if (window.innerWidth <= 768) {
    this.isMobile = true;
  } else {
    this.isMobile = false;
  }
} 
-->
  
  <script>
export default {
  data() {
    return {
      showMenu: false,
      isMobile: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },

};
</script>
  
  <style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f2f2f2;
  padding: 2.5em;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.hamburger {
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.menu-desktop {
  display: flex;
  a {
    padding: 0.5rem;
    text-decoration: none;
    color: #333;
    position: relative;

    &.router-link-exact-active {
      font-weight: bold;

      &::after {
        content: "";
        bottom: -42px;
        right: 5px;
        position: absolute;
        width: 45px;
        height: 3px;
        background-color: black;
      }
    }
  }
}

.menu-mobile {
  display: none;
  flex-direction: column;
  align-items: flex-end;
  a {
    padding: 0.5rem;
    text-decoration: none;
    color: #333;

    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}

@media (max-width: 768px) {
  .menu-desktop {
    display: none;
  }

  .menu-mobile {
    display: flex;
  }
}
</style>
  