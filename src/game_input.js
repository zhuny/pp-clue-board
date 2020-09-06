function load_game_input() {
  let game_input_result = JSON.parse(localStorage.game_input || "{}");
  if (
    game_input_result.people_list &&
    game_input_result.people_list[0] &&
    game_input_result.answer_list
  ) {
    return game_input_result;
  }
  return {
    people_list: [{ name: "나", answer: {} }],
    answer_list: []
  };
}

export {load_game_input};
