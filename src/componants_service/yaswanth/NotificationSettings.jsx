
import { useState } from "react";
import "./Toggle.css";

function ToggleSwitch() {
  const [offer, setOffer] = useState(false);
  const [sound,setSound] = useState(false)
  const [vibrate,setVibrate] = useState(false)
  const [notification,setNotification] = useState(false)
  const [promo,setPromo] = useState(false)
  const [payment,setPayment] = useState(false)
  const [app,setApp] = useState(false)
  const [service,setService] = useState(false)
  const [tips,setTips] = useState(false)

  return (
    <div className="p-7">
    <div className="flex justify-between">
    <h1>Special Offers</h1>
    <label className="switch">
      <input
        type="checkbox"
        checked={offer}
        onChange={() => setOffer(!offer)}
      />
      <span className="slider"></span>
    </label>
    </div>
   
    <div className="flex justify-between mt-4">
    <h1>Sound</h1>
    <label className="switch">
      <input
        type="checkbox"
        checked={sound}
        onChange={() => setSound(!sound)}
      />
      <span className="slider"></span>
    </label>
    </div>
     <div className="flex justify-between mt-4">
    <h1>Vibrate</h1>
    <label className="switch">
      <input
        type="checkbox"
        checked={vibrate}
        onChange={() => setVibrate(!vibrate)}
      />
      <span className="slider"></span>
    </label>
    </div>
     <div className="flex justify-between mt-4">
    <h1>General notification</h1>
    <label className="switch">
      <input
        type="checkbox"
        checked={notification}
        onChange={() => setNotification(!notification)}
      />
      <span className="slider"></span>
    </label>
    </div>
     <div className="flex justify-between mt-4">
    <h1>Promo & Discount</h1>
    <label className="switch">
      <input
        type="checkbox"
        checked={promo}
        onChange={() => setPromo(!promo)}
      />
      <span className="slider"></span>
    </label>
    </div>
     <div className="flex justify-between mt-4">
    <h1>Payment options</h1>
    <label className="switch">
      <input
        type="checkbox"
        checked={payment}
        onChange={() => setPayment(!payment)}
      />
      <span className="slider"></span>
    </label>
    </div>
    <div className="flex justify-between mt-4">
    <h1>App update</h1>
    <label className="switch">
      <input
        type="checkbox"
        checked={app}
        onChange={() => setApp(!app)}
      />
      <span className="slider"></span>
    </label>
    </div>
    <div className="flex justify-between mt-4">
    <h1>New service available</h1>
    <label className="switch">
      <input
        type="checkbox"
        checked={service}
        onChange={() => setService(!service)}
      />
      <span className="slider"></span>
    </label>
    </div>
    <div className="flex justify-between mt-4">
    <h1>New tips available</h1>
    <label className="switch">
      <input
        type="checkbox"
        checked={tips}
        onChange={() => setTips(!tips)}
      />
      <span className="slider"></span>
    </label>
    </div>
    </div>
  );
}

export default ToggleSwitch;

