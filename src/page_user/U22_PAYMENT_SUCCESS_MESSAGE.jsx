import React, { useState } from "react";
import AlertModal from "../componants_user/AlertModal";

const U22PaymentSuccessMessage = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {open && (
        <AlertModal
          title="Congratulations"
          message="Your Payment is Successfully. Purchase a New Course"
          onClose={() => setOpen(false)}
          onWatchLinkClick={() => console.log("Watch Course clicked")}
          onReceiptButtonClick={() => console.log("E-Receipt clicked")}
        />
      )}
    </div>
  );
};

export default U22PaymentSuccessMessage;
