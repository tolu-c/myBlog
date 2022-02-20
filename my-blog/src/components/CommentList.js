function CommentList({ comments }) {
  // console.log(comments.comments)
  return (
    <div>
      <h3 className="text-2xl font-bold my-6 text-gray-900 capitalize">comments:</h3>

      {comments.comments.map((comment, index) => (
        <div key={index}>
          <h4 className="text-lg font-bold capitalize">{comment.username}</h4>
          <p className='my-1 first-letter:capitalize'>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
