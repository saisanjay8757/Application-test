
export default (state = { secret:"im", posts: [] ,post : [] }, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      
      return { ...state, posts: action.payload.data };
    case "FETCH_POST":
      return { ...state, post: [...state.post, action.payload.post] };
    case "CREATE":
      return { ...state, posts: [...state.posts, action.payload] };
    case "DELETE":
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };      
    case "UPDATE":
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    default:
      return state;
  }
};
