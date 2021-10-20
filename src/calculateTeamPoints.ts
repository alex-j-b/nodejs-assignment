'use strict'

import { Logger } from './logger'
// Player type
import { Player } from './Player'
// ts-auto-guard generates a runtime type checking in function called guard
import { isPlayer } from './Player.guard'


// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]
export class CalculateTeamPoints {
  _logger: Logger;

  constructor (logger: Logger) {
    this._logger = logger
  }

  calculate (players: Player[]): Promise<Player[]> {
    // We use a promise to prevent blocking the event loop in case we
    // decide to do a syscall in the future e.g. http request
    return new Promise((resolve, reject) => {
      const results = []

      // With this map we will trade memory for speed
      const map = {}

      for (const player of players) {
        // In case bad data come in
        if (!isPlayer(player)) {
          Logger.error('Invalid player record found', player)
          continue
        }

        // We want to include data on all teams even if a player is inactive
        // so initialze a 0 point record now
        if (map[player.team] === undefined) {
          // Keep track of the position in the array where this team's data is located
          map[player.team] = (results.push({team: player.team, points: 0}) - 1)
        }

        if (!player.isActive) {
          Logger.debug(`${player.name} is not active. Points will not be totaled`)
          continue
        }

        results[map[player.team]].points += player.points
      }

      resolve(results.sort((a, b) => {
        return b.points - a.points
      }))
    })
  }
}
