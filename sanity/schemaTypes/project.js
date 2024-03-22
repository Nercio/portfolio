export const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imagesGallery",
      title: "Images gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
    {
      name: "tech",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  orderings: [
    {
      title: "Newest First",
      name: "newestFirst",
      by: [{ field: "_updatedAt", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "oldestFirst",
      by: [{ field: "_updatedAt", direction: "asc" }],
    },
  ],
};
