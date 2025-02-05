import button from './common/button'
import footer, {footerLink} from './common/footer'
import header, {headerLink} from './common/header'
import hero from './common/hero'
import info, {addressConfiguration, mailConfiguration, phoneConfiguration} from './common/info'
import enumeratedTiles from './common/enumeratedTiles'
import homePage from './pages/single/homePage'
import picturesSection, {imagesGrid, imageWithDescription} from './common/picturesSection'
import referenceSection from './common/referenceSection'
import {tile} from './common/tile'
import tilesSection from './common/tilesSection'
import projectShowcase from './common/projectShowcase'
import {titleAndDescription} from './common/titleAndDescription'
import content from './common/content'
import meta from './common/meta'
import landingPages from './pages/multiple/landingPages'
import bmi from './common/calculator/bmi'
import calculator from './common/calculator/calculator'
import instruction, {fileManagement, programInstruction} from './common/calculator/instruction'
import formHero from './common/calculator/formHero'
import score from './common/calculator/score'
import program from './common/calculator/program'
import simpleHero from './common/simpleHero'
import contactForm from './common/contactForm'
import contactInfo, {employeeCard} from './common/contactInfo'
import sicknessPages from './pages/multiple/sicknessPages'
import portableText from './common/portableText'
import portableImagesGrid from './common/portableImagesGrid'
import videoSection, {youtubeVideos} from './common/videoSection'
import videoPage from './pages/single/videoPage'
import videoContent from './common/videoContent'
import privacyPolicyPage from './pages/single/privacyPolicyPage'
import rodoPage from './pages/single/rodoPage'
import notFoundPage from './pages/single/notFoundPage'
import mailingService, {contactMail, programMail} from './common/mailingService'
import newsPage from './pages/single/newsPage'
import newsPages from './pages/multiple/newsPages'
import {checkboxListSection} from './common/checkboxListSection'
import newsContent from './common/newsContent'
import news from './common/news'

export const baseConfiguration = [header, footer, meta, mailingService]
export const singlePages = [
  homePage,
  videoPage,
  privacyPolicyPage,
  rodoPage,
  notFoundPage,
  newsPage,
]
export const multiplePages = [landingPages, sicknessPages, newsPages]

export const common = [
  hero,
  info,
  addressConfiguration,
  mailConfiguration,
  phoneConfiguration,
  button,
  enumeratedTiles,
  tile,
  imagesGrid,
  picturesSection,
  imageWithDescription,
  referenceSection,
  tilesSection,
  projectShowcase,
  titleAndDescription,
  content,
  instruction,
  formHero,
  bmi,
  calculator,
  score,
  program,
  programInstruction,
  fileManagement,
  simpleHero,
  contactForm,
  contactInfo,
  employeeCard,
  headerLink,
  portableText,
  portableImagesGrid,
  videoSection,
  youtubeVideos,
  videoContent,
  footerLink,
  contactMail,
  programMail,
  checkboxListSection,
  newsContent,
  news,
]

export const schemaTypes = [...common, ...singlePages, ...multiplePages, ...baseConfiguration]
