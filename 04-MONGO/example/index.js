const db = require("./config/setup");
const selector = require("./utils/actions");

function useDatabase () {
    db.once("open", async () => {
        while (true) {
            await selector.main();
        }
    });
}

useDatabase();