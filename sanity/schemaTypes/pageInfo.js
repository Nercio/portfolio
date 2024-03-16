export const pageInfo = {
  name: "pageInfo",
  title: "Page Info",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "quote",
      title: "Quote",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone number",
      type: "string",
    },
    {
      name: "coordinates",
      title: "Coordinates",
      type: "object",
      fields: [
        {
          name: "lat",
          title: "Latitude",
          type: "string",
        },
        {
          name: "long",
          title: "Longitude",
          type: "string",
        },
      ],
    },
  ],
};
