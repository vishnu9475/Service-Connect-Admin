import { useEffect, useState } from "react";
import AlertModel from "../componants_service/reshma/AlertModel";
import { useNavigate } from "react-router-dom";
export default function AccountSuccess() {
  const [open, setOpen] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/11");
      setOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AlertModel
      open={open}
      variant="account"
      title="Congratulations"
      message="Your Account is Ready to Use. You will be redirected to the Home Page in a Few Seconds."
    />
  );
}
