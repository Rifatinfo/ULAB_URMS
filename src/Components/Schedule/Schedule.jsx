import React, { useState } from "react";
import { toast } from "react-toastify";

const Schedule = ({selectedSubject}) => {
      const notify = () => toast("Great, Advising Complete");
      const notify2 = () => toast("Successfully Selected This Subject");
    const [selectedData, setSelectedData] = useState([]);
  const [selectedScheduleAppend, setSelectedScheduleAppend] = useState([]);
  const handleScheduleData = (sub) => {
    setSelectedData(sub);
  };
  const handleAppend = (data) => {
    setSelectedScheduleAppend((prev) => {
      // Add only unique entries based on a unique identifier like 'section'
      const uniqueData = data.filter(
        (newEntry) => !prev.some((existingEntry) => existingEntry.section === newEntry.section)
      );
      return [...prev, ...uniqueData];
    });
  };
  
  console.log(selectedScheduleAppend);
    return (
        <div>
            <div>
            <div className="text-center">
                <p className="text-center mt-4 text-xl font-bold">Class Schedule</p>
                <div className="mt-4">
                    <div className="flex gap-3 justify-center">
                        <p><span className="font-bold">Semester :</span> <span className="font-semibold">251 (Spring 2025)</span></p>
                        <p><span className="font-bold">Student :</span>  <span className="font-semibold">243014079 (Islam)</span></p>
                    </div>
                    <div className="flex gap-3 justify-center">
                        <p><span className="font-bold">Adviser : </span> <span className="font-semibold">Mr. Md. Nazmul Abdal</span> </p>
                        <p><span className="font-bold">Email :</span>    <span className="font-semibold">nazmul.abdal@ulab.edu.bd</span></p>
                    </div>
                </div>
            </div>
            </div>
            <div className="mt-4 mb-1">
                <hr/>
            </div>
            <div className="mt-2">
                <div className="lg:flex lg:gap-3 lg:justify-center">
                    <label className="swap swap-rotate inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="hidden peer" />
                        {/* <!-- Swap On (Visible when checked) --> */}
                        <div className="swap-on hidden peer-checked:block">
                            <img className="w-4 h-4" src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png" alt="Checked"/>
                        </div>
                        {/* <!-- Swap Off (Visible when not checked) --> */}
                        <div className="swap-off block peer-checked:hidden">
                            <img onClick={notify} className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="Unchecked"/>
                        </div>
                        </label>
                    <p className="font-bold text-lg">Advising Complete </p>
                </div>


            </div>
            {/* append section */}
            <div>
        <div>
          <div className="mt-32 flex justify-center mb-16">
            <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300 w-full text-left text-sm">
  <thead>
    <tr className="bg-[#0099cc] text-white">
      <th className="border border-gray-300 px-4 py-1 text-left">Course ID</th>
      <th className="border border-gray-300 px-4 py-1 text-left">Course Name</th>
      <th className="border border-gray-300 px-4 py-1 text-left">Section</th>
      <th className="border border-gray-300 px-4 py-1 text-left">Day</th>
      <th className="border border-gray-300 px-4 py-1 text-left">Time</th>
      <th className="border border-gray-300 px-4 py-1 text-left">Room No</th>
      <th className="border border-gray-300 px-4 py-1 text-left"></th>
    </tr>
  </thead>
  <tbody id="IdCourseContainer">
    {selectedSubject.map((selectedSub, index) => (
      <tr key={index} className="text-sm">
        <td className="border border-gray-300 px-4 py-1">{selectedSub.course_id}</td>
        <td className="border border-gray-300 px-4 py-1">{selectedSub.course_name}</td>
        
        {/* Render selected schedule data if it exists */}
        {selectedScheduleAppend.length !== 0 ? (
          <>
            <td className="border border-gray-300 px-4 py-1">
              {selectedScheduleAppend[index]?.section || ''}
            </td>
            <td className="border border-gray-300 px-4 py-1">
              {selectedScheduleAppend[index]?.day || ''}
            </td>
            <td className="border border-gray-300 px-4 py-1">
              {selectedScheduleAppend[index]?.time || ''}
            </td>
            <td className="border border-gray-300 px-4 py-1">
              {/* Debugging step: Check the room_no field */}
              {selectedScheduleAppend[index]?.room ? selectedScheduleAppend[index].room : ''}
            </td>
          </>
        ) : (
          <>
            <td className="border border-gray-300 px-4 py-1"></td>
            <td className="border border-gray-300 px-4 py-1"></td>
            <td className="border border-gray-300 px-4 py-1"></td>
            <td className="border border-gray-300 px-4 py-1"></td>
          </>
        )}
        
        <td
          onClick={() => handleScheduleData(selectedSub.schedule)}
          className="border border-gray-300 px-4 py-1 text-gray-500 hover:underline cursor-pointer font-bold"
        >
          Select
        </td>
      </tr>
    ))}
  </tbody>
</table>


            </div>
          </div>
        </div>
        <div>
          {/*  append section  select Button  */}
          <div className="flex flex-col max-w-3xl mx-auto  mt-12">
            <div className="flex justify-center">
              <table className="table-auto border-collapse border border-gray-300 w-full text-center">
                <thead>
                  <tr className="text-sm">
                    <th className="border border-gray-300 px-4 py-1">Choose</th>
                    <th className="border border-gray-300 px-4 py-1">
                      Section
                    </th>
                    <th className="border border-gray-300 px-4 py-1">Day</th>
                    <th className="border border-gray-300 px-4 py-1">Time</th>
                    <th className="border border-gray-300 px-4 py-1">
                      Room No
                    </th>
                  </tr>
                </thead>
                <tbody id="select-container">
                  {Object.entries(
                    selectedData.reduce((acc, curr) => {
                      if (!acc[curr.section]) acc[curr.section] = [];
                      acc[curr.section].push(curr);
                      return acc;
                    }, {})
                  ).map(([section, entries]) => (
                    <React.Fragment key={section}>
                      {entries.map((entry, index) => (
                        <tr key={`${section}-${index}`} className="text-sm">
                          {index === 0 && (
                            <>
                              {/* Checkbox and Section */}
                              <td
                                rowSpan={entries.length}
                                className="border border-gray-300 px-4 py-1"
                              >
                                <label className="swap swap-rotate inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="hidden peer"
                                  />
                                  <div className="swap-on hidden peer-checked:block">
                                    <img
                                      className="w-4 h-4"
                                      src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png"
                                      alt="Checked"
                                    />
                                  </div>
                                  <div className="swap-off block peer-checked:hidden">
                                    <img
                                    onClick={() => {
                                        handleAppend(entries);
                                        notify2();
                                      }}                                      
                                      className="w-4 h-4"
                                      src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png"
                                      alt="Unchecked"
                                    />
                                  </div>
                                </label>
                              </td>
                              <td
                                rowSpan={entries.length}
                                className="border border-gray-300 px-4 py-1"
                              >
                                {section}
                              </td>
                            </>
                          )}
                          {/* Day and Time */}
                          <td className="border border-gray-300 px-4 py-1">
                            {entry.day}
                          </td>
                          <td className="border border-gray-300 px-4 py-1">
                            {entry.time}
                          </td>
                          {index === 0 && (
                            <td
                              rowSpan={entries.length}
                              className="border border-gray-300 px-4 py-1"
                            >
                              {entry.room}
                            </td>
                          )}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
            </div>
            <div className="border  lg:w-[810px] lg:h-[30px] lg:mt-[44px] bg-[#89c4eefa] lg:flex lg:justify-center lg:items-center">
              <p className="text-center text-black text-[10px] lg:text-sm">System Clone by : <span className="font-semibold">Developer Md Rifat Hossain</span></p>
           </div>
        </div>
    );
};

export default Schedule;