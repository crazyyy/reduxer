const initialState = []

export default function tracks(state = initialState, action) {
  switch (action.type) {
    case "ADD_TRACK": {
      return [...state, action.payload]
    }
    case "FIND_TRACK": {
      return state
    }
    case "FETCH_TRACKS_SUCCESS": {
      return action.payload
    }
  }
  return state
}
