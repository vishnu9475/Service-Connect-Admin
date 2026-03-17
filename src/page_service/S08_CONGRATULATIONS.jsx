import { useEffect } from "react";
// import avatar from "../assets/Congrats-Avatar.png";



export default function SuccessRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // redirect logic
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      {/* <div className="relative w-full max-w-sm bg-white rounded-2xl p-6 text-center shadow-xl"> */}
          <div className="relative w-full max-w-sm bg-white rounded-2xl p-6 text-center shadow-xl">

        {/* Avatar */}
        <div className="relative mx-auto w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center">
          <div className="w-14 h-14" />
        </div>

{/* <div className="relative mx-auto w-24 h-24 overflow-hidden">
<img
  src="/Congrats-Avatar.png"
  alt="Congrats User"
  className="w-full h-full object-cover"
/>

</div> */}



        {/* Decorative dots */}
        <span className="absolute top-6 left-8 w-2 h-2 bg-red-500 rounded-full" />
        <span className="absolute top-12 right-10 w-2 h-2 bg-yellow-400 rounded-full" />
        <span className="absolute bottom-24 left-12 w-2 h-2 bg-slate-900 rounded-full" />
        <span className="absolute bottom-12 left-18 w-7 h-2 bg-green-900 rounded-full" />
        <span className="absolute top-24 right-1 w-2 h-2 bg-pink-400 rounded-full" />
        <span className="absolute top-30 left-18 w-2 h-2 bg-violet-400 rounded-full" />
{/* Star */}
<span className="absolute top-24 right-65">
  <svg
    className="w-4 h-4 text-pink-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l2.9 6.6L22 9.3l-5 4.9L18.2 22 12 18.5 5.8 22 7 14.2 2 9.3l7.1-.7L12 2z" />
  </svg>
</span>

<span className="absolute top-14 right-25">
  <svg
    className="w-4 h-4 text-blue-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l2.9 6.6L22 9.3l-5 4.9L18.2 22 12 18.5 5.8 22 7 14.2 2 9.3l7.1-.7L12 2z" />
  </svg>
</span>


{/* TRIANGLE */}

<span className="absolute bottom-14 right-25">
  <svg
    className="w-4 h-4 text-red-400"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 3L22 21H2L12 3Z" />
  </svg>
</span>



        {/* Text */}
        <h2 className="mt-6 text-xl font-semibold text-slate-900">
          Congratulations
        </h2>

        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
          Your account is ready to use. You will be redirected to the Home Page
          in a few seconds.
        </p>

        {/* Loader */}
        {/* <div className="mt-6 flex justify-center">
          <div className="w-8 h-8 border-6 border-slate-300 border-t-slate-900 rounded-full animate-spin"></div>
        </div> */}


        <div className="mt-6 flex justify-center">
  <div className="relative w-10 h-10 ">
    <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
    <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 animate-spin"></div>
  </div>
</div>

      </div>
    </div>
  );
}
