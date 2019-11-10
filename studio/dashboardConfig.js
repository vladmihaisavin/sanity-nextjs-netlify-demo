export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dc8254dcf9975f68c49ec53',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-netlify-demo-studio',
                  apiId: '1e108b4b-3cfe-4a0a-8481-5722a1089fe1'
                },
                {
                  buildHookId: '5dc8254d21788dd18ecbb315',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-netlify-demo',
                  apiId: '0525b8f4-7cdf-4b20-939d-15e8e4c1e7f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vladmihaisavin/sanity-nextjs-netlify-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-netlify-demo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
