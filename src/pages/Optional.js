import { useParams } from "react-router";

function Opitonal() {
  const { value } = useParams();
  return <div>Value: {value ?? "None"}</div>;
}

export default Opitonal;
