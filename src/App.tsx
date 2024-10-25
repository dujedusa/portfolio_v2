import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { capitalize, emailJsInit, scrollToSection } from "@utils";
import { EMAILJS_OPTIONS, ROUTE } from "@shared/constants";
import { Header } from "@components/header";
import { Footer } from "@components/footer";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const section = location.pathname.split("/").pop();
    document.title = `${capitalize(section as string)}`;

    if (location.pathname === `/${ROUTE.home}` || location.pathname === "/") {
      navigate(`${ROUTE.home}/${ROUTE.intro}`);
      return;
    }

    scrollToSection(section as string);
  }, [location, navigate]);

  useEffect(() => emailJsInit(EMAILJS_OPTIONS), []);

  return (
    <>
      <Header opened={false} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
