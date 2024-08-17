import "./App.css";
import ProjectHeader from "./components/ProjectHeader";
import ProjectTable from "./components/ProjectTable";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 3,
    title: "توسعه سایت فروشگاهی",
    description: "طراحی سایت فروشگاهی لوازم خانگی",
    status: "CLOSE",
    category: {
      id: 3,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 3050000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2025-12-23T12:55:48.740Z",
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
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2021-10-23T18:18:55.636Z",
    updatedAt: "2023-06-02T13:37:48.468Z",
  },
];

function App() {
  return (
    <div>
      {/* <div>
        <p className="text-start text-slate-800">لیست پروژه ها</p>
        <button className="py-2 px-6 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-all mt-20">
          نمایش پروژه ها
        </button>
      </div> */}
      <ProjectHeader />
      <ProjectTable />
    </div>
  );
}

export default App;
