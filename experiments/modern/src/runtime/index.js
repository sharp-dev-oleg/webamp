const System = require("./System");
const Button = require("./Button");
const Group = require("./Group");
const Layout = require('./Layout');
const Container = require('./Container');
const GuiObject = require("./GuiObject");
const MakiObject = require("./MakiObject");

class PopupMenu {}
class List {}

const runtime = {
  "516549714a510d87b5a6e391e7f33532": MakiObject,
  d6f50f6449b793fa66baf193983eaeef: System,
  "45be95e5419120725fbb5c93fd17f1f9": Group,
  "4ee3e1994becc636bc78cd97b028869c": GuiObject,
  "698eddcd4fec8f1e44f9129b45ff09f9": Button,
  f4787af44ef7b2bb4be7fb9c8da8bea9: PopupMenu,
  e90dc47b4ae7840d0b042cb0fcf775d2: Container,
  "60906d4e482e537e94cc04b072568861": Layout,
  b2023ab54ba1434d6359aebec6f30375: List,
};

module.exports = runtime;
