import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <article class="border large">
      <div class="padding middle center-align white-text ">
        <h1 class="white-text">Welcome To JDJ Games</h1>
          <Link to="/explore" className="link-text" style={{ marginTop: "50px", display: "inline-block" }}>
            Click here to explore games
          </Link>
      </div>
    </article>
  );
}
