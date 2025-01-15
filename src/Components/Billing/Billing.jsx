const Billing = () => {
  const fees = [
    {
      date: "2025-01-01",
      head: "Admission Fee",
      amount: 1000,
      discount: 100,
      due_vat: 50,
      vat_adjusted: 50,
      payable: 900,
    },
    {
      date: "2025-01-02",
      head: "Tuition Fee",
      amount: 5000,
      discount: 500,
      due_vat: 100,
      vat_adjusted: 100,
      payable: 4500,
    },
    {
      date: "2025-01-02",
      head: "Tuition Fee",
      amount: 5000,
      discount: 500,
      due_vat: 100,
      vat_adjusted: 100,
      payable: 4500,
    },
    {
      date: "2025-01-02",
      head: "Tuition Fee",
      amount: 5000,
      discount: 500,
      due_vat: 100,
      vat_adjusted: 100,
      payable: 4500,
    },
    {
      date: "2025-01-02",
      head: "Tuition Fee",
      amount: 5000,
      discount: 500,
      due_vat: 100,
      vat_adjusted: 100,
      payable: 4500,
    },
    {
      date: "2025-01-02",
      head: "Tuition Fee",
      amount: 5000,
      discount: 500,
      due_vat: 100,
      vat_adjusted: 100,
      payable: 4500,
    },
    {
      date: "2025-01-03",
      head: "Library Fee",
      amount: 200,
      discount: 20,
      due_vat: 10,
      vat_adjusted: 10,
      payable: 180,
    },
    {
      date: "2025-01-03",
      head: "Library Fee",
      amount: 200,
      discount: 20,
      due_vat: 10,
      vat_adjusted: 10,
      payable: 180,
    },
    {
      date: "2025-01-03",
      head: "Library Fee",
      amount: 200,
      discount: 20,
      due_vat: 10,
      vat_adjusted: 10,
      payable: 180,
    },
    {
      date: "2025-01-04",
      head: "Lab Fee",
      amount: 800,
      discount: 80,
      due_vat: 40,
      vat_adjusted: 40,
      payable: 720,
    },
    {
      date: "2025-01-05",
      head: "Exam Fee",
      amount: 1500,
      discount: 150,
      due_vat: 75,
      vat_adjusted: 75,
      payable: 1350,
    },
    {
      date: "2025-01-06",
      head: "Hostel Fee",
      amount: 3000,
      discount: 300,
      due_vat: 150,
      vat_adjusted: 150,
      payable: 2700,
    },
    {
      date: "2025-01-06",
      head: "Hostel Fee",
      amount: 3000,
      discount: 300,
      due_vat: 150,
      vat_adjusted: 150,
      payable: 2700,
    },
  ];
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
             <table  style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#0099cc", color:"white" }}>
            <th style={{ border: "1px solid #ddd", padding: "4px" }}>Date</th>
            <th style={{ border: "1px solid #ddd", padding: "4px" }}>Head</th>
            <th style={{ border: "1px solid #ddd", padding: "4px" }}>Amount</th>
            <th style={{ border: "1px solid #ddd", padding: "4px" }}>Discount</th>
            <th style={{ border: "1px solid #ddd", padding: "4px" }}>Due VAT</th>
            <th style={{ border: "1px solid #ddd", padding: "4px" }}>VAT Adjusted</th>
            <th style={{ border: "1px solid #ddd", padding: "4px" }}>Payable</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "4px" }}>{fee.date}</td>
              <td style={{ border: "1px solid #ddd", padding: "4px" }}>{fee.head}</td>
              <td style={{ border: "1px solid #ddd", padding: "4px" }}>{fee.amount}</td>
              <td style={{ border: "1px solid #ddd", padding: "4px" }}>{fee.discount}</td>
              <td style={{ border: "1px solid #ddd", padding: "4px" }}>{fee.due_vat}</td>
              <td style={{ border: "1px solid #ddd", padding: "4px" }}>{fee.vat_adjusted}</td>
              <td style={{ border: "1px solid #ddd", padding: "4px" }}>{fee.payable}</td>
            </tr>
          ))}
        </tbody>
      </table>
                
             </div>
      </div>
      <div className="border  lg:w-[810px] lg:h-[30px] lg:mt-[44px] bg-[#89c4eefa] lg:flex lg:justify-center lg:items-center">
            <p className="text-center text-black text-[10px] lg:text-sm">System Clone by : <span className="font-semibold">Developer Md Rifat Hossain</span></p>
        </div>
    </div>
  );
};

export default Billing;
