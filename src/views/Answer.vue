<template>
  <div class="answer">
    <table>
      <thead>
        <tr>
          <th>순번</th>
          <th>토큰</th>
          <th>흉기</th>
          <th>장소</th>
          <th>질문자</th>
          <th>답변자</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(answer, index) in game_input.answer_list"
          v-bind:key="index"
        >
          <th>{{ index }}</th>
          <td>
            <select v-model="answer.token">
              <option
                v-for="token in rule.token_list"
                v-bind:key="token.name"
                v-bind:value="token.name"
                >{{ token.name }}</option
              >
            </select>
          </td>
          <td>
            <select v-model="answer.weapon">
              <option
                v-for="weapon in rule.weapon_list"
                v-bind:key="weapon"
                v-bind:value="weapon"
                >{{ weapon }}</option
              >
            </select>
          </td>
          <td>
            <select v-model="answer.room">
              <option
                v-for="room in rule.room_list"
                v-bind:key="room"
                v-bind:value="room"
                >{{ room }}</option
              >
            </select>
          </td>
          <td>
            <select v-model="answer.questioner">
              <option
                v-for="people in game_input.people_list"
                v-bind:key="people.name"
                v-bind:value="people.name"
                >{{ people.name }}</option
              >
            </select>
          </td>
          <td>
            <select v-model="answer.answerer">
              <option
                v-for="people in game_input.people_list"
                v-bind:key="people.name"
                v-bind:value="people.name"
                >{{ people.name }}</option
              >
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <button v-on:click="add_answer()">추가</button>
  </div>
</template>

<script>
export default {
  name: "Answer",
  methods: {
    add_answer() {
      this.game_input.answer_list.push({
        token: "",
        weapon: "",
        room: "",
        questioner: "",
        answerer: ""
      });
    }
  }
};
</script>

<style scoped>
button {
  padding: 0.25rem 0.5em;
  border-radius: 100px;
  border: none;
  background: #4ad33d;
  width: 100%;
  margin-top: 0.5rem;
  font-weight: bold;
}
</style>
