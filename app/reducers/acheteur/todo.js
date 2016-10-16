var initialState = {
  fetching: false,
  response: {
    todos: [
      { id:1, 'type':'night', 'title':'Réservation chambres', 'date':'01/12/2016', 'description':'Barcelone pendant 3 jours' },
      { id:2, 'type':'night', 'title':'Réservation chambres', 'date':'04/12/2016', 'description':'Paris pendant 1 jour' },
      { id:3, 'type':'night', 'title':'Réservation chambres', 'date':'15/12/2016', 'description':'Bordeaux pendant 5 jours' },
      { id:4, 'type':'night', 'title':'Réservation chambres', 'date':'26/12/2016', 'description':'Bordeaux pendant 10 jours' }
    ]
  },
  error: undefined
};

function acheteurTodo (state = initialState, action) {
  return state;
}

export default acheteurTodo;
