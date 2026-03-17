import SecuritySettings from "../componants_service/yaswanth/SecuritySettings";
import AppHeader from "../componants_service/yaswanth/AppHeader";

function PageS52() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <div className="w-full text-white lg:text-5xl xl:text-7xl font-bold tracking-tight">
        <AppHeader
                title="SECURITY"
                theme="black"
                showBack={true}
            />
      </div>

      <main className="flex-1 w-full bg-white flex flex-col pt-24 px-6 md:px-20 pb-12">
        {/* CHANGED: Reduced max-width from 2xl to 4xl and ensured mx-auto */}
        <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col">
          <SecuritySettings />
        </div>
      </main>
    </div>
  );
}

export default PageS52;