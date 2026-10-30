import type { Metadata } from "next";
import Resume from "@/components/Resume";
import Certifications from "@/components/Certifications";

export const metadata: Metadata = {
  title: "Resume — Teni Olugboyega",
};

export default function ResumePage() {
  return (
    <>
      <Resume />
      <Certifications />
    </>
  );
}
