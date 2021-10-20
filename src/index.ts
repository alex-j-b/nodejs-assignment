'use strict'

import { CalculateTeamPoints } from './calculateTeamPoints'
// We will use a singleton for the logger
import { Logger } from './logger'
// Player type
import { Player } from './Player'


// Mocking the api call receiving nightly team points
const apiCall = (success: boolean, timeout: number): Promise<Player[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { team: 'green', name: 'Erick', points: 5, isActive: true },
          { team: 'blue', name: 'Bob', points: 5.5, isActive: true },
          { team: 'green', name: 'Destinie', points: 5, isActive: true },
          { team: 'red', name: 'Mitri', points: 5, isActive: true },
          { team: 'red', name: 'Jojo', points: 5, isActive: true },
          { team: 'red', name: 'Jah', points: 3, isActive: false },
          { team: 'orange', name: 'Rob', points: 0, isActive: false }
        ]);
      } else {
        reject({statusCode: '404', message: 'Not found'});
      }
    }, timeout);
  });
}

// We will still pass in the logger in case we want to stray from the singleton pattern later
const calculator = new CalculateTeamPoints(Logger);

(async () => {
  try {
    const data = await apiCall(true, 3000);

    calculator.calculate(data).then(results => {
      Logger.info(results)
    }).catch(e => {
      // Fail lambda function || Publish cloudwatch metric etc...
      Logger.error(e)
    })

  } catch (e) {
    Logger.error(e)
  }
})();
