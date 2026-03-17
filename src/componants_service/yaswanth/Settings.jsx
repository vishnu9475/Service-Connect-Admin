import {User} from "lucide-react"
import {ChevronRight} from "lucide-react"
import {Power} from "lucide-react"
import {Bell} from "lucide-react"
import {Wallet} from "lucide-react"
import {Languages} from "lucide-react"
import {CircleQuestionMark} from "lucide-react"



const Settings = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <div className="flex">
          <User />
          <h1 className="ml-10">Account</h1>
        </div>
          <ChevronRight />
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex">
          <Bell />
          <h1 className="ml-10">Notification</h1>
        </div>
          <ChevronRight />
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex">
          <User />
          <h1 className="ml-10">Display</h1>
        </div>
          <ChevronRight />
      </div> 
      <div className="flex justify-between mt-10">
        <div className="flex">
          <User />
          <h1 className="ml-10">Privacy</h1>
        </div>
          <ChevronRight />
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex">
          <Wallet />
          <h1 className="ml-10">Payment</h1>
        </div>
          <ChevronRight />
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex">
          <Languages />
          <h1 className="ml-10">Language</h1>
        </div>
          <ChevronRight />
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex">
          <CircleQuestionMark />
          <h1 className="ml-10">Help</h1>
        </div>
          <ChevronRight />
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex">
          <Power />
          <h1 className="ml-10">Logout</h1>
        </div>
         <ChevronRight />
      </div>
    </div>
  )
}

export default Settings
