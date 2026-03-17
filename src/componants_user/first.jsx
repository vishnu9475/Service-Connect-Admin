
import { Briefcase } from "lucide-react";

export default function Component1() {
  return (
    <div className=" my-auto mx-auto w-screen py-4 bg-gray-200 flex items-center justify-center gap-2  rounded-xl ">
     <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
        <Briefcase size={16} className="text-white" />
      </div>
      <h1 className="text-2xl font-semibold tracking-normal text-black font-sans">
  Service Connect
</h1>

    </div>
  );
}

