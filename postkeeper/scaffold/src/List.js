import { posts } from "./data";
import { usePostContext } from "./postContext";

export const List = () => {
  const { addPost } = usePostContext();

  return (
    <div className="list">
      {posts.map((p) => (
        <div className="post" key={p.id}>
          <h3>{p.text}</h3>
          <img src={p.img} alt={p.text} />
          <img
            src="https://cdn-icons-png.flaticon.com/512/102/102279.png"
            alt="save"
            onClick={() => addPost(p)}
          />
        </div>
      ))}
    </div>
  );
};