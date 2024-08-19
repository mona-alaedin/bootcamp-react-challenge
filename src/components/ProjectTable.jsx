/* eslint-disable react/prop-types */
function ProjectTable({ allProjects }) {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return (
    <div className="">
      <table className="w-full mt-12 text-slate-900">
        <thead>
          <tr className="bg-teal-700 text-white">
            <th>ردیف</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {allProjects.map((item) => {
            return (
              <tr key={item._id} className="bg-white border-b border-slate-300">
                <td>{item._id}</td>
                <td>{item.title}</td>
                <td>{item.budget}</td>
                <td>
                  {new Date(item.deadline).toLocaleDateString("fa-IR", options)}
                </td>
                <td>
                  <button
                    className={`w-14 text-white py-1 px-3 rounded-2xl ${
                      item.status === "OPEN" ? "bg-green-500" : "bg-red-500"
                    }`}>
                    {item.status === "OPEN" ? "باز" : "بسته"}
                  </button>
                </td>
                <td>
                  <button>📑</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
