import { termsOfServiceData } from "../../lib/terms";
import PolicyPage from "../ui/HeroUI/PolicyPage";

async function page() {
  return <PolicyPage policyData={termsOfServiceData} />;
}
export default page;
