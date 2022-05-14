import Link from "next/link";
import * as NavBar from "./styles/navbar";

function Navbar() {
  return (
    <>
      <NavBar.Wrapper>
        <NavBar.Container>
          <Link href="/" passHref>
            <NavBar.Button>
              <i className="fa fa-home" />{" "}
              <span className="nav-label">Home</span>
            </NavBar.Button>
          </Link>
          <Link href="/favourites" passHref>
            <NavBar.Button>
              <i className="fa fa-heart" />{" "}
              <span className="nav-label">Favourites</span>
            </NavBar.Button>
          </Link>
        </NavBar.Container>
      </NavBar.Wrapper>
    </>
  );
}

export default Navbar;
