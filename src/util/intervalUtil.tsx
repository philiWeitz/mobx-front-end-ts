
import _ from 'lodash';

const intervalIds = {};

const intervalUtil = {

  FETCH_SAMPLES: 'FETCH_SAMPLES_INTERVAL',

  addInterval: (key : string, func: () => any, interval : number,
                initialCall : boolean = true) : void => {

    if (!(key in intervalIds)) {
      if (initialCall) {
        func();
      }
      intervalIds[key] = setInterval(func, interval);
    }
  },

  cancelInterval: (key : string) : void => {
    if (!(key in intervalIds)) {
      clearInterval(intervalIds[key]);
    }
  },

  cancelAllIntervals: () : void => {
    _(intervalIds).values().map((intervalId : number) => {
      return clearInterval(intervalId);
    });
  },

};

export default intervalUtil;
