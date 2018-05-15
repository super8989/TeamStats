const team = {
  _players: [
    {firstName: "Pablo", lastName: "Sanchez", age: 11},
    {firstName: "Pete", lastName: "Wheeler", age: 54},
    {firstName: "Skyler", lastName: "Fly", age: 24}
  ],

  _games: [
    {opponent: "Broncos", teamPoints: 42, opponentPoints: 27},
    {opponent: "Raptors", teamPoints: 35, opponentPoints: 55},
    {opponent: "Rockets", teamPoints: 61, opponentPoints: 78}
  ],


  get players() {
  	return this._players;
	},

  get games() {
  	return this._games;
	},

	addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this.players.push(player);
    },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };

    this.games.push(game);
  },

};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Titans", 100, 98);

console.log(team);
console.log('\n');

console.log(team.players);
console.log('\n');
console.log(team.games);
console.log('\n');
