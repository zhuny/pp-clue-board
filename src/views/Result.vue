<template>
  <div class="result">
    <table>
      <thead>
        <tr>
          <th>물품</th>
          <th
            v-bind:key="index"
            v-for="(people, index) in game_input.people_list"
          >
            {{ people.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(element, index) in element_group" v-bind:key="index">
          <td>{{ element }}</td>
          <td
            v-for="(people, index) in game_input.people_list"
            v-bind:key="index"
          >
            <select v-model="people.answer[element]">
              <option selected></option>
              <option value="1">확정</option>
              <option value="2">의심</option>
              <option value="3">제외</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Result",
  computed: {
    element_group() {
      let element_list = [];
      this.rule.token_list.map(token => {
        element_list.push(token.name);
      });
      this.rule.weapon_list.map(weapon => {
        element_list.push(weapon);
      });
      this.rule.room_list.map(room => {
        element_list.push(room);
      });
      return element_list;
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}

table thead {
  background: #42b983;
}
</style>
