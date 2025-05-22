import { memo } from "react";
import SubCategoryBar from "../common/SubCategoryBar";
import ContentComponent from "../common/ContentComponent";

function FAQ() {
  return (
    <div className="min-h-[100vh] m-[0_auto]">
      <SubCategoryBar />
      <ContentComponent />
    </div>
  );
}

export default memo(FAQ);
