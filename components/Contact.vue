<template>
  <div class="p-3 bg-black relative">
    <section class="webdesigntuts-workshop py-3">
      <form @submit.prevent="submitForm">
        <div class="p-2">
          <label for="name" class="waviy"
            ><span style="--i: 1">N</span>
            <span style="--i: 2">A</span>
            <span style="--i: 3">M</span>
            <span style="--i: 4">E</span>
            <span style="--i: 4">:</span>
          </label>
          <input
            v-model="formData.name"
            type="text"
            name="name"
            id="name"
            class="w-4/5 md:w-3/5 p-2"
          />
          <br />
          <span v-if="!isNameValid" class="text-sm md:text-xl text-red-600"
            >Name is required.</span
          >
        </div>

        <div class="p-2">
          <label for="contactNumber" class="waviy"
            ><span style="--i: 1">C</span>
            <span style="--i: 2">O</span>
            <span style="--i: 3">N</span>
            <span style="--i: 4">T</span>
            <span style="--i: 5">A</span>
            <span style="--i: 6">C</span>
            <span style="--i: 7">T</span>
            <span style="--i: 7"> </span>
            <span style="--i: 8">N</span>
            <span style="--i: 9">U</span>
            <span style="--i: 10">M</span>
            <span style="--i: 11">B</span>
            <span style="--i: 12">E</span>
            <span style="--i: 13">R</span>
            <span style="--i: 13">:</span>
          </label>
          <input
            v-model="formData.contactNumber"
            type="text"
            name="contactNumber"
            id="contactNumber"
            class="w-4/5 md:w-3/5 p-2"
          />
          <br />
          <span
            v-if="!isContactNumberValid"
            class="text-sm md:text-xl text-red-600"
            >Please enter a valid 10-digit contact number.</span
          >
        </div>

        <div class="p-2">
          <label for="aboutWork" class="waviy">
            <span style="--i: 1">A</span>
            <span style="--i: 2">B</span>
            <span style="--i: 3">O</span>
            <span style="--i: 4">U</span>
            <span style="--i: 5">T</span>
            <span style="--i: 5"> </span>
            <span style="--i: 6">W</span>
            <span style="--i: 7">O </span>
            <span style="--i: 8">R</span>
            <span style="--i: 9">K</span>
            <span style="--i: 9">:</span>
          </label>
          <textarea
            v-model="formData.aboutWork"
            name="aboutWork"
            id="aboutWork"
            class="w-4/5 md:w-3/5 p-2"
          ></textarea>
        </div>

        <button
          class="glow-on-hover p-4 mt-4 ml-1 text-md text-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
    <Toast v-if="ToastVisible" />
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
label {
  display: block;
  margin: 20px;
  overflow: auto;
  font-family: sans-serif;
  font-size: 18px;
  color: #444;
  text-shadow: 0 0 2px #000;
  padding: 20px 10px 10px 0;
}
input,
textarea {
  width: 150px;
  border: 2px solid #aeaeb5;
  border-radius: 6px;
  font-size: 20px;
  padding: 2px;
  margin-top: -10px;
}
input:focus {
  outline: none;
  border-color: #26bf47;
  box-shadow: 0 0 10px #26bf47;
}
textarea:focus {
  outline: none;
  border-color: #26bf47;
  box-shadow: 0 0 10px #26bf47;
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
import axios from "axios";

import Toast from "../components/Toast.vue";
export default {
  data() {
    return {
      formData: {
        name: "",
        contactNumber: "",
        aboutWork: "",
      },
      isNameValid: true,
      isContactNumberValid: true,
      ToastVisible: false,
    };
  },
  components: {
    Toast,
  },
  methods: {
    async submitForm() {
      this.isNameValid = this.formData.name !== "";
      this.isContactNumberValid = /^\d{10}$/.test(this.formData.contactNumber);

      if (this.isNameValid && this.isContactNumberValid) {
        // Prepare the data to be sent to the API
        const postData = {
          name: this.formData.name,
          contactNumber: this.formData.contactNumber,
          aboutWork: this.formData.aboutWork,
        };

        try {
          const response = await axios.post(
            "https://sheetdb.io/api/v1/itwwf1ylpy76v",
            postData
          );
          if (response.status === 201) {
            this.ToastVisible = true;
            setTimeout(() => {
              this.ToastVisible = false;
            }, 2000);
            console.log("Form submitted successfully:", this.formData);
          } else {
            console.error(
              "Form submission failed. API returned:",
              response.data
            );
          }
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      }
    },
  },
};
</script>
