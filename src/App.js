import { HeroModule, AboutUsModule } from "components";
import "assets/styles/App.scss";

function App() {
  return (
    <div>
      <div className="h-[100vh] min-h-[700px]">
        <HeroModule />
      </div>
      <AboutUsModule />
    </div>
  );
}

export default App;
