const Billing = () => {
  return (
    <div>
      <div>
        <div className="text-center">
          <p className="text-center mt-4 text-xl font-bold">Billing</p>
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
      <div className="h-[483px] flex justify-center items-center">
             <div>
                <h1 className="text-3xl text-red-500 font-bold">Content Not Available</h1>
             </div>
      </div>
      <div className="border  lg:w-[810px] lg:h-[30px] lg:mt-[44px] bg-[#89c4eefa] lg:flex lg:justify-center lg:items-center">
            <p className="text-center text-black text-[10px] lg:text-sm">System Clone by : <span className="font-semibold">Developer Md Rifat Hossain</span></p>
        </div>
    </div>
  );
};

export default Billing;
