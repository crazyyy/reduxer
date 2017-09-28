const initialState = ["my home playlist", "my work playlist"]

export default function playlist(state = initialState, action) {
  switch (action.type) {
    case "ADD_PLAYLIST": {
      return state
    }
    case "DELETE_PLAYLIST": {
      return state
    }
  }

  return state
}
