import { useNavigate, useParams } from "react-router";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
      <button
        onClick={() => {
          navigate(-2);
        }}
      >
        Go Back Twice
      </button>
      <div>Post {id}</div>
      <button onClick={() => navigate(`/posts/${parseInt(id) + 1}`)}>
        Next Post
      </button>
    </div>
  );
}

export default Post;
