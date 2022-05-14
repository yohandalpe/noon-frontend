import Link from "next/link";
import * as NavBar from "./styles/navbar";

export default function Navbar() {
  return (
    <>
      <NavBar.Container>
        <Link href="/" passHref>
          <NavBar.Button>
            <i className="fa fa-home" />
          </NavBar.Button>
        </Link>
        <Link href="/favourites" passHref>
          <NavBar.Button>
            <i className="fa fa-heart" />
          </NavBar.Button>
        </Link>
      </NavBar.Container>
    </>
  );
}
