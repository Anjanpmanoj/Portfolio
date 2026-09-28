import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 w-full bg-background border border-border rounded-lg h-full flex flex-col">
      <div className="relative w-full h-[140px] flex-shrink-0 flex items-center justify-center rounded-lg border border-border bg-muted">
        <span className="font-heading text-5xl tracking-wide text-muted-foreground/70 select-none">
          {project.monogram}
        </span>
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-foreground">
            {project.name}
          </h5>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.role} · {project.duration}
          </p>
        </div>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button variant={"default"} className="mt-2 w-full sm:w-auto">
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div
        className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border hidden md:block"
        title={project.type === "Solo" ? "Solo project" : `Team of ${project.teamSize}`}
      >
        {project.type === "Solo" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.users className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
