import { GameStatuses } from '../models/game.js';
import Games from '../collections/games.js';

Meteor.publish('games', function () {
  // access control: only for logged-in users
  if (this.userId) { // this.userId is the id of the currently logged in user
    // filtering: only games with WAITING and STARTED statuses
    return Games.find({ status: { $in: [GameStatuses.WAITING, GameStatuses.STARTED, GameStatuses.FINISHED] } });
  } else {
    return null;
  }
});
