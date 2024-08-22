import config from "./config/config";
import { app } from "./server";
import connect from "./db/db";

const PORT = config.app.PORT;

connect().then(() => {
  app.listen(PORT, () =>
    console.log(
      `Server is running on port ${PORT} and is connected to data base`
    )
  );
});
