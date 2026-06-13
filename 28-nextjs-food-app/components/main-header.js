import Link from "next/link";
import logoImg from "@/assets/logo.png";

function MainHeader() {
  return (
    <>
      <header>
        <Link href="/">
          <img src={logoImg.src} alt="A plate with food on it" />
          Next level food!
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/meals">Browse the meals</Link>
            </li>
            <li>
              <Link href="/meals/share">Food </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
