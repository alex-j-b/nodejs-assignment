'use strict'

import { CalculateTeamPoints } from '../calculateTeamPoints'
import { Logger } from '../logger'
import players from './__data__/players.json'

describe('calculateTeamPoints', () => {
  test('sorts', () => {
    let calculator = new CalculateTeamPoints(Logger)
    return calculator.calculate(players).then(r => {
      let c = r[0].points
      for (let i of r) {
        expect(i.points).toBeLessThanOrEqual(c)
        c = i.points
      }
    })
  })
  test('calculates active only', () => {
    let calculator = new CalculateTeamPoints(Logger)
    return calculator.calculate(players).then(r => {
      expect(r[r.length-1].points).toEqual(10)
    })
  })
})
