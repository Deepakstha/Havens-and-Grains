const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log("Express server is running at port:", process.env.PORT);
  cronRouter.cronJob();
  cronRouter.cronJobForAddingTournamentPlayed();
});
