export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed2b38002b1492df7b588b2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1kebg76f',
                  apiId: '006f2787-824e-4bef-bfb7-70463ce9fdda'
                },
                {
                  buildHookId: '5ed2b38076683435cdc1dc57',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rwforkyp',
                  apiId: 'a111fd4e-507b-4f05-9733-badcaf185034'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magic8baller/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rwforkyp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
