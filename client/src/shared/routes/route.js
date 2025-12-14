import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout.jsx";
import DashboardPage from "../pages/dashboardPage.jsx";
import InventoryProductPage from "../pages/inventoryProductPage.jsx";
import InventoryLayout from "../components/layouts/InventoryLayout.jsx";
import InventoryOrderPage from "../pages/inventoryOrderPage.jsx";
import InventoryAuditPage from "../pages/inventoryAuditPage.jsx";
import SaleLayout from "../components/layouts/SaleLayout.jsx";
import NewSalePage from "../pages/newSalePage.jsx";
import SaleActivityPage from "../pages/saleActivityPage.jsx";

// ici, on voit nos routes

const router = createBrowserRouter([
  {
    path: "/", Component: RootLayout,
    children: [
      // le dashboard sur /
      {index: true, Component: DashboardPage},
      // l'inventaire sur /inventory
      {
        path: "inventory", Component: InventoryLayout,
        children: [
          { path: "product", Component: InventoryProductPage },
          { path: "order", Component: InventoryOrderPage },
          { path: "audit", Component: InventoryAuditPage }
        ]
      },
      // les ventes sur /sales
      {
        path: "sale", Component: SaleLayout,
        children: [
          { path: "new", Component: NewSalePage },
          { path: "activity", Component: SaleActivityPage }
        ]
      }
    ]
  }
])

export default router