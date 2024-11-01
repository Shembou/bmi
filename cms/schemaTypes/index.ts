import button from './common/button'
import footer from './common/footer'
import header from './common/header'
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

export const baseConfiguration = [header, footer, meta]
export const singlePages = [homePage]
export const multiplePages = [landingPages]

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
]

export const schemaTypes = [...common, ...singlePages, ...multiplePages, ...baseConfiguration]
