const Preregistration = ({subjects,handleSelectedSubject}) => {
  return (
    <div>
      <div>
        <div className="text-center">
          <p className="text-center mt-4 text-xl font-bold">Preregistration</p>
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
      <div className="mt-2">
        <div className="lg:flex lg:gap-3 lg:justify-center">
          <label className="swap swap-rotate inline-flex items-center cursor-pointer">
            <input type="checkbox" className="hidden peer" />
            {/* <!-- Swap On (Visible when checked) --> */}
            <div className="swap-on hidden peer-checked:block">
              <img
                className="w-4 h-4"
                src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png"
                alt="Checked"
              />
            </div>
            {/* <!-- Swap Off (Visible when not checked) --> */}
            <div className="swap-off block peer-checked:hidden">
              <img
                className="w-4 h-4"
                src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png"
                alt="Unchecked"
              />
            </div>
          </label>
          <p className="font-bold text-lg">Pre-advising Complete </p>
        </div>

        <div className="text-center mt-5">
          <p>
            <span className="font-bold">Maximum credit limit</span>{" "}
            <span className="font-semibold"> : 13.0</span>
          </p>
          <p>
            <span className="font-bold">Total taken courses</span>{" "}
            <span className="font-semibold">: 3</span>
          </p>
          <p>
            <span className="font-bold">Total used credit</span>{" "}
            <span className="font-semibold">: 9.0</span>
          </p>
        </div>

        <div className="mt-3">
          <p className="text-center hover:underline hover:text-blue-500">
            See Co-curricular Courses
          </p>
        </div>
      </div>
      {/* subject table */}
      <div>
            <div id="main-container" className="p-4">
                <div id="table-container" className="overflow-x-auto">
                  <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm ">
                    <thead className="bg-[#0099cc]">
                      <tr className="text-sm text-white">
                        <th className="border font-semibold border-gray-300 px-4 py-1 text-center">Course ID</th>
                        <th className="border font-semibold border-gray-300 px-4 py-1 text-center">Course Name</th>
                        <th className="border font-semibold border-gray-300 px-2 py-1 text-center w-20">Credits</th>
                        <th className="border font-semibold border-gray-300 px-2 py-1 text-center w-20">Mandatory?</th>
                        <th className="border font-semibold border-gray-300 px-2 py-1 text-center w-20">Taken</th>
                      </tr>
                    </thead>
                    <tbody id="table-body">
                      {/* <!-- Rows will be appended here dynamically --> */}
                      {subjects.map(subject => (
                          <tr key={subject.course_id}>
                          <td className="text-sm font-semibold border border-gray-300 px-4 py-1">{subject.course_id}</td>
                          <td className="text-sm font-semibold border border-gray-300 px-8 py-1">{subject.course_name}</td>
                          <td className="text-sm font-semibold border border-gray-300 px-2 py-1 text-center">{subject.credits}.00</td>
                          <td className="text-sm font-semibold border border-gray-300 px-2 py-1 text-center">{subject.mandatory}</td>
                          <td className="text-sm font-semibold border border-gray-300 px-2 py-1 text-center"><label className="swap swap-rotate inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="hidden peer" />
                              {/* <!-- Swap On (Visible when checked) --> */}
                              <div className="swap-on hidden peer-checked:block">
                                  <img className="w-4 h-4" src={subject.taken_right} alt="Checked"/>
                              </div>
                              {/* <!-- Swap Off (Visible when not checked) --> */}
                              <div className="swap-off block peer-checked:hidden">
                                  <img onClick={() => handleSelectedSubject(subject)} className="w-4 h-4" src={subject.taken_close} alt="Unchecked"/>
                              </div>
                              </label>
                              </td>
                        </tr>
                      ))}
                      
                    </tbody>
                  </table>
                </div>
            </div>
      </div>

      <div>
            <p className="text-center font-semibold">Co-curricular Courses: </p>
        </div>
         
        {/* <!-- Co-curricular table --> */}
        <div>
            <div id="main-container" className="p-4">
                <div id="table-container" className="overflow-x-auto">
                  <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm text-white">
                    <thead className="bg-[#0099cc]">
                      <tr className="text-sm">
                        <th className="border font-semibold border-gray-300 px-4 py-1 text-center">Course ID</th>
                        <th className="border font-semibold border-gray-300 px-4 py-1 text-center">Course Name</th>
                        <th className="border font-semibold border-gray-300 px-2 py-1 text-center w-20">Credits</th>
                        <th className="border font-semibold border-gray-300 px-2 py-1 text-center w-20">Mandatory?</th>
                        <th className="border font-semibold border-gray-300 px-2 py-1 text-center w-20">Taken</th>
                      </tr>
                    </thead>
                    <tbody id="table-body-Co-curricular">
                      {/* <!-- Rows will be appended here dynamically --> */}
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
        

        <div className="mt-6">
            <p className="text-gray-400 text-center">Click here to add retake courses</p>
        </div>
        <div className="border  lg:w-[810px] lg:h-[30px] lg:mt-[44px] bg-[#89c4eefa] lg:flex lg:justify-center lg:items-center">
            <p className="text-center text-black text-[10px] lg:text-sm">System developed by : <span className="font-semibold">Developer Md Rifat Hossain</span></p>
        </div>
    </div>
  );
};

export default Preregistration;
