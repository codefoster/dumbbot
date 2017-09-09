let builder = require("botbuilder");
let connector = new builder.ConsoleConnector();

let bot = new builder.UniversalBot(
    connector,
    session => session.endDialog(session.message.text)
);
connector.listen();