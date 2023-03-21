import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import usersRoutes from "./routes/users.routes";
import path from "path";
import morgan from "morgan";
import session from "express-session";
import flash from "connect-flash";

const app = express();

const favicon = require("serve-favicon");

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
});

// using handlebars 
app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'nofear',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');

  next();
})


// Routes
app.use(indexRoutes);
app.use(usersRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

app.use(favicon(path.join(__dirname, "public", "icons", "favicon.ico")));

app.use(express.static(path.join(__dirname, "js", "main.js")));

export default app;
