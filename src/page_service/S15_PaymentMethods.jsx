import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertModel from "../componants_service/reshma/AlertModel";

export default function Page63() {
  const [open, setOpen] = useState(true);
const navigate = useNavigate();
  return (
    <AlertModel
      open={open}
      variant="payment"
      title="Congratulations"
      message="Your Payment is Successfully. Purchase a New Course."
      onPrimaryClick={() => navigate("/65")}
      onSecondaryClick={() => console.log("Watch Course")}
    />
  );
}
