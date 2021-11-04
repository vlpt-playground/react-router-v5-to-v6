import { Link, Outlet, useParams } from "react-router-dom";

function User() {
  const { username } = useParams();

  return (
    <div>
      <div>
        <Link to="" style={{ marginRight: 16 }}>
          @{username}
        </Link>
        <Link to="about">About</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default User;
