const initialState = [
  'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'
];

export default function items(state = initialState, action) {
  //console.log(action);
  if (action.type === 'REORDER_ITEMS') {
    console.log(action.payload);
    return action.payload;
  } else if (action.type === 'ADD_ITEM') {
    return state;
  }
  return state;
}