import React from 'react'

export default {
  name: 'portableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      styles: [
        {
          title: 'Normalna czcionka',
          value: 'normal',
          component: ({children}: {children: React.ReactNode}) => (
            <span style={{fontWeight: 400}}>{children}</span>
          ),
        },
        {
          title: 'H2',
          value: 'h2',
          component: ({children}: {children: React.ReactNode}) => (
            <h2 style={{fontSize: '1.8em', fontWeight: 400, margin: 0}}>{children}</h2>
          ),
        },
        {
          title: 'H3',
          value: 'h3',
          component: ({children}: {children: React.ReactNode}) => (
            <h3 style={{fontSize: '1.5em', fontWeight: 400, margin: 0}}>{children}</h3>
          ),
        },
        {
          title: 'H4',
          value: 'h4',
          component: ({children}: {children: React.ReactNode}) => (
            <h4 style={{fontSize: '1.3em', fontWeight: 400, margin: 0}}>{children}</h4>
          ),
        },
      ],
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                initialValue: 'https://',
              },
            ],
          },
        ],
      },
    },
    {type: 'portableImagesGrid'},
  ],
}
