<template>
  <div class="p-3 bg-black relative">
    <section class="py-1">
      <div class="flex justify-between p-5">
        <h1 class="text-[#ff004f] font-bold text-4xl pb-5">About Me..</h1>
        <button class="light-icon-button" @click="toggleHoverEffect">
          <i
            >{{ isHovered ? "On" : "Off" }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </i>
        </button>
      </div>
      <div class="container space-y-10">
        <h2
          class="font-bold text-xl md:text-3xl"
          :class="{ hovered: isHovered }"
        >
          Hello, I'm Jitendra Sahu, a passionate Frontend Developer with a
          strong foundation in web technologies. With a proven track record of
          creating stunning user interfaces and seamless user experiences, I
          specialize in using cutting-edge tools and frameworks like React.js,
          HTML, CSS, Tailwind CSS, Bootstrap, and Nuxt.js.<br />
          My journey in web development has equipped me with a deep
          understanding of responsive design, efficient code implementation, and
          an eye for detail. I thrive on turning creative ideas into functional,
          visually appealing websites that engage users and deliver results. As
          an avid learner and collaborator, I actively contribute to projects on
          GitHub, demonstrating my commitment to open-source development and
          staying at the forefront of industry trends. I'm always excited to
          take on new challenges and work with clients to bring their web
          projects to life.<br />
          If you're looking for a skilled frontend developer who can transform
          your vision into a reality and deliver top-notch web solutions, feel
          free to get in touch. I'm eager to collaborate and help you achieve
          your goals. Let's build something amazing together!
        </h2>
        <div>
          <nuxt-link to="contact">
            <button class="glow-on-hover" type="button">
              Conatct Me!
            </button></nuxt-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

h2 {
  color: #534f4f;
  cursor: pointer;
  transition: 0.5s;
}

h2.hovered {
  color: #fff;
  text-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}

.light-icon-button {
  border: none;
  cursor: pointer;
  background-color: black;
  color: #fff;
}
.light-icon-button:hover {
  text-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
.glow-on-hover {
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: black;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    toggleHoverEffect() {
      this.isHovered = !this.isHovered;
    },
  },
};
</script>
