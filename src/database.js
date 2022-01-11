import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    // hace falta ocultar la URL para no exponerlo al compartir el código
    //
    console.log("DB Connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
