import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh'
import en from './en'

Vue.use(VueI18n)
const lang = localStorage.getItem('lan') || 'zh_CN'
export const i18n = new VueI18n({
  locale: lang,
  zh_CN: {
    ...zh
  },
  en_US: {
    ...en
  }
})

export function changeLang (lang) {
  i18n.locale = lang
  localStorage.setItem('lan', lang)
}
