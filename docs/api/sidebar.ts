import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/docupipe-api",
    },
    {
      type: "category",
      label: "Documents",
      items: [
        {
          type: "doc",
          id: "api/post-document",
          label: "Submit a Document for Processing",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
