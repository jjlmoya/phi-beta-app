import { i18n } from '../../boot/i18n'

const MONTHS = {
  JANUARY: (TYPE) => {
    return {
      id: 'JAN',
      shortName: i18n.t('month.jan'),
      name: i18n.t('month.january'),
      ...TYPE
    }
  },
  FEBRUARY: (TYPE) => {
    return {
      id: 'FEB',
      shortName: i18n.t('month.feb'),
      name: i18n.t('month.febraury'),
      ...TYPE
    }
  },
  MARCH: (TYPE) => {
    return {
      id: 'MAR',
      shortName: i18n.t('month.mar'),
      name: i18n.t('month.march'),
      ...TYPE
    }
  },
  APRIL: (TYPE) => {
    return {
      id: 'APR',
      shortName: i18n.t('month.apr'),
      name: i18n.t('month.april'),
      ...TYPE
    }
  },
  MAY: (TYPE) => {
    return {
      id: 'MAY',
      shortName: i18n.t('month.may'),
      name: i18n.t('month.mayName'),
      ...TYPE
    }
  },
  JUNE: (TYPE) => {
    return {
      id: 'JUN',
      shortName: i18n.t('month.jun'),
      name: i18n.t('month.june'),
      ...TYPE
    }
  },
  JULY: (TYPE) => {
    return {
      id: 'JUL',
      shortName: i18n.t('month.jul'),
      name: i18n.t('month.july'),
      ...TYPE
    }
  },
  AUGUST: (TYPE) => {
    return {
      id: 'AUG',
      shortName: i18n.t('month.aug'),
      name: i18n.t('month.august'),
      ...TYPE
    }
  },
  SEPTEMBER: (TYPE) => {
    return {
      id: 'SEP',
      shortName: i18n.t('month.sept'),
      name: i18n.t('month.september'),
      ...TYPE
    }
  },
  OCTOBER: (TYPE) => {
    return {
      id: 'OCT',
      shortName: i18n.t('month.oct'),
      name: i18n.t('month.october'),
      ...TYPE
    }
  },
  NOVEMBER: (TYPE) => {
    return {
      id: 'NOV',
      shortName: i18n.t('month.nov'),
      name: i18n.t('month.november'),
      ...TYPE
    }
  },
  DECEMBER: (TYPE) => {
    return {
      id: 'DEC',
      shortName: i18n.t('month.dec'),
      name: i18n.t('month.december'),
      ...TYPE
    }
  }
}

export const HELPER = {
  SPRING: (type) => {
    return [
      MONTHS.MARCH(type),
      MONTHS.APRIL(type),
      MONTHS.MAY(type)
    ]
  },
  AUTUMN: (type) => {
    return [
      MONTHS.SEPTEMBER(type),
      MONTHS.OCTOBER(type),
      MONTHS.NOVEMBER(type)
    ]
  },
  SUMMER: (type) => {
    return [
      MONTHS.JUNE(type),
      MONTHS.JULY(type),
      MONTHS.AUGUST(type)
    ]
  },
  WINTER: (type) => {
    return [
      MONTHS.DECEMBER(type),
      MONTHS.JANUARY(type),
      MONTHS.FEBRUARY(type)
    ]
  }
}

export default {
  ...MONTHS
}
