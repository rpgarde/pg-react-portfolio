const query = `
{
  blogCollection {
    items {
      title
      category
      content {
        json
      }
      sys {
        publishedAt
      }
    }
  }
}
`;

export default query;
