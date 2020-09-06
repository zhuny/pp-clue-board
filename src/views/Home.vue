<template>
  <div class="home">
    <ul>
      <li v-bind:key="people" v-for="(people, index) in people_list">
        <span>{{ people }}</span>
        <button v-on:click="remove_people(index)" v-if="index > 0">삭제</button>
      </li>
      <li>
        <label for="new_people">이름</label>
        <input type="text" v-model="new_people" id="new_people" />
        <button v-on:click="add_people()">추가</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      new_people: ""
    };
  },
  methods: {
    add_people() {},
    remove_people(index) {
      return index;
    }
  }
};
</script>
