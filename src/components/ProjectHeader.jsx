function ProjectHeader() {
  return (
    <div className="flex justify-between items-center rounded-sm p-4">
      <p className="text-slate-800 text-xl">لیست پروژه ها</p>
      <div className="flex gap-x-6">
        {/* STATUS */}
        <div className="flex items-center">
          <span className="ml-2">وضعیت :</span>
          <div className="bg-white p-1 rounded-md font-bold">
            <button className="p-0.5 w-12 bg-blue-700 text-white rounded-md">
              همه
            </button>
            <button className="mx-1.5 p-0.5 w-14 rounded-md">باز</button>
            <button className="p-0.5 w-14 rounded-md">بسته</button>
          </div>
        </div>

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
