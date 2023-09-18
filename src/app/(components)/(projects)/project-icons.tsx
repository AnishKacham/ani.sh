"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IProjectCard } from "./project-card";

export const ProjectIcons = (props: IProjectCard) => {
  return (
    <div className="flex flex-row gap-2">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          window.open(props.github, "_blank");
        }}
      >
        <GitHubIcon />
      </button>
      {props.link && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(props.link, "_blank");
          }}
        >
          <OpenInNewIcon />
        </button>
      )}
    </div>
  );
};
