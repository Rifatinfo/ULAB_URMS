import { useState } from "react";

const Login = ({handleLogin}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(id);
        console.log(password);
    }
    return (
        <div>
             <section className="nunito bg-[#c5d8f0]">
    <section className="lg:flex lg:justify-center mt-4 bg-white">
      <div className="lg:w-[812px] lg:h-[599px] bg-white shadow-lg">
        <div>
          <div>
            <img
              className="lg:w-[800px] lg:h-[100px]"
              src="https://urms-online.ulab.edu.bd/images/header.jpg"
              alt=""
            />
          </div>
          <button
            className=" w-full lg:w-[810px] lg:h-[44px] bg-gradient-to-r from-[#0069b4] via-[#0098dc] to-[#00d1ff] text-xl nunito text-white font-bold"
          >
            login
          </button>
        </div>

        {/* <!-- login details  --> */}
        <form onClick={handleSubmit} className="ml-16 flex lg:mr-16 lg:flex justify-center items-center h-[380px]">
          <div className="space-y-2">
            <p className="ml-10 lg:text-center text-xl font-bold">Please login!</p>
            <div className="lg:flex gap-3">
              <p className="text-xl font-bold">StudentId :</p>
              <input value={id} onChange={(e) => setId(e.target.value)} id="StudentId-field" className="border-black border-2" type="text" />
            </div>
            <div className="lg:flex gap-3">
              <p className=" text-xl font-bold">Password :</p>
              <input value={password} onChange={(e) => setPassword(e.target.value)} id="studentPassword-field" className="border-black border-2 ml-1" type="text" />
            </div>
            <div className="mt-2">
               <div className="container">
                <p className="text-center mt-2 moving-text">Please enter login information.</p>
               </div>
                <div className="ml-5 lg:ml-24 mt-7">
                    <div className="flex gap-3 lg:flex lg:justify-center lg:items-center lg:gap-3">
                        <button onClick={() => handleLogin(id, password)} id="btn-login" className="px-5 py-1 rounded-lg text-white bg-gradient-to-r from-[#0069b4] via-[#0098dc] to-[#00d1ff]">login</button>
                        <button className="px-5 py-1 rounded-lg text-white bg-gradient-to-r from-[#0069b4] via-[#0098dc] to-[#00d1ff] hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">close</button>
                    </div>
                </div>
            </div>
          </div>
        </form>
        <div className="border  lg:w-[810px] lg:h-[30px] lg:mt-[44px] bg-[#89c4eefa] lg:flex lg:justify-center lg:items-center">
            <p className="text-center text-black text-[10px] lg:text-sm">System Clone by : <span className="font-semibold">Developer Md Rifat Hossain</span></p>
        </div>
      </div>
    </section>
            </section>
        </div>
    );
};

export default Login;