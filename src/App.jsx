import { useState } from "react";
import "./styles/App.css";
import { useOne, useList, useCreate, useUpdate, useRemove } from "./refine";

function App() {
  const [createTitle, setCreateTitle] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [removeId, setRemoveId] = useState("");

  // Posts resource
  const {
    data: post,
    isPending: isPostPending,
    error: postError,
  } = useOne("posts", 1);
  const {
    data: posts,
    isPending: isPostsPending,
    error: postsError,
  } = useList("posts");
  const { mutateAsync: createPost } = useCreate("posts");
  const { mutateAsync: updatePost } = useUpdate("posts");
  const { mutateAsync: removePost } = useRemove("posts");

  // Comments resource
  const {
    data: comments,
    isPending: isCommentsPending,
    error: commentsError,
  } = useList("comments");

  // Posts Handlers
  async function handleCreatePost(data) {
    await createPost(data);
    setCreateTitle("");
  }

  async function handleUpdatePost(data) {
    await updatePost(data);
    setUpdateId("");
    setUpdateTitle("");
  }

  async function handleRemovePost(data) {
    await removePost(data);
    setRemoveId("");
  }

  if (isPostPending || isPostsPending || isCommentsPending) return "Loading...";
  if (postError || postsError || commentsError) return "An error has occurred!";

  return (
    <>
      <h1>Refine Clone</h1>
      <div>
        <h2>Post:</h2>
        <div>
          {post.title} (id: {post.id})
        </div>
      </div>
      <div>
        <h2>Posts:</h2>
        {posts.map((post) => (
          <div key={post.id}>
            {post.title} (id: {post.id})
          </div>
        ))}
      </div>
      <div>
        <h2>Create Post:</h2>
        <input
          type="text"
          value={createTitle}
          onChange={(event) => setCreateTitle(event.target.value)}
        ></input>
        <button onClick={() => handleCreatePost({ title: createTitle })}>
          Create
        </button>
      </div>
      <div>
        <h2>Update Post:</h2>
        <input
          type="text"
          value={updateId}
          onChange={(event) => setUpdateId(event.target.value)}
        ></input>
        <input
          type="text"
          value={updateTitle}
          onChange={(event) => setUpdateTitle(event.target.value)}
        ></input>
        <button
          onClick={() =>
            handleUpdatePost({ id: updateId, data: { title: updateTitle } })
          }
        >
          Update
        </button>
      </div>
      <div>
        <h2>Remove Post:</h2>
        <input
          type="text"
          value={removeId}
          onChange={(event) => setRemoveId(event.target.value)}
        ></input>
        <button onClick={() => handleRemovePost(removeId)}>Remove</button>
      </div>
      <div>
        <h2>Comments:</h2>
        {comments.map((comment) => (
          <div key={comment.id}>
            {comment.text} (id: {comment.id})
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
