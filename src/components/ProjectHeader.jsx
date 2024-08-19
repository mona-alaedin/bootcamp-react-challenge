/* eslint-disable react/prop-types */
function ProjectHeader({ status, active, setActive }) {
  return (
    <div className="flex justify-between items-center rounded-sm p-4">
      <p className="text-slate-800 text-xl">لیست پروژه ها</p>
      <div className="flex gap-x-6">
        <Status status={status} active={active} setActive={setActive} />
        {/* SORT */}
        <select className="rounded-md outline-none">
          <option selected value="">
            مرتب سازی بر اساس
          </option>
          <option value="">جدید ترین</option>
          <option value="">قدیمی ترین</option>
        </select>

        {/* CATEGORY */}
        <select className="rounded-md outline-none">
          <option selected value="">
            دسته بندی (همه)
          </option>
          <option value="">web development</option>
          <option value="">UI/UX Designer</option>
        </select>
      </div>
    </div>
  );
}

export default ProjectHeader;

function Status({ status, active, setActive }) {
  return (
    <div className="flex items-center">
      <span className="ml-2">وضعیت :</span>
      <div className="bg-white p-1 rounded-md font-bold">
        {status.map((item, index) => (
          <button
            onClick={() => setActive(item.englishTitle)}
            key={index}
            className={`mx-1.5 p-0.5 w-14 rounded-md transition-all ease-linear duration-150 ${
              active === item.englishTitle ? "bg-blue-700 text-white" : ""
            }`}>
            {item.persianTitle}
          </button>
        ))}
      </div>
    </div>
  );
}
