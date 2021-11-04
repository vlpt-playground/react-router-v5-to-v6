import { useHistory, useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </button>
      <button
        onClick={() => {
          history.go(-2);
        }}
      >
        Go Back Twice
      </button>
      <div>Post {id}</div>
      <button onClick={() => history.push(`/posts/${parseInt(id) + 1}`)}>
        Next Post
      </button>
    </div>
  );
}

export default Post;
