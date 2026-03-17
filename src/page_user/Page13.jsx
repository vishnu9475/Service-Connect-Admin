import React from "react";
import CategoryItem18 from "../componants_user/CategoryItem18";
import Component4 from "../componants_user/Component4";
import { Link } from "react-router-dom";
import image11 from "../assets/image11.png"
import image12 from "../assets/image12.png"
import image13 from "../assets/image13.png"
import image14 from "../assets/image14.png"
import BottomNavBar from "../componants_user/BottomNavBar";

const Page13 = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full ">
      {/* header */}
      <div className="w-full">
        <Component4
          title="ALL CATEGORY"
          showSearch={true}
          showFilter={true}
          theme="black"
        />
      </div>
      {/* body */}
      <div className=" grid grid-cols-3 md:grid-cols-6  px-3 lg:px-20 md:gap-2 gap-5 lg:gap-9 md:flex justify-center">
        <Link to="/Page">
          <button>
            <CategoryItem18 image={image11} tittle="Bouquet Delivery" />
          </button>
        </Link>

        <Link to="/Page15">
          <button>
            <CategoryItem18 image={image12} tittle="Cake Delivery" />
          </button>
        </Link>

        <Link to="/Page">
          <button>
            <CategoryItem18 image={image13} tittle="Drivers" />
          </button>
        </Link>

        <Link to="/Page">
          <button>
            <CategoryItem18 image={image14} tittle="Packers & movers" />
          </button>
        </Link>

        <Link to="/Page">
          <button>
            <CategoryItem18 image={image14} tittle="Pickup & elivery" />
          </button>
        </Link>
      </div>
      {/* footer */}
      <div>
        <BottomNavBar/>
      </div>
    </div>
  );
};

export default Page13;
