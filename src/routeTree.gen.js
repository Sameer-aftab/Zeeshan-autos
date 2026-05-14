import { Route as rootRouteImport } from "./routes/__root";
import { Route as WorkshopRouteImport } from "./routes/workshop";
import { Route as UsedRouteImport } from "./routes/used";
import { Route as ShowroomRouteImport } from "./routes/showroom";
import { Route as PartsRouteImport } from "./routes/parts";
import { Route as ExchangeRouteImport } from "./routes/exchange";
import { Route as ContactRouteImport } from "./routes/contact";
import { Route as BookRouteImport } from "./routes/book";
import { Route as IndexRouteImport } from "./routes/index";

const WorkshopRoute = WorkshopRouteImport.update({
  id: "/workshop",
  path: "/workshop",
  getParentRoute: () => rootRouteImport,
});
const UsedRoute = UsedRouteImport.update({
  id: "/used",
  path: "/used",
  getParentRoute: () => rootRouteImport,
});
const ShowroomRoute = ShowroomRouteImport.update({
  id: "/showroom",
  path: "/showroom",
  getParentRoute: () => rootRouteImport,
});
const PartsRoute = PartsRouteImport.update({
  id: "/parts",
  path: "/parts",
  getParentRoute: () => rootRouteImport,
});
const ExchangeRoute = ExchangeRouteImport.update({
  id: "/exchange",
  path: "/exchange",
  getParentRoute: () => rootRouteImport,
});
const ContactRoute = ContactRouteImport.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => rootRouteImport,
});
const BookRoute = BookRouteImport.update({
  id: "/book",
  path: "/book",
  getParentRoute: () => rootRouteImport,
});
const IndexRoute = IndexRouteImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRouteImport,
});

const rootRouteChildren = {
  IndexRoute,
  BookRoute,
  ContactRoute,
  ExchangeRoute,
  PartsRoute,
  ShowroomRoute,
  UsedRoute,
  WorkshopRoute,
};

export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren);
