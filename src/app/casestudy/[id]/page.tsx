"use client";

import { projectData } from "@/components/projectsGrid";
import "../style.css";
import { usePathname } from "next/navigation";

const CaseStudy = () => {
  const pathname = usePathname();
  const temp = pathname.lastIndexOf("-");
  const projectId: any = pathname.slice(temp + 1);
  return (
    <div className="case-study">
      <span className="title">
        <h1>{projectData[projectId - 1]?.title}</h1>
        <p>
          From financial metrics to sales and marketing data, our dashboard
          provides you with a holistic view of your business operations.
        </p>
      </span>
      <div>
        <div className="flex flex-col">
          <span className="objective">
            <h4>Objective</h4>
            <p>{projectData[projectId - 1]?.objective}</p>
          </span>
          <span>
            <h4>Solutions</h4>
            <p>{projectData[projectId - 1]?.solutions}</p>
          </span>
          <span>
            <h4>Benefits</h4>
            <p>{projectData[projectId - 1]?.benefits}</p>
          </span>
        </div>
        <div className="flex flex-col">
          <span>
            <h4>Overview</h4>
            <p>{projectData[projectId - 1]?.overview}</p>
          </span>
          <span>
            <h4>Challenges</h4>
            <p>{projectData[projectId - 1]?.challenges}</p>
          </span>
          <span>
            <h4>Technology</h4>
            <p>{projectData[projectId - 1]?.technology}</p>
          </span>
          <span>
            <h4>Results</h4>
            <p>{projectData[projectId - 1]?.results}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default CaseStudy;
