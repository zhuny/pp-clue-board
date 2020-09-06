<template>
  <div class="home">
    <ul>
      <li v-for="people in people_list">{{ people }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
