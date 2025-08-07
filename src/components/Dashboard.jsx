import LeftNav from "./left nav/LeftNav";
import pic from "../assets/profile.jpg";
import CurrentDateTime from "./utils/CurrentDateTime";
import { MdCoPresent } from "react-icons/md";

export default function Dashboard() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-1/6 bg-gray-800 h-screen">
          <LeftNav />
        </div>
        <div className="dashboard w-full p-4">
          <p className="text-3xl font-bold underline">Dashboard</p>
          <div className="flex flex-row justify-between m-1">
            <p className="pt-3">Welcome to the dashboard!</p>
            <div className="flex flex-row justify-between items-center gap-3">
              <CurrentDateTime />
              <p className="bg-amber-300 rounded-lg px-4 p-2 flex flex-row items-center gap-2">
                Check In <MdCoPresent />
              </p>
            </div>
          </div>
          <div className="flex flex-col border-2 p-2">
            <div className=" flex flex-row border-2">
              <div className="w-20 mr-4">
                <img src={pic} alt="profile" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm p-0 m-0">Name of user</p>
                <p className="text-sm p-0 m-0">role of the user</p>
                <p className="text-xs pt-3">Employee Id: 123</p>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-4">
              <div>
                <p>Open Tasks</p>
                <p>56</p>
              </div>
              <div>
                <p>Projects</p>
                <p>2</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4 gap-2">
            <div className="w-full">
              <p>Tasks</p>
              <div className="flex flex-row justify-between border-2 p-2 mt-2">
                <div>
                  <p>0</p>
                  <p>Pending</p>
                </div>
                <div>
                  <p>0</p>
                  <p>Overdue</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p>Projects</p>
              <div className="flex flex-row justify-between border-2 p-2 mt-2">
                <div>
                  <p>0</p>
                  <p>Pending</p>
                </div>
                <div>
                  <p>0</p>
                  <p>Overdue</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4 gap-2">
            <div className="w-full">
              <p>Birthday</p>
              <div>
                <div className="flex flex-row justify-between items-center border-2 p-2 mt-2">
                  <div className="flex flex-row items-center">
                    <img
                      src={pic}
                      alt="profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col ml-4">
                      <p>Name</p>
                      <p>role</p>
                    </div>
                  </div>
                  <div>
                    <p>date</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p>My Calender</p>
              <div className="flex flex-col border-2 p-2 mt-2">
                <p>name of task</p>
                <p>on what day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
