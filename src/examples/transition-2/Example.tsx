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

const Home = () => <Nav title="Home" />;

const About = () => <Nav title="About" />;

const Work = () => <Nav title="Work" />;

const Link = ({ to, children }: { to: string } & PropsWithChildren) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClicked = () => {
    const bubbles = document.getElementById("bubbles");

    bubbles?.classList.add("show");

    setTimeout(() => navigate(to), 1000);

    setTimeout(() => {
      bubbles?.classList.remove("show");
      bubbles?.classList.add("hide");
    }, 1200);

    setTimeout(() => bubbles?.classList.remove("hide"), 2400);
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

const Nav = ({ title }: { title: string }) => (
  <nav>
    <h1 style={{ animation: "appear 0.25s 0.2s both" }}>{title}</h1>
    <ul style={{ animation: "appear 0.25s 0.4s both" }}>
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
);

const duration = 1200;
const colorStart = "#8f44fd";
const colorEnd = "#ffffff";

const Bubbles = () => {
  return (
    <div id="bubbles">
      <div
        style={{ animationDuration: `${duration}ms`, background: colorStart }}
        className="bubbles__first"
      />
      <div
        style={{ animationDuration: `${duration}ms`, background: colorEnd }}
        className="bubbles__second"
      />
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <Bubbles />
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
