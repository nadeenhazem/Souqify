<template>
  Main Page
  <p>Welcome, {{ userData?.fullName }}</p>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from "../../Auth/store";

export default defineComponent({
  setup() {
    const userStore = useAuthStore();
    const userData = userStore.userData;
    return {
      userData,
    };
  },
});
</script>
