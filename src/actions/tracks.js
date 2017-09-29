var mockApiData = [
  {
    id: 1,
    name: "Calvin Harris, Ellie Goulding"
  },
  {
    id: 2,
    name: "Black Eyed Peas"
  },
  {
    id: 3,
    name: "Tim3bomb"
  },
  {
    id: 4,
    name: "Светлана Тарабарова"
  },
  {
    id: 5,
    name: "Thomas Newson"
  }
]

export const getTracks = () => dispatch => {
  setTimeout(() => {
    console.log("I got tracks")
    dispatch({
      type: "FETCH_TRACKS_SUCCESS",
      payload: mockApiData
    })
  }, 2000)
}
