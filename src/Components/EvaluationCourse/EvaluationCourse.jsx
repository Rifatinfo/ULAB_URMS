const EvaluationCourse = () => {
  const courses = [
    {
      course_id: "CSE101",
      course_name: "Introduction to Computer Science",
      section: "A",
    },
    {
      course_id: "CSE102",
      course_name: "Data Structures",
      section: "B",
    },
    {
      course_id: "CSE103",
      course_name: "Algorithms",
      section: "C",
    },
  ];

  return (
    <div>
      <div>
        <div className="text-center">
          <p className="text-center mt-4 text-xl font-bold">
            Course Evaluation Submission
          </p>
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

      <div>
        <div id="main-container" className="p-4">
          <div id="table-container" className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm">
              <thead className="bg-[#0099cc]">
                <tr className="text-sm text-white">
                  <th className="border font-semibold border-gray-300 px-4 py-1 text-center">
                    Course ID
                  </th>
                  <th className="border font-semibold border-gray-300 px-4 py-1 text-center">
                    Course Name
                  </th>
                  <th className="border font-semibold border-gray-300 px-4 py-1 text-center">
                    Section
                  </th>
                  <th className="border font-semibold border-gray-300 px-4 py-1 text-center">
                    Evaluate
                  </th>
                </tr>
              </thead>
              <tbody id="table-body">
                {/* <!-- Rows will be appended here dynamically --> */}
                {courses.map((course) => (
                  <tr key={course.course_id}>
                    <td className="text-sm font-semibold border border-gray-300 px-4 py-1 text-center">
                      {course.course_id}
                    </td>
                    <td className="text-sm font-semibold border border-gray-300 px-4 py-1">
                      {course.course_name}
                    </td>
                    <td className="text-sm font-semibold border border-gray-300 px-4 py-1 text-center">
                      {course.section}
                    </td>
                    <td className="text-sm font-semibold border border-gray-300 px-4 py-1 text-center">
                      <button className=" text-gray-500 px-2 py-1 rounded font-bold">
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="border  lg:w-[810px] lg:h-[30px] lg:mt-[44px] bg-[#89c4eefa] lg:flex lg:justify-center lg:items-center">
        <p className="text-center text-black text-[10px] lg:text-sm">
          System Clone by :{" "}
          <span className="font-semibold">Developer Md Rifat Hossain</span>
        </p>
      </div>
    </div>
  );
};

export default EvaluationCourse;
