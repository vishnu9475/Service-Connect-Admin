import React from "react";
import CategoryItem18 from "../componants_user/CategoryItem18";
import Component4 from "../componants_user/Component4";
import { Link } from "react-router-dom";
import BottomNavBar from "../componants_user/BottomNavBar";
import delivery from "../assets/delivery.png"
import electrical from "../assets/electrical.png"
import laundry from "../assets/laundry.png"
import makeup from "../assets/makeup.png"
import plumbing from "../assets/plumbing.png"
import homerepair from "../assets/home-repair.png"
import health from "../assets/health.png"
import event from "../assets/event.png"
import tech from "../assets/tech.png"
import business from "../assets/business.png"

const Page12 = () => {
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
      <div className=" grid grid-cols-3 md:grid-cols-6 px-2 sm:px-5 lg:px-10 md:px-2 gap-2 ">
        <div className="">
          <CategoryItem18 image="/menu.png" tittle="ALL" />
        </div>

        <Link to="/Page13">
          <button>
            <CategoryItem18 image={delivery} tittle="Delivery sirvices" />
          </button>
        </Link>

        <Link to="/Page">
          <button>
            <CategoryItem18
              image={homerepair}
              tittle="Home Appliences Repair"
            />
          </button>
        </Link>

        <Link to="/Page">
          <button>
            <CategoryItem18 image={laundry} tittle="Laundry sirvice" />
          </button>
        </Link>
        <Link to="/Page">
          <button>
            <CategoryItem18 image={business} tittle="Buisiness sirvice" />
          </button>
        </Link>
        <Link to="/Page">
          <button>
            <CategoryItem18 image={event} tittle="Events & parties" />
          </button>
        </Link>
        <Link to="/Page">
          <button>
            <CategoryItem18 image={plumbing} tittle="Cleaning sirvices" />
          </button>
        </Link>
        <Link to="/Page">
          <button>
            <CategoryItem18 image={electrical} tittle="Electronics repair" />
          </button>
        </Link>
        <Link to="/Page">
          <button>
            <CategoryItem18 image={tech} tittle="Technology Sirvices" />
          </button>
        </Link>
        <Link to="/Page">
          <button>
            <CategoryItem18 image={health} tittle="Health & Fitness" />
          </button>
        </Link>
        <Link to="/Page">
          <button>
            <CategoryItem18 image={makeup} tittle="Beauty Sirvices" />
          </button>
        </Link>
      </div>
      {/* footer */}
      <div>
        <BottomNavBar />
      </div>
    </div>
  );
};

export default Page12;
