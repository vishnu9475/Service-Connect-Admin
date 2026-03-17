import * as Icons from "lucide-react";
import {ArrowRight} from "lucide-react";

const ServiceProfile25 = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center py-6">
      <div className="w-full max-w-sm space-y-4">

        {/* PROFILE CARD */}
        <div className="bg-white rounded-xl shadow-md shadow-gray-400 p-4">
          <div className="flex items-center gap-3">
            {/* <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-14 h-14 rounded-full"
            /> */}

            <div className="flex-1">
              <div className="flex items-center gap-1 text-orange-500 text-xs">
                <Icons.MapPin className="w-3 h-3" />
                3 km away
              </div>
              <h2 className="font-semibold">William S. Cunningham</h2>
              <p className="text-sm text-gray-600">Plumber</p>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                <Icons.Star className="w-4 h-4 fill-yellow-400" />
                4.2
              </div>
              <p className="text-xs text-gray-500">32 Reviews</p>
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-3">
            <span>24 Video & Image</span>
            <span>2 Services listed</span>
          </div>
        </div>

        {/* ABOUT */}
        <div className="shadow-md shadow-gray-400 bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-sm text-gray-600">
            Graphic Design now a popular profession. Graphic design by our popular
            instructors helps beginners learn the basics easily.
          </p>
        </div>

        {/* SERVICES */}
        <div className="shadow-md shadow-gray-400 bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <Icons.Wrench className="w-4 h-4" /> Plumbing
            </li>
            <li className="flex items-center gap-2">
              <Icons.Tv className="w-4 h-4" /> Access Mobile, Desktop & TV
            </li>
            <li className="flex items-center gap-2">
              <Icons.Droplet className="w-4 h-4" /> Water tank fix
            </li>
            <li className="flex items-center gap-2">
              <Icons.Volume2 className="w-4 h-4" /> Audio install
            </li>
            <li className="flex items-center gap-2">
              <Icons.Key className="w-4 h-4" /> Lockset change
            </li>
            <li className="flex items-center gap-2">
              <Icons.Settings className="w-4 h-4" /> Pump clean
            </li>
            <li className="flex items-center gap-2">
              <Icons.Zap className="w-4 h-4" /> Wiring
            </li>
          </ul>
        </div>

        {/* REVIEWS */}
        <div className= "shadow-md shadow-gray-400 bg-white rounded-xl shadow p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Reviews</h3>
            <button className="text-sm text-blue-600">See All</button>
          </div>

          {[1, 2].map((i) => (
            <div key={i} className="flex gap-3 mb-3">
              <img
                src="https://i.pravatar.cc/50"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-sm">
                    {i === 1
                      ? "William S. Cunningham"
                      : "Martha E. Thompson"}
                  </p>
                  <div className="flex items-center gap-1 text-yellow-500 text-xs">
                    <Icons.Star className="w-3 h-3 fill-yellow-400" /> 4.5
                  </div>
                </div>

                <p className="text-xs text-gray-600 mt-1">
                  The course is very good and extremely descriptive.
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  ❤️ 78 · 2 Weeks Ago
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGES */}
        <div className= "shadow-md shadow-gray-400 bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-3">Images</h3>
          <div className="grid grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-900 hover:bg-gray-500 rounded-lg flex items-center justify-center"
              >
                <Icons.Image className="text-white w-5 h-5" />
              </div>
            ))}
          </div>
        </div>

        {/* VIDEOS (ADDED) */}
        <div className="shadow-md shadow-gray-400 bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-3">Videos</h3>
          <div className="grid grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-100 hover:bg-gray-300 rounded-lg flex items-center justify-center border"
              >
                <Icons.Video className="w-5 h-5 text-gray-600" />
              </div>
            ))}
          </div>
        </div>

        {/* BOOK SERVICE BUTTON */}
       <button className="hover:bg-gray-500  w-full h-16 bg-gray-900 text-white py-4 rounded-full flex items-center justify-between gap-3 font-semibold">
                  <div className="w-3/4 px-15 flex items-center justify-end">
                    <h3 className="font-semibold text-[18px]">Confirm</h3>
                  </div>
                   <div className="px-3">
                <span className="bg-white  text-gray-900 w-10 h-10 rounded-full flex items-center justify-center">
                  <ArrowRight />
                </span>
                </div>
              </button>

      </div>
    </div>
  );
};

export default ServiceProfile25;
