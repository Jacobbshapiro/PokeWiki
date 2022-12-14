import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Welcome To PokeWiki, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/index">Search</Link>
      &nbsp; | &nbsp;
      <Link to="/AllPokemon">All Pokemon</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
