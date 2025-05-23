import { memo } from "react";
import SubCategoryBar from "../common/SubCategoryBar";
import ContentComponent from "../content/ContentComponent";
import AskService from "../common/AskService";
import InfoUsing from "../common/InfoUsing";
import DownloadAppComponent from "../common/DownloadAppComponent";

function FAQ() {
  return (
    <div className="min-h-[100vh] m-[0_auto]">
      <SubCategoryBar />
      <ContentComponent />
      <AskService />
      <InfoUsing />
      <DownloadAppComponent />
    </div>
  );
}

export default memo(FAQ);
