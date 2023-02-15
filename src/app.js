import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import usersRoutes from "./routes/users.routes";
import path from "path";
import morgan from "morgan";

const app = express();

const favicon = require('serve-favicon')

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
});

app.engine(".hbs", exphbs.engine);

app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);
app.use(usersRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

app.use(favicon(path.join(__dirname, "public", "icons", "favicon.ico")));

app.use(express.static(path.join(__dirname, "js", "main.js")));

export default app;
