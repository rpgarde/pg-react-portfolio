const getAllBlogs = `
{
  blogCollection {
    items {
      title
      slug
      category
      content {
        json
      }
      sys {
        firstPublishedAt
        id
      }
    }
  }
}
`;

export default getAllBlogs;
