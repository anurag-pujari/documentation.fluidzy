import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "samples/get-document-detailed/docupipe-detailed-retrieval-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "samples/get-document-detailed/get-document-detailed",
          label: "Retrieve Detailed Processing Result",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
