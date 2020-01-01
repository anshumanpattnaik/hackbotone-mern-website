import BlogList from "../Blog/BlogList";
import BlogDetails from "../Blog/BlogDetails";
import About from "../About/AboutPage";

const routes = [
  {
    path: "/",
    exact: true,
    component: BlogList
  },
  {
    path: "/blog/:id",
    exact: true,
    component: BlogDetails
  },
  {
    path: "/page/:page",
    exact: true,
    component: BlogList
  },
  {
    path: "/?search=/:keyword",
    exact: true,
    component: BlogList
  },
  {
    path: "/about",
    exact: true,
    component: About
  }
];

export default routes;
