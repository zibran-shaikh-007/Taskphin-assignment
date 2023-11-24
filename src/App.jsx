import JobForm from "components/JobForm";
import JobCard from "components/JobCard";

const App = () => {
  return (
    <div className="h-full flex-col justify-center items-center flex">
      <JobForm className="my-10" />
      <JobCard className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-[83.12px] gap-y-[79px] pl-[85px] pr-[44.88px] pt-[30px] pb-[49px] bg-zinc-300" />
    </div>
  );
};

export default App;
