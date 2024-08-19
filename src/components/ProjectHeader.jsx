/* eslint-disable react/prop-types */
import FilterDropDown from "./FilterDropDown";

function ProjectHeader({
  status,
  active,
  setActive,
  projects,
  onSortType,
  onSortCategory,
}) {
  const sortOptions = [
    {
      lable: "مرتب سازی قدیمی ترین",
      value: "latest",
    },
    {
      lable: "مرتب سازی جدیدترین",
      value: "earliest",
    },
  ];

  const newCategories = projects.map(({ category }) => {
    return { lable: category.title, value: category.englishTitle };
  });

  const uniqueCategories = [
    ...new Set(newCategories.map((category) => category.lable)),
  ].map((lable) => {
    const category = newCategories.find((c) => c.lable === lable);
    return { lable, value: category.value };
  });

  return (
    <div className="flex justify-between items-center rounded-sm p-4">
      <p className="text-slate-800 text-xl">لیست پروژه ها</p>
      <div className="flex gap-x-6">
        <Status status={status} active={active} setActive={setActive} />

        <FilterDropDown options={sortOptions} onChange={onSortType}>
          <option value={"sort"}>مرتب سازی</option>
        </FilterDropDown>
        <FilterDropDown options={uniqueCategories} onChange={onSortCategory}>
          <option value={"all"}>دسته بندی بر اساس(همه)</option>
        </FilterDropDown>
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
            className={`mx-1.5 p-0.5 w-14 rounded-md transition-all ${
              active === item.englishTitle ? "bg-blue-700 text-white" : ""
            }`}>
            {item.persianTitle}
          </button>
        ))}
      </div>
    </div>
  );
}
