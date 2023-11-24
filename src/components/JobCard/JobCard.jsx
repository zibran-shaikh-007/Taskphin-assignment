import Card from "components/common/Card";
import Button from "components/common/Button";
import { Jobs } from "src/data/jobs";

const JobCard = ({className}) => {
  return (
    <div className={className}>
      {Jobs?.map((job) => {
        return (
          <Card
            key={job.id}
            /*  Passing width, height & font as props */
            className="w-max-[830px] h-min-80 lg:h-80 px-6 py-4 font-normal bg-white rounded-[10px] border border-lightgrey justify-between inline-flex"
            img={{ src: job.logo, style: "w-12 h-12 rounded-[5px]", alt: "netflix" }}
            contentLeft={
              <div className="flex-col gap-6 inline-flex">
                <div className="flex-col inline-flex">
                  <h4 className="text-black text-2xl">{job.designation}</h4>
                  <span className="text-black text-base">{job.company}</span>
                  <span className="text-stone-500 text-base ">{job.location}</span>
                </div>

                <ul className="text-neutral-800 text-base flex-col gap-2 inline-flex">
                  <li>{job.type}</li>
                  <li>{job.experience}</li>
                  <li>{job.salary}</li>
                  <li>{job.employees}</li>
                </ul>

                <Button className={job.applicationType === "external" ? "btn-outline" : "btn-primary"}>
                  {job.applicationType === "external" ? "External Apply" : "Apply Now"}
                </Button>
              </div>
            }
          />
        );
      })}
    </div>
  );
};
export default JobCard;
