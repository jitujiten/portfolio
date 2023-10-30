<template>
  <div class="p-3 bg-black relative">
    <section class="webdesigntuts-workshop py-3">
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">
            <h2 class="title text-2xl md:text-5xl">
              <span class="title-word title-word-1">N</span>
              <span class="title-word title-word-2">A</span>
              <span class="title-word title-word-3">M</span>
              <span class="title-word title-word-4">E</span>
              <span class="title-word title-word-1">:</span>
            </h2></label
          >
          <input
            v-model="formData.name"
            type="text"
            name="name"
            id="name"
            class="w-4/5 md:w-3/5 p-2 ml-4"
          />
          <br />
          <span
            v-if="!isNameValid"
            class="text-sm md:text-xl text-red-600 ml-5 mt-1"
            >Name is required .</span
          >
        </div>

        <div class="p-2">
          <label for="contactNumber">
            <h2 class="title text-2xl md:text-5xl">
              <span class="title-word title-word-1">C</span>
              <span class="title-word title-word-2">O</span>
              <span class="title-word title-word-3">N</span>
              <span class="title-word title-word-4">T</span>
              <span class="title-word title-word-1">A</span>
              <span class="title-word title-word-1">C</span>
              <span class="title-word title-word-2">T</span>
              <span class="title-word title-word-3">&nbsp;</span>
              <span class="title-word title-word-4">N</span>
              <span class="title-word title-word-1">U</span>
              <span class="title-word title-word-1">M</span>
              <span class="title-word title-word-2">B</span>
              <span class="title-word title-word-3">E</span>
              <span class="title-word title-word-4">R</span>
              <span class="title-word title-word-1">:</span>
            </h2>
          </label>
          <input
            v-model="formData.contactNumber"
            type="text"
            name="contactNumber"
            id="contactNumber"
            class="w-4/5 md:w-3/5 p-2 ml-4"
          />
          <br />
          <span
            v-if="!isContactNumberValid"
            class="text-sm md:text-xl text-red-600 ml-2 mt-1"
            >Please enter a valid 10-digit contact number.</span
          >
        </div>

        <div class="p-2">
          <label for="aboutWork">
            <h2 class="title text-2xl md:text-5xl">
              <span class="title-word title-word-1">A</span>
              <span class="title-word title-word-2">B</span>
              <span class="title-word title-word-3">O</span>
              <span class="title-word title-word-4">U</span>
              <span class="title-word title-word-1">T</span>
              <span class="title-word title-word-1">&nbsp;</span>
              <span class="title-word title-word-2">W</span>
              <span class="title-word title-word-3">O</span>
              <span class="title-word title-word-4">R</span>
              <span class="title-word title-word-1">K</span>
              <span class="title-word title-word-1">:</span>
            </h2>
          </label>
          <textarea
            v-model="formData.aboutWork"
            name="aboutWork"
            id="aboutWork"
            class="w-4/5 md:w-3/5 p-2 ml-4"
          ></textarea>
        </div>

        <button
          class="glow-on-hover p-4 mt-4 ml-6 text-md text-center"
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

.title-word {
  animation: color-animation 4s linear infinite;
}

.title-word-1 {
  --color-1: #df8453;
  --color-2: #3d8dae;
  --color-3: #e4a9a8;
}

.title-word-2 {
  --color-1: #dbad4a;
  --color-2: #accfcb;
  --color-3: #17494d;
}

.title-word-3 {
  --color-1: #accfcb;
  --color-2: #e4a9a8;
  --color-3: #accfcb;
}

.title-word-4 {
  --color-1: #3d8dae;
  --color-2: #df8453;
  --color-3: #e4a9a8;
}

@keyframes color-animation {
  0% {
    color: var(--color-1);
  }
  32% {
    color: var(--color-1);
  }
  33% {
    color: var(--color-2);
  }
  65% {
    color: var(--color-2);
  }
  66% {
    color: var(--color-3);
  }
  99% {
    color: var(--color-3);
  }
  100% {
    color: var(--color-1);
  }
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
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

        fetch("https://sheetdb.io/api/v1/itwwf1ylpy76v", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        })
          .then((response) => {
            if (response.status === 201) {
              this.ToastVisible = true;
              setTimeout(() => {
                this.ToastVisible = false;
              }, 2000);
              console.log("Form submitted successfully:", this.formData);
              this.formData = {
                name: "",
                contactNumber: "",
                aboutWork: "",
              };
            } else {
              return response.json().then((data) => {
                console.error("Form submission failed. API returned:", data);
              });
            }
          })
          .catch((error) => {
            console.error("Error submitting form:", error);
          });
      }
    },
  },
};
</script>
