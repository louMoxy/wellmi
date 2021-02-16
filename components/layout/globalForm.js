import getRandID from '../../utils/getRandID'

export const globalForm = {
  label: 'Global settings',
  fields: [
    {
      label: 'Header Logo for light background',
      name: 'header.logo.light',
      component: 'image',
      parse: media => `/${media.filename}`,
      uploadDir: () => '/images/'
    },
    {
      label: 'Header Logo for dark background',
      name: 'header.logo.dark',
      component: 'image',
      parse: media => `/${media.filename}`,
      uploadDir: () => '/images/'
    },
    {
      label: 'Header Navigation',
      name: 'header.navigation',
      component: 'group-list',
      description: 'Navigation List',
      itemProps: (item) => ({
        key: item.id,
        label: item.name
      }),
      defaultItem: () => ({
        name: 'New Link',
        link: '/',
        id: getRandID()
      }),
      fields: [
        {
          label: 'Name',
          name: 'name',
          component: 'text'
        },
        {
          label: 'Link',
          name: 'link',
          component: 'text'
        }
      ]
    },
    {
      label: 'Header Buttons Navigation',
      name: 'header.buttons',
      component: 'group-list',
      description: 'Button List',
      itemProps: (item) => ({
        key: item.id,
        label: item.name
      }),
      defaultItem: () => ({
        name: 'New Link',
        link: '/',
        id: getRandID()
      }),
      fields: [
        {
          label: 'Name',
          name: 'name',
          component: 'text'
        },
        {
          label: 'Link',
          name: 'link',
          component: 'text'
        }
      ]
    },
    {
      label: 'Footer Paragraph 1',
      name: 'footer.footerNav.p1',
      component: 'textarea'
    },
    {
      label: 'Footer Header 1',
      name: 'footer.footerNav.header1',
      component: 'text'
    },
    {
      label: 'Footer Header 2',
      name: 'footer.footerNav.header2',
      component: 'text'
    },
    {
      label: 'Footer Header 3',
      name: 'footer.footerNav.header3',
      component: 'text'
    },
    {
      label: 'Footer Header 4',
      name: 'footer.footerNav.header4',
      component: 'text'
    },
    {
      label: 'Footer Logo',
      name: 'footer.footerNav.logoImg',
      component: 'image',
      parse: media => `/${media.filename}`,
      uploadDir: () => '/images/'
    },
    {
      label: 'Facebook link',
      name: 'footer.footerNav.facebook',
      component: 'text'
    },
    {
      label: 'Instagram link',
      name: 'footer.footerNav.instagram',
      component: 'text'
    },
    {
      label: 'Linkedin link',
      name: 'footer.footerNav.linkedin',
      component: 'text'
    },
    {
      label: 'Twitter link',
      name: 'footer.footerNav.twitter',
      component: 'text'
    },
    {
      label: 'Footer Navigation section 1',
      name: 'footer.footerNav.navigation1',
      component: 'group-list',
      description: 'Navigation List',
      itemProps: (item) => ({
        key: item.id,
        label: item.name
      }),
      defaultItem: () => ({
        name: 'New Link',
        link: '/',
        id: getRandID()
      }),
      fields: [
        {
          label: 'Name',
          name: 'name',
          component: 'text'
        },
        {
          label: 'Link',
          name: 'link',
          component: 'text'
        }
      ]
    },
    {
      label: 'Footer Navigation section 2',
      name: 'footer.footerNav.navigation2',
      component: 'group-list',
      description: 'Navigation List',
      itemProps: (item) => ({
        key: item.id,
        label: item.name
      }),
      defaultItem: () => ({
        name: 'New Link',
        link: '/',
        id: getRandID()
      }),
      fields: [
        {
          label: 'Name',
          name: 'name',
          component: 'text'
        },
        {
          label: 'Link',
          name: 'link',
          component: 'text'
        }
      ]
    },
    {
      label: 'Footer Navigation section 3',
      name: 'footer.footerNav.navigation3',
      component: 'group-list',
      description: 'Navigation List',
      itemProps: (item) => ({
        key: item.id,
        label: item.name
      }),
      defaultItem: () => ({
        name: 'New Link',
        link: '/',
        id: getRandID()
      }),
      fields: [
        {
          label: 'Name',
          name: 'name',
          component: 'text'
        },
        {
          label: 'Link',
          name: 'link',
          component: 'text'
        }
      ]
    },
    {
      label: 'Footer Paragraph 2',
      name: 'footer.footerNav.p2',
      component: 'textarea'
    },
    {
      label: 'Footer Download images',
      name: 'footer.footerNav.downloadImgs',
      component: 'group-list',
      description: 'Images List',
      itemProps: (item) => ({
        key: item.id,
        label: item.link
      }),
      defaultItem: () => ({
        alt: 'Image description',
        link: '/',
        id: getRandID()
      }),
      fields: [
        {
          label: 'Image description',
          name: 'alt',
          component: 'text'
        },
        {
          label: 'Link',
          name: 'link',
          component: 'text'
        },
        {
          label: 'Image',
          name: 'image',
          component: 'image',
          parse: media => `/${media.filename}`,
          uploadDir: () => '/images/'
        }
      ]
    },
    {
      label: 'Footer Small links',
      name: 'footer.terms',
      component: 'group-list',
      description: 'Navigation List',
      itemProps: (item) => ({
        key: item.id,
        label: item.name
      }),
      defaultItem: () => ({
        name: 'New Link',
        link: '/',
        id: getRandID()
      }),
      fields: [
        {
          label: 'Name',
          name: 'name',
          component: 'text'
        },
        {
          label: 'Link',
          name: 'link',
          component: 'text'
        }
      ]
    }
  ]
}
