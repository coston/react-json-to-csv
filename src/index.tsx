import React from "react";
import jsonToCsvExport from "json-to-csv-export";

import { CsvDownloadProps } from "./types/CsvDownload";

const CsvDownload = ({
  data,
  filename,
  component,
  children,
  ...others
}: CsvDownloadProps) => {
  return (
    <button onClick={() => jsonToCsvExport(data, filename)} {...others}>
      {children || "Download Data"}
    </button>
  );
};
export default CsvDownload;
