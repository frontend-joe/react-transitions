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

const About = () => (
  <section style={{ background: "#fff", color: "#000" }}>
    <Nav title="Home" />
  </section>
);

const Portfolio = () => (
  <section style={{ background: "#000", color: "#fff" }}>
    <Nav title="Portfolio" />
  </section>
);

const Contact = () => (
  <section style={{ background: "#fff", color: "#000" }}>
    <Nav title="Contact" />
  </section>
);

const Link = ({
  to,
  children,
  colorEnd,
}: { to: string; colorEnd: string } & PropsWithChildren) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClicked = () => {
    const bubbles = document.getElementById("bubbles");

    bubbles?.classList.add("show");

    const bubbleSecond: HTMLDivElement =
      bubbles?.querySelector("div:nth-child(2)")!;

    bubbleSecond.style.background = colorEnd;

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
        <Link to="/about" colorEnd="#fff">
          About
        </Link>
      </li>
      <li>
        <Link to="/portfolio" colorEnd="#000">
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/contact" colorEnd="#fff">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

const duration = 1200;

const Bubbles = () => {
  return (
    <div id="bubbles">
      <div
        style={{ animationDuration: `${duration}ms` }}
        className="bubbles__first"
      />
      <div
        style={{ animationDuration: `${duration}ms` }}
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
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
