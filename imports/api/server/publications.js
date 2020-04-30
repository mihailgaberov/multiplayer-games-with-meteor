import { GameStatuses } from '../models/game.js';
import Games from '../collections/games.js';
import { Game } from "../models/game";

Meteor.publish('games', function () {
  // access control: only for logged-in users
  if (this.userId) { // this.userId is the id of the currently logged in user
    // filtering: only games with WAITING and STARTED statuses
    return Games.find({ status: { $in: [GameStatuses.WAITING, GameStatuses.STARTED, GameStatuses.FINISHED] } });
  } else {
    return null;
  }
});
/*
Meteor.publish('test', function () {
  Meteor.setInterval(() => {
    console.log('>>> kaboom');
    let game = new Game();
    // game.userJoin(this.userId);
    Games.saveGame(game);
  }, 2000);
});*/
