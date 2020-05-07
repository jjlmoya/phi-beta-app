import MONTHS, { HELPER } from '../month.data'
import CATEGORY from '../category.data'
import TYPE from '../type.data'

import SEASON from '../season.data'
import { i18n } from '../../boot/i18n'

export default [
  {
    name: i18n.t('flower.poppy'),
    image: 'poppy.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.AUTUMN(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER)
    ],
    pathname: '/amapola/'
  },
  {
    name: i18n.t('flower.poppies.adormidera'),
    image: 'poppy-adormidera.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      MONTHS.JANUARY(TYPE.PLANT),
      MONTHS.FEBRUARY(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER)
    ],
    pathname: '/amapola/adormidera'
  },
  {
    name: i18n.t('flower.poppies.azul'),
    image: 'poppy-azul.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.AUTUMN(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER)
    ],
    pathname: '/ampola/azul'
  },
  {
    name: i18n.t('flower.poppies.oriental'),
    image: 'poppy-oriental.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.WINTER(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER)
    ],
    pathname: '/amapola/oriental/'
  },
  {
    name: i18n.t('flower.poppies.papaver-nudicaule'),
    image: 'poppy-nudicaule.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.AUTUMN(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER)
    ],
    pathname: '/amapola/papaver-nudicaule'
  },
  {
    name: i18n.t('flower.poppies.romneya-coulteri'),
    image: 'poppy-romneya-coulteri.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.WINTER(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER)
    ],
    pathname: '/amapola/romneya-coulteri'
  },
  {
    name: i18n.t('flower.cosmo'),
    image: 'cosmos.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/cosmos/'
  },
  {
    name: i18n.t('flower.cosmos.azufre'),
    image: 'cosmos-azufre.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/cosmos/azufre'
  },
  {
    name: i18n.t('flower.cosmos.chocolate'),
    image: 'cosmos-chocolate.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/cosmos/chocolate'
  },
  {
    name: i18n.t('flower.cosmos.sonata'),
    image: 'cosmos-sonata.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/cosmos-sonata/'
  },
  {
    name: i18n.t('flower.sunflower'),
    image: 'sunflower.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.WINTER(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER)

    ],
    pathname: '/girasol/'
  },
  {
    name: i18n.t('flower.hibiscus.abelmoschus-moschatus'),
    image: 'hibiscus-abelmoschus-moschatus.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hibiscus/abelmoschus-moschatus'
  },
  {
    name: i18n.t('flower.hibiscus.cannabinus'),
    image: 'hibiscus-cannabinus.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hibiscus/cannabinus/'
  },
  {
    name: i18n.t('flower.hibiscus.coccineus'),
    image: 'hibiscus-coccineus.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hibiscus/coccineus/'
  },
  {
    name: i18n.t('flower.hibiscus.moscheutos'),
    image: 'hibiscus-moscheutos.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hibiscus/moscheutos'
  },
  {
    name: i18n.t('flower.hibiscus.mutabilis'),
    image: 'hibiscus-mutabilis.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hibiscus/mutabilis'
  },
  {
    name: i18n.t('flower.hibiscus.splendens'),
    image: 'hibiscus-splendens.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hibiscus/splendens'
  },
  {
    name: i18n.t('flower.hibiscus.syriacus'),
    image: 'hibiscus-syriacus.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hibiscus/syriacus'
  },
  {
    name: i18n.t('flower.hibiscus.trionum'),
    image: 'hibiscus-trionum.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hibiscus/trionum'
  },
  {
    name: i18n.t('flower.hortensia'),
    image: 'hortensia.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hortensia/'
  },
  {
    name: i18n.t('flower.hortensias.arborescens'),
    image: 'hortensia-arborescens.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hortensias/arborescens'
  },
  {
    name: i18n.t('flower.hortensias.paniculata'),
    image: 'hortensia-paniculata.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hortensias/paniculata'
  },
  {
    name: i18n.t('flower.hortensias.quercifolia'),
    image: 'hortensia-quercifolia.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hortensias/quercifolia'
  },
  {
    name: i18n.t('flower.hortensias.trepadora'),
    image: 'hortensia-trepadora.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/hortensias/trepadora'
  },
  {
    name: i18n.t('flower.lavanda.stoechas'),
    image: 'lavanda-stoechas.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/lavanda/stoechas/'
  },
  {
    name: i18n.t('flower.lily'),
    image: 'lilies.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SUMMER(TYPE.PLANT),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/lirios/'
  },
  {
    name: i18n.t('flower.lilies.alstroemeria'),
    image: 'lilies-alstroemeria.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SUMMER(TYPE.PLANT),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/lirios/alstroemeria'
  },
  {
    name: i18n.t('flower.lilies.asiatico-amarillo'),
    image: 'lilies-asiatico-amarillo.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SUMMER(TYPE.PLANT),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/lirios/asiatico-amarillo'
  },
  {
    name: i18n.t('flower.lilies.azucena'),
    image: 'lilies-azucena.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SUMMER(TYPE.PLANT),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/lirios/azucena'
  },
  {
    name: i18n.t('flower.lilies.japones'),
    image: 'lilies-japones.png',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SUMMER(TYPE.PLANT),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/lirios/japones'
  },
  {
    name: i18n.t('flower.lilies.journeys-end'),
    image: 'lilies-journeys-end.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SUMMER(TYPE.PLANT),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/lirios/journeys-end'
  },
  {
    name: i18n.t('flower.lilies.martagon'),
    image: 'lilies-martagon.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SUMMER(TYPE.PLANT),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/lirios/mortagon'
  },
  {
    name: i18n.t('flower.lilies.paz'),
    image: 'lilies-paz.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SUMMER(TYPE.PLANT),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/lirios/paz'
  },
  {
    name: i18n.t('flower.lilies.stargazer'),
    image: 'lilies-stargazer.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SUMMER(TYPE.PLANT),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/lirios/stargazer'
  },
  {
    name: i18n.t('flower.margarita'),
    image: 'margarita.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.WINTER(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/margarita/'
  },
  {
    name: i18n.t('flower.lavandula'),
    image: 'lavandula.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.WINTER(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER)
    ],
    pathname: '/lavanda/'
  },
  {
    name: i18n.t('flower.margaritas.felicia-amelloides'),
    image: 'margarita-felicia-amelloides.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.WINTER(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/margarita/felicia-amelloides'
  },
  {
    name: i18n.t('flower.margaritas.gerbera'),
    image: 'margarita-gerbera.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.WINTER(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/margarita/gerbera'
  },
  {
    name: i18n.t('flower.margaritas.gigante'),
    image: 'margarita-gigante.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.WINTER(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/margarita/gigante'
  },
  {
    name: i18n.t('flower.margaritas.magarza'),
    image: 'margarita-magarza.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.WINTER(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/magarita/magarza'
  },
  {
    name: i18n.t('flower.narciso'),
    image: 'narciso.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.JUNE(TYPE.FLOWER),
      MONTHS.AUGUST(TYPE.FRUIT)
    ],
    pathname: '/narciso/'
  },
  {
    name: i18n.t('flower.orchids.vainilla'),
    image: 'orchid-vainilla.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/orquidea/vainilla'
  },
  {
    name: i18n.t('flower.orchids.vanda'),
    image: 'orchid-vanda.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.PLANT),
      ...HELPER.SUMMER(TYPE.PLANT),
      ...HELPER.AUTUMN(TYPE.PLANT)
    ],
    pathname: '/orquidea/vanda'
  },
  {
    name: i18n.t('flower.rose'),
    image: 'rose.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/rosa/'
  },
  {
    name: i18n.t('flower.roses.alba'),
    image: 'rose-alba.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/tomate/'
  },
  {
    name: i18n.t('flower.roses.centifolia'),
    image: 'rose-centifolia.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/rosa/centifolia'
  },
  {
    name: i18n.t('flower.roses.damascena'),
    image: 'rose-damascena.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/rosa/damascena'
  },
  {
    name: i18n.t('flower.roses.gallica'),
    image: 'rose-gallica.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/rosa/gallica'
  },
  {
    name: i18n.t('flower.roses.iceberg'),
    image: 'rose-iceberg.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/rosa/iceberg'
  },
  {
    name: i18n.t('flower.roses.lolita-lempicka'),
    image: 'rose-lolita-lempicka.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/rosa/lolita-lempicka'
  },
  {
    name: i18n.t('flower.roses.pimpinellifolia'),
    image: 'rose-pimpinellifolia.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/rosa/pimpinellifolia'
  },
  {
    name: i18n.t('flower.roses.pitimini'),
    image: 'rose-pitimini.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/rosa/pitimini'
  },
  {
    name: i18n.t('flower.roses.polyantha'),
    image: 'rose-polyantha.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/rosa/polyantha'
  },
  {
    name: i18n.t('flower.roses.princesa-de-monaco'),
    image: 'rose-princesa-de-monaco.png',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/rosa/princesa-de-monaco'
  },
  {
    name: i18n.t('flower.roses.rugosa'),
    image: 'rose-rugosa.png',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.SPRING(TYPE.PLANT),
      ...HELPER.WINTER(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER),
      ...HELPER.AUTUMN(TYPE.FLOWER)
    ],
    pathname: '/rosa/rugosa'
  },
  {
    name: i18n.t('flower.tulip'),
    image: 'tulip.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.AUTUMN(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER)
    ],
    pathname: '/tulipan/'
  },
  {
    name: i18n.t('flower.tulips.ballerina'),
    image: 'tulip-ballerina.png',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.AUTUMN(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER)
    ],
    pathname: '/tulipan/ballerina'
  },
  {
    name: i18n.t('flower.tulips.reina-de-la-noche'),
    image: 'tulips-reina-de-la-noche.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.FLOWER],
    months: [
      ...HELPER.AUTUMN(TYPE.PLANT),
      ...HELPER.SPRING(TYPE.FLOWER),
      ...HELPER.SUMMER(TYPE.FLOWER)
    ],
    pathname: '/tulipan/reina-de-la-noche'
  }
]
