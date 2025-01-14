
const Schedule = ({selectedSubject}) => {
    return (
        <div>
            <div>
            <div className="text-center">
                <p className="text-center mt-4 text-xl font-bold">Class Schedule</p>
                <div className="mt-4">
                    <div className="flex gap-3 justify-center">
                        <p><span className="font-bold">Semester :</span> <span className="font-semibold">251 (Spring 2025)</span></p>
                        <p><span className="font-bold">Student :</span>  <span className="font-semibold">243014079 (Zara Islam)</span></p>
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
                            <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="Unchecked"/>
                        </div>
                        </label>
                    <p className="font-bold text-lg">Advising Complete </p>
                </div>


            </div>
        </div>
    );
};

export default Schedule;