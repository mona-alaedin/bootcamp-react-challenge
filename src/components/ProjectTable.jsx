function ProjectTable() {
  return (
    <div className="">
      <table className="w-full mt-12 text-slate-900">
        <thead>
          <tr className="bg-sky-100">
            <th>ردیف</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-slate-300">
            <td>1</td>
            <td>پروژه طراحی سایت</td>
            <td>5000000</td>
            <td>1403/08/20</td>
            <td>
              <button className="bg-red-500 text-white py-1 px-3 rounded-2xl">
                بسته
              </button>
            </td>
            <td>
              <button>📑</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
