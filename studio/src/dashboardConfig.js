export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605b030c7081d5e641e22275",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-fkuegho1",
                  apiId: "10d8212d-49ad-4ccd-a4ec-a977054bb84c",
                },
                {
                  buildHookId: "605b030c636c9cf7cca1f12a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-hwedv46a",
                  apiId: "5d231dbd-4e4e-4718-a728-588fb0c932a7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/EG-Demo/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-hwedv46a.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
