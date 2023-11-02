import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tales/khanty">Khanty</Link>
            </li>
          </ul>
        </header>
    </>
  );
}

export default Homepage;
