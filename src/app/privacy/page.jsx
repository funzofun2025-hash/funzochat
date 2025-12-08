import { privacyPolicyData } from "../../lib/policy";
import PolicyPage from "../ui/HeroUI/PolicyPage";

async function page() {
  return <PolicyPage policyData={privacyPolicyData} />;
}
export default page;
