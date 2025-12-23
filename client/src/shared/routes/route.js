import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout.jsx";
import DashboardPage from "../../features/dashboard/dashboardPage.jsx";
import InventoryProductPage from "../../features/inventory/pages/inventoryProductPage.jsx";
import InventoryLayout from "../../features/inventory/components/InventoryLayout.jsx";
import InventoryOrderPage from "../../features/inventory/pages/inventoryOrderPage.jsx";
import InventoryAuditPage from "../../features/inventory/pages/inventoryAuditPage.jsx";
import SaleLayout from "../../features/sales/components/SaleLayout.jsx";
import NewSalePage from "../../features/sales/newSalePage.jsx";
import SaleActivityPage from "../../features/sales/saleActivityPage.jsx";

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