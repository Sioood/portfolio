export interface Work {
  // page component name
  slug: string
  id: number
  title: string
  // Main description, displayed on the right of the page
  description?: string
  date: string
  preview?: { src: string; alt: string }
  links?: { name: string; url: string }[]
  tags?: string[]
  technos?: string[]
  leftImage?: { src: string; alt: string }
  // Max 2 for readability
  centerImages?: { src: string; alt: string }[]
  images?: { src: string; alt: string; caption?: string }[]
}

export const useWorkStore = defineStore('work', () => {
  const { t } = useI18n()

  const works = ref<Work[]>([
    {
      slug: 'le_jardin_de_servins',
      id: 1,
      title: t('works:leJardinDeServins.title'),
      description: t('works:leJardinDeServins.description'),
      date: '2017',
      preview: useImages().works.leJardinDeServins.signs,
      links: [
        {
          name: t('website'),
          url: 'https://www.lejardindeservins.com/',
        },
        {
          name: t('facebook'),
          url: 'https://www.facebook.com/lejardindeservins',
        },
      ],
      tags: [t('graphicDesign'), t('visualIdentity')],
      leftImage: useImages().works.leJardinDeServins.logo,
      centerImages: [useImages().works.leJardinDeServins.signs],
    },
    {
      slug: '99reference',
      id: 2,
      title: t('works:99reference.title'),
      description: t('works:99reference.description'),
      date: '2021',
      preview: useImages().works['99reference'].ogmav2Popup.inSituPreview,
      tags: [t('media_one'), t('socialMedia_other'), t('art'), t('design'), t('website')],
      technos: ['Nuxt', 'Tailwind CSS', 'Docker', 'Directus', 'PostHog'],
      leftImage: useImages().works['99reference'].ogmav1.font99Exp1,
      centerImages: [useImages().works['99reference'].ogmav2Popup.inSituPreview],
      images: [
        useImages().works['99reference'].ogmav1.font99Exp2,
        useImages().works['99reference'].ogmav1.fontPreview1,
        useImages().works['99reference'].ogmav1.fontPreview2,
        useImages().works['99reference'].ogmav1.logo,
        useImages().works['99reference'].ogmav1.fullPreview3d,
        useImages().works['99reference'].ogmav1.magazine3d,
        useImages().works['99reference'].ogmav1.magazinePreview1,
        useImages().works['99reference'].ogmav1.magazinePreview2,
        useImages().works['99reference'].ogmav1.magazinePreview3,
        useImages().works['99reference'].social.photoshop,
        useImages().works['99reference'].social.windows,
      ],
    },
    {
      slug: 'kartel-le_fresnoy',
      id: 3,
      title: t('works:kartelLeFresnoy.title'),
      description: t('works:kartelLeFresnoy.description'),

      date: '2023',
      preview: useImages().works.kartelLeFresnoy.logo,
      links: [
        {
          name: t('website'),
          url: 'https://kartelv3.lefresnoy.net/',
        },
      ],
      tags: [t('website'), t('art'), t('design'), t('tool_one')],
      technos: ['Vue.js', 'Tailwind CSS', 'VitePress', 'Cypress', 'Vitest', 'Vite'],
      leftImage: useImages().works.kartelLeFresnoy.artworks,
      centerImages: [useImages().works.kartelLeFresnoy.artworkPage],
      images: [
        useImages().works.kartelLeFresnoy.artistPage,
        useImages().works.kartelLeFresnoy.artists,
        useImages().works.kartelLeFresnoy.artworkPage,
        useImages().works.kartelLeFresnoy.artworks,
        useImages().works.kartelLeFresnoy.home,
        useImages().works.kartelLeFresnoy.search,
      ],
    },
    {
      slug: 'stallning',
      id: 4,
      title: t('works:stallning.title'),
      description: t('works:stallning.description'),
      date: '2025',
      preview: useImages().works.stallning.preview,
      tags: [t('monorepo'), t('boilerplate'), t('tool_one')],
      technos: [
        'Turborepo',
        'Typescript',
        'ESlint',
        'Oxlint',
        'Prettier',
        'Husky',
        'Lint-Staged',
        'Commitlint',
        'Conventional Commits',
        'Changeset',
        'PNPM',
        'Nuxt',
      ],
      centerImages: [useImages().works.stallning.preview],
    },
    // {
    //   slug: 'flovism-portfolio-fonderie',
    //   id: 5,
    // },
    // {
    //   slug: 'entraeme',
    //   id: 6,
    // },
  ])

  const getWork = (slugOrId: string | number) => works.value.find((work) => work.slug === slugOrId || work.id === Number(slugOrId))

  return {
    works,
    getWork,
  }
})
