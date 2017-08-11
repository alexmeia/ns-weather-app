import application = require("application");
import navigation = require('./common/navigation');

let mainPage = navigation.getStartPage();
application.start({ moduleName: mainPage });

