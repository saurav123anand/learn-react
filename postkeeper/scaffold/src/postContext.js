const { createContext, useState, useContext } = require("react");

// create post context here
const PostContext = createContext();
export const usePostContext = () => {
    return useContext(PostContext);
};

// Create custom hook that returns context value here

// create a custom saved post provider here with add and reset functions
export const PostProvider = ({ children }) => {
    const [savedPosts, setSavedPosts] = useState([]);
  
    const addPost = (post) => {
      setSavedPosts((prev) => {
        if (prev.some((p) => p.id === post.id)) return prev;
        return [...prev, post];
      });
    };
  
    const resetPosts = () => {
      setSavedPosts([]);
    };
  
    return (
      <PostContext.Provider value={{ savedPosts, addPost, resetPosts }}>
        {children}
      </PostContext.Provider>
    );
  };
