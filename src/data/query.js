const query = `
{
  blogCollection {
    items {
      title
      category
      content {
        json
      }
    }
  }
}
`;

export default query;
