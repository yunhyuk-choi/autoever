import { memo } from "react";
import SubCategoryBar from "../content/contents-items/SubCategoryBar";
import ContentComponent from "../content/ContentComponent";
import AskService from "../content/contents-items/AskService";
import InfoUsing from "../content/contents-items/InfoUsing";
import DownloadAppComponent from "../content/contents-items/DownloadAppComponent";

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
