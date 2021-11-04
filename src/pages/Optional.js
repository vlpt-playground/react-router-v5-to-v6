import { useParams } from "react-router-dom";

function Optional() {
  const { value } = useParams();
  return <div>Value: {value ?? "None"}</div>;
}

export default Optional;
