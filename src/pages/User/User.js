import { Route, useParams, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About";
import UserMain from "./UserMain";

function User() {
  const match = useRouteMatch();
  const { username } = useParams();

  return (
    <div>
      <div>
        <Link to={`${match.url}`} style={{ marginRight: 16 }}>
          @{username}
        </Link>
        <Link to={`${match.url}/about`}>About</Link>
      </div>
      <Route path={`${match.path}`} exact>
        <UserMain />
      </Route>
      <Route path={`${match.path}/about`}>
        <About />
      </Route>
    </div>
  );
}

export default User;
