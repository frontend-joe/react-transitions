import { PropsWithChildren } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./styles.css";
import image1 from "./image1.svg";
import image2 from "./image2.svg";
import image3 from "./image3.svg";

const Home = () => (
  <main>
    <article>
      <div>
        <h2>Home</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          facere, perspiciatis, voluptatum id iste numquam aliquid quo modi
          ratione eos ut veritatis molestias ea. Ut autem quos maxime corrupti
          mollitia!
        </p>
      </div>
      <img src={image1} />
    </article>
  </main>
);

const About = () => (
  <main>
    <article>
      <div>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          facere, perspiciatis, voluptatum id iste numquam aliquid quo modi
          ratione eos ut veritatis molestias ea. Ut autem quos maxime corrupti
          mollitia!
        </p>
      </div>
      <img src={image3} />
    </article>
  </main>
);

const Work = () => (
  <main>
    <article>
      <div>
        <h2>Work</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          facere, perspiciatis, voluptatum id iste numquam aliquid quo modi
          ratione eos ut veritatis molestias ea. Ut autem quos maxime corrupti
          mollitia!
        </p>
      </div>
      <img src={image2} />
    </article>
  </main>
);

const Link = ({ to, children }: { to: string } & PropsWithChildren) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClicked = () => {
    const bars = document.getElementById("bars");

    bars?.classList.add("show");

    setTimeout(() => {
      bars?.classList.remove("show");
      bars?.classList.add("hide");
      navigate(to);
    }, 800);

    setTimeout(() => bars?.classList.remove("hide"), 1600);
  };

  return (
    <a
      className={
        location.pathname.includes(children?.toString().toLowerCase()!)
          ? "active"
          : ""
      }
      onClick={handleClicked}
    >
      {children}
    </a>
  );
};

const Bars = () => {
  return (
    <div id="bars" className="bars">
      <div />
      <div style={{ animationDelay: "0.1s" }} />
      <div style={{ animationDelay: "0.2s" }} />
      <div style={{ animationDelay: "0.3s" }} />
      <div style={{ animationDelay: "0.4s" }} />
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <nav>
        <h1>Portfolio</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul>
      </nav>

      <Bars />

      <Outlet />
    </>
  );
};

export const Example = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
