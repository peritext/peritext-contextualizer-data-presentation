export default {
  type: 'peritext-contextualizer',
  id: 'bib',
  name: 'Data presentation',
  coverage: {
    inlineStatic: false,
    blockStatic: true,
    inlineDynamic: false,
    blockDynamic: true,
  },
  model: {
    acceptedResourceTypes: [{type: 'data-presentation'}],
    block: {
      expandable: true,
      options: [
        {
          id: 'displayCommentsInCodex',
          title: {
            fr: 'Afficher les commentaires en mode codex',
            en: 'Display comments in codex mode',
          },
          type: 'boolean'
        },
        {
          id: 'displayMode',
          title: {
            fr: 'Mode d\'affichage',
            en: 'Display mode'
          },
          type: 'select',
          values: [{
            id: 'stepper',
            labels: {
              fr: 'Étapes',
              en: 'Steps'
            }
          },
          {
            id: 'scroller',
            labels: {
              fr: 'Déroulement',
              en: 'Scroll'
            }
          }]
        }
      ]
    }
  }
}