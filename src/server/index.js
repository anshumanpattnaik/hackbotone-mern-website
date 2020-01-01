import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import routes from "../app/component/App/routes";
import App from "../app/component/App/App";
import sourceMapSupport from "source-map-support";

if (process.env.NODE_ENV === "development") {
  sourceMapSupport.install();
}

const site_url = "https://hackbotone.com";
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

var blogsRouter = require("./blogs/blogcontroller");

app.use("/blogs", blogsRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res, next) => {
  var routerUrl = req.url;

  if (routerUrl.includes("search")) {
    routerUrl = routerUrl.replace("=", "=/");
  } else {
    routerUrl = req.url;
  }

  const activeRoute = routes.find(route => matchPath(routerUrl, route));

  if (typeof activeRoute !== "undefined") {
    var requestInitialData;

    if (routerUrl.includes("blog") || routerUrl.includes("page")) {
      requestInitialData =
        activeRoute.component.requestInitialData &&
        activeRoute.component.requestInitialData(routerUrl);
    } else if (routerUrl.includes("search")) {
      requestInitialData =
        activeRoute.component.requestSearchData &&
        activeRoute.component.requestSearchData(routerUrl);
    } else {
      requestInitialData =
        activeRoute.component.requestInitialData &&
        activeRoute.component.requestInitialData(routerUrl);
    }

    Promise.resolve(requestInitialData)
      .then(initialData => {
        const context = { initialData };
        const markup = renderToString(
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        );

        var response = JSON.stringify(initialData);
        var title;
        var thumb;
        var description;
        var blog_link;
        if (
          routerUrl == "/" ||
          routerUrl.includes("/?search") ||
          routerUrl.includes("/page/")
        ) {
          title =
            "HackbotOne - Game Development, App Development & Ethical Hacking Tutorials";
          thumb =
            "https://assets.hackbotone.com/images/icons/hackbotone_logo.png";
          description =
            "HackbotOne website produces contents from various domains such as Web Hacking, Bug Bounty, Application Development & Game Development. ";
          blog_link = site_url;
        } else if (routerUrl.includes("/about")) {
          title = "About Me";
          thumb =
            "https://assets.hackbotone.com/images/icons/anshuman_pattnaik.jpg";
          description =
            "I am the creator of HackbotOne website and my Youtube channel and both of these platforms produce contents from various domains such as Web Hacking, Bug Bounty, Application Development & Game Development. This was my plan from quite a long time to make contents on these domains which will be helpful for those who are beginners and also those who have interest and passion in these areas. And now I have the platform to share my knowledge and experience to the world.";
          blog_link = site_url + "/about";
        } else if (routerUrl.includes("/blog")) {
          var results = JSON.parse(response);
          if (results != null) {
            title = results.title;
            thumb = results.thumb;
            description = results.short_description;
            blog_link = site_url + "/blog/" + results.short_title;
          } else {
            title =
              "404 - Oops! We can't seem to find the page you're looking for.";
            description =
              "404 - Oops! We can't seem to find the page you're looking for.";
          }
        }

        res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta content="IE=edge" http-equiv="X-UA-Compatible">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <title>${title}</title>
          <meta name="description" content="${description}">
        
          <meta name="twitter:card" content="summary_large_image">
          <meta name="twitter:site" content="@anspattnaik">
          <meta name="twitter:title" content="${title}">
          <meta name="twitter:description" content="${description}">
          <meta name="twitter:creator" content="@anspattnaik">
          <meta name="twitter:image" content="${thumb}">

          <meta property="og:title" content="${title}" />
          <meta property="og:description" content="${description}">
          <meta property="og:type" content="article" />
          <meta property="og:url" content="${blog_link}" />
          <meta property="og:image" content="${thumb}" />
          <meta property="og:site_name" content="HackbotOne" />
          <meta property="article:published_time" content="2019-12-30T22:00:00" />

          <link rel="canonical" href="${blog_link}"/>
          <link rel="shortcut icon" type="image/png" href="https://assets.hackbotone.com/images/icons/favicon.ico"/>
          <link rel="apple-touch-icon-precomposed" href="https://assets.hackbotone.com/images/icons/hackbotone_logo-180x180.png"/>
          <link rel="stylesheet" href="/css/main.css">
          <script src="/bundle.js" defer></script>
        </head>
        <body>
          <div id="root">${markup}</div>
        </body>
      </html>
      `);
      })
      .catch(next);
  }
});

app.listen(process.env.PORT || 9000, () => {
  console.log("Server is listening");
});
