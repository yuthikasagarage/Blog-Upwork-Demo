const blogReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        blogPosts: action.payload,
      };
    case 'SENDING_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'REQUEST_FINISHED':
      return {
        ...state,
        loading: false,
      };
    case 'SET_POST':
      return {
        ...state,
        currentBlogPost: action.payload,
      };
    default:
      return null;
  }
};
export default blogReducer;
