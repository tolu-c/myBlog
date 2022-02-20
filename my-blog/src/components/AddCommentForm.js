import { useState } from "react";

function AddCommentForm({ articleName, setArticleInfo }) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comments`, {
      method: "post",
      body: JSON.stringify({ username, text: comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setComment('');
  };

  return (
    <form className="shadow rounded p-4 flex flex-col space-y-6" onSubmit={addComment}>
      <h3 className="text-xl font-bold mb-4 text-gray-800">Add a comment</h3>
      <label htmlFor='fullname'>Name:</label>
      <input
      id='fullname'
        type="text"
        className="border focus:outline-none"
        name="name"
        placeholder="full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <textarea
        className="border"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder='add comment'
      ></textarea>
      <button type="submit" className="">
        add Comment
      </button>
    </form>
  );
}

export default AddCommentForm;
