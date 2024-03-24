import { createContext } from 'react';

export const TimerContext = createContext({
  timers: null,
  updateTimersDuration: null,
  updateTimersName: null,
  deleteTimer: null
});