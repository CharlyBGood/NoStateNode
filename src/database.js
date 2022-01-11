import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://charlybgood:LnCsBa01@cluster0.kdtnj.mongodb.net/LunatiCoin?retryWrites=true&w=majority"
    );
    // hace falta ocultar la URL para no exponerlo al compartir el código
    //
    console.log("DB Connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
