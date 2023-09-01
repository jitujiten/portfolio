<template>
  <div>
    <section
      class="w-full bg-black flex flex-col md:flex-row gap-12 justify-center items-center h-5/6 md:h-screen lg:h-screen p-5"
    >
      <div class="waviy p-3">
        <span style="--i: 1">I</span>
        <br />
        <span style="--i: 2">A</span>
        <span style="--i: 3">M</span>
        <span style="--i: 3"> </span>
        <span style="--i: 4">A</span>
        <span style="--i: 4"> </span>
        <span style="--i: 5">F</span>
        <span style="--i: 6">R</span>
        <span style="--i: 7">O</span>
        <span style="--i: 8">N</span>
        <span style="--i: 9">T</span>
        <span style="--i: 10">E</span>
        <span style="--i: 11">N</span>
        <span style="--i: 12">D</span>
        <br />
        <span style="--i: 13">D</span>
        <span style="--i: 14">E</span>
        <span style="--i: 15">V</span>
        <span style="--i: 16">L</span>
        <span style="--i: 17">O</span>
        <span style="--i: 18">P</span>
        <span style="--i: 19">E</span>
        <span style="--i: 20">R</span>
      </div>
      <div
        class="p-4"
        id="tilt"
        @mousemove="handleMove"
        @mouseout="resetTransform"
        @mousedown="simulateClick"
        @mouseup="resetTransform"
      >
        <img
          class="h-1/6 md:h-1/6 rounded-full containers"
          src="~/assets/images/IMG_20200303_161740-removebg-preview.png"
          alt="myImage Logo"
        />
      </div>
    </section>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");

.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  font-size: 45px;
}

.waviy span {
  font-family: "Alfa Slab One", cursive;
  position: relative;
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(0.1s * var(--i));
}

@media (max-width: 768px) {
  .waviy {
    -webkit-box-reflect: below -10px linear-gradient(transparent, transparent);
    font-size: 25px;
  }
}
@keyframes waviy {
  0%,
  40%,
  100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
}
.containers {
  box-shadow: 1px 2px 60px 4px #ff004f;
}
</style>
<script>
export default {
  head() {
    return {
      title: "Home",
    };
  },

  data() {
    return {};
  },

  methods: {
    handleMove(event) {
      console.log(this.width);
      this.el = this.$el.querySelector("#tilt");
      this.height = this.el.clientHeight;
      this.width = this.el.clientWidth;

      const xVal = event.layerX;
      const yVal = event.layerY;
      const yRotation = 20 * ((xVal - this.width / 2) / this.width);
      const xRotation = -20 * ((yVal - this.height / 2) / this.height);
      const transformString = `perspective(500px) scale(1.03) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      this.el.style.transform = transformString;
    },
    resetTransform() {
      this.el.style.transform =
        "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    },
    simulateClick() {
      this.el.style.transform =
        "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
    },
  },
};
</script>
