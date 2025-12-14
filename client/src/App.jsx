import BackgroundSVG from "./shared/components/backgroundSVG.jsx";
import Header from "./shared/components/header/Header.jsx";
import DashboardPage from "./pages/dashboardPage.jsx";

const App = () => {

  return (
    <div className="relative flex overflow-hidden h-screen w-screen">
      <div className="fixed -z-50 left-1/2 -translate-1/2 -top-1/2">
        <BackgroundSVG/>
      </div>

      <div className="w-full flex-1 p-4 gap-4 flex flex-col">
        <Header/>

        <div className="flex-1 whiteBackground">
          <DashboardPage/>
        </div>
      </div>

    </div>
  )
}

export default App
