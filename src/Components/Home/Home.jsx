const Home = () => {
  return (
    <div>
      <div>
        <div className="text-center">
          <p className="text-center mt-14 text-xl font-bold"></p>
          <div className="mt-4">
            <div className="flex gap-3 justify-center">
              <p>
                <span className="font-bold">Semester :</span>{" "}
                <span className="font-semibold">251 (Spring 2025)</span>
              </p>
              <p>
                <span className="font-bold">Student :</span>{" "}
                <span className="font-semibold">243014079 (Islam)</span>
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              <p>
                <span className="font-bold">Adviser : </span>{" "}
                <span className="font-semibold">Mr. Md. Nazmul Abdal</span>{" "}
              </p>
              <p>
                <span className="font-bold">Email :</span>{" "}
                <span className="font-semibold">nazmul.abdal@ulab.edu.bd</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-1">
        <hr />
      </div>
      <div className="h-72 flex justify-center items-center gap-6">
          <div className="text-center space-y-2 font-bold text-sm">
          <p className="hover:underline hover:text-[#8a7e4e]">Billing History</p>
          <p className="hover:underline hover:text-[#8a7e4e]">Current Status</p>
          <p className="hover:underline hover:text-[#8a7e4e]">Preregistration</p>
          <p className="hover:underline hover:text-[#8a7e4e]">Class Schedule</p>
          <p className="hover:underline hover:text-[#8a7e4e]">My Profile</p>
          <p className="hover:underline hover:text-[#8a7e4e]">Change Password</p>
          </div>
      </div>
      <div className="border  lg:w-[810px] lg:h-[30px] lg:mt-[44px] bg-[#89c4eefa] lg:flex lg:justify-center lg:items-center">
            <p className="text-center text-black text-[10px] lg:text-sm">System Clone by : <span className="font-semibold">Developer Md Rifat Hossain</span></p>
      </div>
    </div>
  );
};

export default Home;
