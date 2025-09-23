export const useImages = () => {
  // IDK why but this doesn't work with localfile
  // const img = useImage()

  return {
    works: {
      '99reference': {
        collaborativeFont: {
          preview: {
            src: withSiteUrl('/works/99reference/collaborative_font/font-preview.jpg').value,
            alt: 'Aperçu de la police collaborative créée par la communauté 99reference',
          },
        },
        ogmav1: {
          logo: {
            src: withSiteUrl('/works/99reference/ogmav1/logo.png').value,
            alt: 'Logo 99Ogma',
          },
          fontPreview1: {
            src: withSiteUrl('/works/99reference/ogmav1/font_preview-1.jpg').value,
            alt: 'Aperçu de la police 99Ogma et recherches typographiques',
          },
          fontPreview2: {
            src: withSiteUrl('/works/99reference/ogmav1/font_preview-2.png').value,
            alt: 'Aperçu de la police 99Ogma',
          },
          font99Exp1: {
            src: withSiteUrl('/works/99reference/ogmav1/font-99-exp_1.jpg').value,
            alt: 'Aperçu de la police 99Ogma et recherches typographiques',
          },
          font99Exp2: {
            src: withSiteUrl('/works/99reference/ogmav1/font-99-exp_2.jpg').value,
            alt: 'Aperçu de la police 99Ogma',
          },
          fullPreview3d: {
            src: withSiteUrl('/works/99reference/ogmav1/full_preview-3d.gif').value,
            alt: 'Aperçu et visualisation du magazine 99Ogma',
          },
          magazine3d: {
            src: withSiteUrl('/works/99reference/ogmav1/magazine-3d.jpg').value,
            alt: 'Aperçu et visualisation du magazine 99Ogma',
          },
          magazinePreview1: {
            src: withSiteUrl('/works/99reference/ogmav1/magazine_preview-1.jpg').value,
            alt: 'Aperçu de la police 99Ogma et recherches typographiques',
          },
          magazinePreview2: {
            src: withSiteUrl('/works/99reference/ogmav1/magazine_preview-2.jpg').value,
            alt: 'Aperçu de la police 99Ogma',
          },
          magazinePreview3: {
            src: withSiteUrl('/works/99reference/ogmav1/magazine_preview-3.jpg').value,
            alt: 'Aperçu de la police 99Ogma',
          },
        },
        ogmav2Popup: {
          com1: {
            src: withSiteUrl('/works/99reference/ogmav2-popup/com_1.jpg').value,
            alt: 'Communication 99reference sur le popup et 99Ogma v2',
          },
          com2: {
            src: withSiteUrl('/works/99reference/ogmav2-popup/com_2.png').value,
            alt: 'Communication 99reference sur le popup et 99Ogma v2',
          },
          com3: {
            src: withSiteUrl('/works/99reference/ogmav2-popup/com_3.jpg').value,
            alt: 'Communication 99reference sur le popup et 99Ogma v2',
          },
          inSituPreview: {
            src: withSiteUrl('/works/99reference/ogmav2-popup/in_situ-preview.jpg').value,
            alt: 'Popup Entropy x 99reference - 99Ogma v2',
          },
        },
        social: {
          photoshop: {
            src: withSiteUrl('/works/99reference/social/photoshop.png').value,
            alt: 'Photoshop post sur 99reference',
          },
          windows: {
            src: withSiteUrl('/works/99reference/social/windows.png').value,
            alt: 'Windows post sur 99reference',
          },
        },
      },
      leJardinDeServins: {
        signs: {
          src: withSiteUrl('/works/le_jardin_de_servins/panneaux.png').value,
          alt: 'Le jardin de servins',
        },
        logo: {
          src: withSiteUrl('/works/le_jardin_de_servins/logo.png').value,
          alt: 'Le jardin de servins',
        },
      },
      kartelLeFresnoy: {
        logo: {
          src: withSiteUrl('/works/kartel-le_fresnoy/lefresnoy-logo.webp').value,
          alt: 'Logo du Fresnoy',
        },
        artistPage: {
          src: withSiteUrl('/works/kartel-le_fresnoy/artist-page.png').value,
          alt: "Kartel - Page d'un artiste",
        },
        artists: {
          src: withSiteUrl('/works/kartel-le_fresnoy/artists.png').value,
          alt: 'Kartel - Page des artistes',
        },
        artworkPage: {
          src: withSiteUrl('/works/kartel-le_fresnoy/artwork-page.png').value,
          alt: "Kartel - Page d'une production",
        },
        artworks: {
          src: withSiteUrl('/works/kartel-le_fresnoy/artworks.png').value,
          alt: 'Kartel - Page des productions',
        },
        home: {
          src: withSiteUrl('/works/kartel-le_fresnoy/home.png').value,
          alt: "Kartel - Page d'accueil",
        },
        search: {
          src: withSiteUrl('/works/kartel-le_fresnoy/search-normal.png').value,
          alt: 'Kartel - Page de recherche',
        },
      },
      stallning: {
        preview: {
          src: withSiteUrl('/works/stallning/preview.png').value,
          alt: 'Stallning',
        },
      },
    },
  }
}
