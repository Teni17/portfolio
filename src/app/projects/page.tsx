import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Teni Olugboyega",
};

export default function ProjectsPage() {
  return <Projects />;
}
