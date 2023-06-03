import "./App.css";
import AllRoutes from "./All Routes/AllRoutes";
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  const links = {
    quickLinks: [
      { text: "Features", href: "#" },
      {
        text: "Pricing",
        href: "#",
      },
      { text: "Case Studies", href: "#" },
      {
        text: "Reviews",
        href: "#",
      },
      { text: "Updates", href: "#" },
    ],
    supportLinks: [
      { text: "Getting Started", href: "#" },
      {
        text: "Help Center",
        href: "#",
      },
      {
        text: "Server status",
        href: "#",
      },
      {
        text: "Report a bug",
        href: "#",
      },
      {
        text: "Chat Support",
        href: "#",
      },
    ],
    companyLinks: [
      { text: "About", href: "#" },
      {
        text: "Contact Us",
        href: "#",
      },
      { text: "Careers", href: "#" },
      {
        text: "Culture",
        href: "#",
      },
      { text: "Blog", href: "#" },
    ],
    socialLinks: [
      { text: "Facebook", href: "#" },
      {
        text: "Twitter",
        href: "#",
      },
      { text: "Instagram", href: "#" },
      {
        text: "Linkedin",
        href: "#",
      },
      { text: "Youtube", href: "#" },
    ],
  };
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer links={links} />
    </div>
  );
}
export default App;
