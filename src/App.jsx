import { useState } from "react";
import "./App.css";
import ProjectHeader from "./components/ProjectHeader";
import ProjectTable from "./components/ProjectTable";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSE",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 1000000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2025-05-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت آموزشی",
    description: "یک سایت آموزشی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 5000000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2024-11-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 3,
    title: "توسعه سایت شخصی",
    description: "طراحی سایت شخصی با سئو ",
    status: "CLOSE",
    category: {
      id: 3,
      title: "بهینه سازی سئو",
      englishTitle: "seo",
    },
    budget: 3050000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2025-05-23T12:55:48.740Z",
    createdAt: "2022-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 4,
    title: "توسعه سایت خبری",
    description: "یک سایت خبری کامل ",
    status: "OPEN",
    category: {
      id: 4,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 4500000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2024-10-23T12:55:48.740Z",
    createdAt: "2021-10-23T18:18:55.636Z",
    updatedAt: "2023-06-02T13:37:48.468Z",
  },
];

const status = [
  {
    englishTitle: "ALL",
    persianTitle: "همه",
  },
  {
    englishTitle: "OPEN",
    persianTitle: "باز",
  },
  {
    englishTitle: "CLOSE",
    persianTitle: "بسته",
  },
];

function App() {
  const [show, setShow] = useState(false);
  const [allProjects, setAllProjects] = useState(projects);
  const [active, setActive] = useState("ALL");
  const [sortType, setSortType] = useState("latest");
  const [category, setCategory] = useState("");

  const handleActive = (activeValue) => {
    setActive(activeValue);
    switch (activeValue) {
      case "ALL":
        return setAllProjects(projects);
      case "OPEN":
        return setAllProjects(projects.filter((p) => p.status === "OPEN"));
      case "CLOSE":
        return setAllProjects(projects.filter((p) => p.status === "CLOSE"));
      default:
        console.log(`Unknown status value: ${activeValue}`);
        return;
    }
  };

  const sortHandler = (e) => {
    setSortType(e.target.value);
    if (sortType === "latest")
      setAllProjects(
        [...projects].sort(
          (a, b) => new Date(b.deadline) - new Date(a.deadline)
        )
      );
    if (sortType === "earliest")
      setAllProjects(
        [...projects].sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        )
      );
  };

  const sortCategoryHandler = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "all") return setAllProjects(projects);
    setAllProjects(
      projects.filter((c) => c.category.englishTitle === e.target.value)
    );
  };
  return (
    <div>
      {show ? (
        <>
          <ProjectHeader
            status={status}
            active={active}
            setActive={handleActive}
            projects={projects}
            onSortType={sortHandler}
            onSortCategory={sortCategoryHandler}
          />
          <ProjectTable allProjects={allProjects} />
        </>
      ) : (
        <div>
          <p className="text-start text-slate-800">لیست پروژه ها</p>
          <button
            onClick={() => setShow((is) => !is)}
            className="py-2 px-6 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-all mt-20">
            نمایش پروژه ها
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
