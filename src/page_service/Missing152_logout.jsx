import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleClose = () => {
    navigate(-1); // go back
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      {/* Modal */}
      <div className="relative bg-[#f7f4ef] rounded-3xl w-[420px] px-8 py-10 text-center">
        
        {/* Close icon */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-5 text-xl text-gray-600"
        >
          ×
        </button>

        {/* Heading */}
        <h1 className="text-2xl font-semibold mb-4">
          Are you sure you want to <br /> log out?
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-8">
          This action cannot be undone
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/home")}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 bg-white"
          >
            Home
          </button>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-black text-white"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;