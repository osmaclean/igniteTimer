import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

interface newCycleActionProps {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: { newCycle: Cycle }
}

interface markCurrentCycleFinishedProps {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
}

interface interruptedCycleActionProps {
  type: ActionTypes.INTERRUPT_CURRENT_CYCLE
}

export type ActionsProp =
  | newCycleActionProps
  | markCurrentCycleFinishedProps
  | interruptedCycleActionProps

/**
 * Adds a new cycle to the application state.
 *
 * @param newCycle - The new cycle to be added.
 * @returns An action object with type `ADD_NEW_CYCLE` and payload containing the new cycle.
 */
export function addNewCycleAction(newCycle: Cycle): newCycleActionProps {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}
export function MarkCurrentCycleAsFinishedAction(): markCurrentCycleFinishedProps {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction(): interruptedCycleActionProps {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
