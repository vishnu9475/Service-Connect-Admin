import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Component3({type="signin"}) {
    const isSignIn = type === "signin";

return (
<div className="w-screen  mx-auto  flex justify-center bg-gray-200">
<div className="w-80 p-3 text-center">
<p className="text-sm text-gray-500 mb-3">Or Continue With</p>


<div className="flex justify-center gap-4 mb-4">
<button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:shadow-md transition"> <FcGoogle size={20}/></button>
<button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:shadow-md transition"> <FaApple size={20}/></button>
</div>


 <p className="text-sm">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            to={isSignIn ? "/page1" : "/"}
            className="font-semibold text-blue-500 hover:underline"
          >
            {isSignIn ? "SIGN UP" : "SIGN IN"}
          </Link> 
        </p>
</div>
</div>
);
}




