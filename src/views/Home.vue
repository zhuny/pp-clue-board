<template>
  <div class="home">
    <ul>
      <li
        v-bind:key="people.name"
        v-for="(people, index) in game_input.people_list"
      >
        <span class="people-name">{{ people.name }}</span>
        <button
          class="remove-people-btn"
          v-on:click="remove_people(index)"
          v-if="index > 0"
        >
          삭제
        </button>
      </li>
      <li>
        <input
          class="new-people-name"
          type="text"
          v-model="new_people"
          placeholder="이름 입력"
        />
        <button class="add-people-btn" v-on:click="add_people()">추가</button>
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

<style scoped>
ul {
  list-style-type: none;
}

ul li {
  display: flex;
  padding: 0.5rem 1rem;
  border: 1px solid #42b983;
  margin-bottom: 0.25rem;
  border-radius: 100px;
}

ul li button {
  padding: 0.25rem 0.5em;
  border-radius: 100px;
  border: none;
}

ul li button.remove-people-btn {
  background: #d37233;
  color: white;
}

ul li button.add-people-btn {
  background: #4ad33d;
}

ul li span.people-name {
  flex: 1;
  text-align: left;
}

ul li input.new-people-name {
  flex: 1;
  border: none;
}
</style>
