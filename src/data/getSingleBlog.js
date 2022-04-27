const getSingleBlog = `
query GetSingleBlogBySlug($slug: String!) {
  blogCollection(where: {slug: $slug}){
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

export default getSingleBlog;
