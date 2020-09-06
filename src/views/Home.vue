<template>
  <div class="home">
    <ul>
      <li v-bind:key="people" v-for="(people, index) in game_input.people_list">
        <span>{{ people.name }}</span>
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
    add_people() {
      this.game_input.people_list.push({
        name: this.new_people,
        answer: {}
      });
      this.new_people = "";
    },
    remove_people(index) {
      this.game_input.people_list.splice(index, 1);
    }
  }
};
</script>
