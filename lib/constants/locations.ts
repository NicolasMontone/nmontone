export const locations = {
  home: () => '/',
  blog: () => '/blog',
  projects: () => '/projects',
  posts: (id: string) => `/posts/${id}`,
}
