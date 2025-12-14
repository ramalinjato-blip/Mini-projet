import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../shared/components/layouts/RootLayout.jsx";
import DashboardPage from "../pages/dashboardPage.jsx";
import InventoryPage from "../pages/inventoryPage.jsx";
import SalePage from "../pages/salePage.jsx";

// ici, on voit nos routes

const router = createBrowserRouter([
  {
    path: "/", Component: RootLayout,
    children: [
      // le dashboard sur /
      {index: true, Component: DashboardPage},
      // l'inventaire sur /inventory
      {path: "inventory", Component: InventoryPage},
      // les ventes sur /sales
      {path: "sales", Component: SalePage}
    ]
  }
])

export default router