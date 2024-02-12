import SectionHeader from "./sections/section-header";
import SectionMyRole from "./sections/section-my-role";
import SectionTheProject from "./sections/section-the-project";

export const metadata = {
  title: "Work details",
  description: "Work details",
};
const WorkDetails = () => {
  return (
    <main>
      <SectionHeader />
      <SectionMyRole />
      <SectionTheProject />
    </main>
  );
};

export default WorkDetails;
