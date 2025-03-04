import { Subscriber } from '@/entities/Subscriber'
import jsPDF from 'jspdf'
import { logoData } from '../../assets/logoData'
import { calculateBMI } from './calculateBMI'
import { calculateBmiType } from './calculateBMIType'
import './DarkerGrotesque-Bold-bold.js'
import { calculateScore } from './calculateScore'
import { TStatus } from '@/components/Calculator/Instruction/TStatus'
import { footerData } from '../../assets/footerData'
import { calculateScoreType } from './calculateScoreType'

interface IRectangeStartingPoint {
  x_start: number
  y: number
  x_end: number
}
const bg_variant_darker = '#a6a6a6'
const bg_variant_dark = '#bfbfbf'
const bg_white = '#ffffff'

export default function generatePDF(subscriber: Subscriber) {
  const doc = new jsPDF()
  configure_jsPDF(doc)
  doc.addImage(logoData, 'PNG', 25, 14, 160, 16)
  render_overall_score(doc)
  render_bmi_score(doc, subscriber)
  render_score_results(doc, subscriber)
  render_subscriber_data(doc, subscriber)
  render_contact_data(doc, subscriber)
  doc.addPage()
  continue_render_data(doc, subscriber)
  render_support_details(doc, subscriber)
  render_current_subscriber_status(doc, subscriber)
  render_statute(doc)
  render_footer(doc, subscriber)

  for (let i = 1; i < doc.internal.pages.length; i++) {
    doc.setPage(i)
    renderPageNumber(doc, i)
  }

  doc.save(`${subscriber.name}.pdf`)
}

function configure_jsPDF(doc: jsPDF) {
  doc.setFont('DarkerGrotesque-Bold', 'bold')
  doc.setFontSize(11)
  doc.setDrawColor(0, 0, 0)
}

function draw_rectangle_from_starting_point(
  doc: jsPDF,
  { x_start, y, x_end }: IRectangeStartingPoint,
  fillColor?: string,
  height = 10
) {
  const width = x_end - x_start

  if (fillColor) {
    doc.setFillColor(fillColor)
  }

  doc.rect(x_start, y, width, height, 'FD')
}

function write_text_starting_points_based_on_rectangle(
  doc: jsPDF,
  text: string,
  { x_start, y, x_end }: IRectangeStartingPoint,
  maxWidth = 50
) {
  const x = (x_start + x_end) / 2
  const aligned_y = (y + y + 10) / 2

  doc.text(text, x, aligned_y, { align: 'center', maxWidth })
}

function draw_table_body(
  doc: jsPDF,
  left_columns: Array<string>,
  right_columns: Array<string>,
  starting_point: number
) {
  let y = starting_point

  left_columns.forEach((element, index) => {
    draw_rectangle_from_starting_point(
      doc,
      { x_start: 20, y, x_end: 95 },
      bg_white,
      element.length > 50 ? 16 : 10
    )
    write_text_starting_points_based_on_rectangle(
      doc,
      element,
      {
        x_start: 20,
        y,
        x_end: 95
      },
      60
    )

    draw_rectangle_from_starting_point(
      doc,
      { x_start: 95, y, x_end: 189 },
      bg_white,
      element.length > 50 ? 16 : 10
    )
    write_text_starting_points_based_on_rectangle(
      doc,
      right_columns[index],
      { x_start: 95, y, x_end: 189 },
      60
    )
    if (element.length > 50) {
      y += 16
    } else {
      y += 10
    }
  })
}

const mapValueToPolish = (value: string | boolean) => {
  if (value == true || value == 'true') return 'Tak'
  if (value == false || value == 'false') return 'Nie'
  if (value == 'unknown') return 'Odmowa podania danych'
  if (value == 'male') return 'Mężczyzna'
  if (value == 'female') return 'Kobieta'
  if (value == 'ISCED02') return 'średnie I stopnia lub niższe'
  if (value == 'ISCED34') return 'ponadgimnazjalne lub policealne'
  if (value == 'ISCED48') return 'wyższe'
  if (statusMapping[value as TStatus]) return statusMapping[value as TStatus]
  return value
}

const statusMapping: Record<TStatus, string> = {
  selfEmployed: 'Osoba prowadząca działalność na własny rachunek',
  publicGovernmentAdministrationWorker: 'Osoba pracująca w administracji rządowej',
  localGovernmentAdministrationWorker: 'Osoba pracująca w administracji samorządowej',
  nonGovernmentalOrganizationWorker: 'Osoba pracująca w organizacji pozarządowej',
  MSMEWorker: 'Osoba pracująca w MMŚP (mikro, małe, średnie przedsiębiorstwa)',
  largeEnterpriseWorker: 'Osoba pracująca w dużym przedsiębiorstwie',
  medicalActivitiesWorker: 'Osoba pracująca w podmiocie wykonującym działalność leczniczą',
  schoolWorkerTeachingStaff:
    'Osoba pracująca w szkole lub w placówce systemu oświaty (kadra pedagogiczna)',
  schoolWorkerNonTeachingStaff:
    'Osoba pracująca w szkole lub w placówce systemu oświaty (kadra niepedagogiczna)',
  schoolWorkerAdministrationStaff:
    'Osoba pracująca w szkole lub w placówce systemu oświaty (kadra zarządzająca)',
  universityWorker: 'Osoba pracująca na uczelni',
  scientificInstituteWorker: 'Osoba pracująca w instytucie naukowym',
  researchInstituteWorker: 'Osoba pracująca w instytucie badawczym',
  ŁukasiewiczResearchNetworkWorker:
    'Osoba pracująca w instytucie działającym w ramach Sieci Badawczej Łukasiewicz',
  internationalInstituteWorker: 'Osoba pracująca w międzynarodowym instytucie naukowym',
  federationOfHigherEducationAndScienceSystemEntitiesWorker:
    'Osoba pracująca dla federacji podmiotów systemu szkolnictwa wyższego i nauki',
  stateLegalEntityWorker: 'Osoba pracująca na rzecz państwowej osoby prawnej',
  other: 'Inne',
  '': ''
}

function render_overall_score(doc: jsPDF) {
  const y = 36

  draw_rectangle_from_starting_point(doc, { x_start: 20, y, x_end: 64 }, bg_variant_darker)
  doc.text('LICZBA UZYSKANYCH PUNKTÓW', 41, 40, {
    align: 'center',
    maxWidth: 50
  })

  draw_rectangle_from_starting_point(doc, { x_start: 64, y, x_end: 81 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(doc, 'SCORE', { x_start: 64, y, x_end: 81 })

  draw_rectangle_from_starting_point(doc, { x_start: 81, y, x_end: 90 }, bg_white)

  draw_rectangle_from_starting_point(doc, { x_start: 90, y, x_end: 102 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(doc, 'BMI', { x_start: 90, y, x_end: 102 })

  draw_rectangle_from_starting_point(doc, { x_start: 102, y, x_end: 111 }, bg_white)

  draw_rectangle_from_starting_point(doc, { x_start: 111, y, x_end: 136 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    'PRACA ZMIANOWA',
    {
      x_start: 111,
      y: y - 1,
      x_end: 136
    },
    25
  )

  draw_rectangle_from_starting_point(doc, { x_start: 136, y, x_end: 145 }, bg_white)

  draw_rectangle_from_starting_point(doc, { x_start: 145, y, x_end: 157 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(doc, 'Wiek', { x_start: 145, y, x_end: 157 })

  draw_rectangle_from_starting_point(doc, { x_start: 157, y, x_end: 166 }, bg_white)

  draw_rectangle_from_starting_point(doc, { x_start: 166, y, x_end: 180 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(doc, 'RAZEM', { x_start: 166, y, x_end: 180 })

  draw_rectangle_from_starting_point(doc, { x_start: 180, y, x_end: 189 }, bg_white)
}

function render_bmi_score(doc: jsPDF, subscriber: Subscriber) {
  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 55, x_end: 189 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    'DANE Z FORMULARZA BMI',
    {
      x_start: 20,
      y: 55,
      x_end: 189
    },
    0
  )

  const bmiResult = calculateBMI(subscriber)
  const bmiType = calculateBmiType(bmiResult)

  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 65, x_end: 95 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    `Wynik`,
    {
      x_start: 20,
      y: 65,
      x_end: 95
    },
    60
  )

  draw_rectangle_from_starting_point(doc, { x_start: 95, y: 65, x_end: 189 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    `Interpretacja`,
    { x_start: 95, y: 65, x_end: 189 },
    60
  )

  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 75, x_end: 95 }, bg_white)
  write_text_starting_points_based_on_rectangle(
    doc,
    `${bmiResult}`,
    {
      x_start: 20,
      y: 75,
      x_end: 95
    },
    60
  )

  draw_rectangle_from_starting_point(doc, { x_start: 95, y: 75, x_end: 189 }, bg_white)
  write_text_starting_points_based_on_rectangle(
    doc,
    bmiType,
    { x_start: 95, y: 75, x_end: 189 },
    60
  )
}

function render_score_results(doc: jsPDF, subscriber: Subscriber) {
  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 100, x_end: 189 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    'DANE Z FORMULARZA SCORE',
    {
      x_start: 20,
      y: 100,
      x_end: 189
    },
    0
  )

  const scoreResult = calculateScore(subscriber)
  const scoreType = calculateScoreType(scoreResult)

  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 110, x_end: 95 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    `Wynik`,
    {
      x_start: 20,
      y: 110,
      x_end: 95
    },
    60
  )

  draw_rectangle_from_starting_point(doc, { x_start: 95, y: 110, x_end: 189 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    `Interpretacja`,
    { x_start: 95, y: 110, x_end: 189 },
    60
  )

  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 120, x_end: 95 }, bg_white)
  write_text_starting_points_based_on_rectangle(
    doc,
    `${scoreResult}%`,
    {
      x_start: 20,
      y: 120,
      x_end: 95
    },
    60
  )

  draw_rectangle_from_starting_point(doc, { x_start: 95, y: 120, x_end: 189 }, bg_white)
  write_text_starting_points_based_on_rectangle(
    doc,
    scoreType,
    { x_start: 95, y: 120, x_end: 189 },
    60
  )
}

function render_subscriber_data(doc: jsPDF, subscriber: Subscriber) {
  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 140, x_end: 189 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    'DANE UCZESTNIKA PROJEKTU',
    {
      x_start: 20,
      y: 140,
      x_end: 189
    },
    0
  )

  const left_columns = [
    'Imię i nazwisko',
    'Płeć',
    'Pesel',
    'Data i miejsce urodzenia',
    'Wiek w chwili przystąpienia do projektu',
    'Wykształcenie'
  ]
  const right_columns = [
    subscriber.name,
    mapValueToPolish(subscriber.gender),
    subscriber.pesel.toString(),
    `${subscriber.dateOfBirth} ${subscriber.placeOfBirth}`,
    subscriber.age.toString(),
    mapValueToPolish(subscriber.education)
  ]

  draw_table_body(doc, left_columns, right_columns, 150)
}

function render_contact_data(doc: jsPDF, subscriber: Subscriber) {
  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 220, x_end: 189 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    'DANE KONTAKTOWE',
    {
      x_start: 20,
      y: 220,
      x_end: 189
    },
    0
  )

  const left_columns = ['Numer telefonu', 'E-mail', 'Województwo', 'Powiat', 'Gmina']
  const right_columns = [
    subscriber.phone,
    subscriber.email,
    subscriber.voivodeship,
    subscriber.district,
    subscriber.commune
  ]

  draw_table_body(doc, left_columns, right_columns, 230)
}

function continue_render_data(doc: jsPDF, subscriber: Subscriber) {
  const left_columns = ['Miejscowość', 'Kod pocztowy', 'Ulica', 'Nr domu', 'Nr lokalu', 'Obszar']
  const right_columns = [
    subscriber.town,
    subscriber.postalCode,
    subscriber.streetName,
    subscriber.houseNumber,
    `${subscriber.localNumber != '' ? subscriber.localNumber : 'Brak'}`,
    subscriber.areaOfResidence
  ]

  draw_table_body(doc, left_columns, right_columns, 20)
}

function render_support_details(doc: jsPDF, subscriber: Subscriber) {
  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 90, x_end: 189 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    'SZCZEGÓLY WSPARCIA',
    {
      x_start: 20,
      y: 90,
      x_end: 189
    },
    0
  )

  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 100, x_end: 95 }, bg_white, 15)
  write_text_starting_points_based_on_rectangle(
    doc,
    `Status osoby na rynku pracy w chwili przystąpienia do projektu`,
    {
      x_start: 20,
      y: 100,
      x_end: 95
    },
    60
  )

  draw_rectangle_from_starting_point(doc, { x_start: 95, y: 100, x_end: 189 }, bg_white, 15)
  write_text_starting_points_based_on_rectangle(
    doc,
    mapValueToPolish(subscriber.status),
    { x_start: 95, y: 100, x_end: 189 },
    60
  )

  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 115, x_end: 95 }, bg_white)
  write_text_starting_points_based_on_rectangle(
    doc,
    `Praca zmianowa`,
    {
      x_start: 20,
      y: 115,
      x_end: 95
    },
    60
  )

  draw_rectangle_from_starting_point(doc, { x_start: 95, y: 115, x_end: 189 }, bg_white)
  write_text_starting_points_based_on_rectangle(
    doc,
    subscriber.shiftChanges ? 'Tak' : 'Nie',
    { x_start: 95, y: 115, x_end: 189 },
    60
  )
}

function render_current_subscriber_status(doc: jsPDF, subscriber: Subscriber) {
  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 135, x_end: 189 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    'STATUS UCZESTNIKA/UCZESTNICZKI W CHWILI PRZYSTĄPIENIA DO PROJEKTU',
    {
      x_start: 20,
      y: 135,
      x_end: 189
    },
    0
  )

  const left_columns = [
    'Osoba obcego pochodzenia',
    'Osoba państwa trzeciego',
    'Osoba należąca do mniejszości narodowej lub etnicznej (w tym społeczności marginalizowane)',
    'Osoba bezdomna lub dotknięta wykluczeniem z dostępu do mieszkań',
    'Osoba z niepełnosprawnościami'
  ]
  const right_columns = [
    mapValueToPolish(subscriber.foreignOrigin),
    mapValueToPolish(subscriber.foreignCountry),
    mapValueToPolish(subscriber.nationalMinority),
    mapValueToPolish(subscriber.isHomeless),
    mapValueToPolish(subscriber.isDisabled)
  ]

  draw_table_body(doc, left_columns, right_columns, 145)
}

function render_statute(doc: jsPDF) {
  draw_rectangle_from_starting_point(doc, { x_start: 20, y: 215, x_end: 189 }, bg_variant_dark)
  write_text_starting_points_based_on_rectangle(
    doc,
    'WARUNKI DO PRZYSTĄPIENIA DO PROGRAMU',
    {
      x_start: 20,
      y: 215,
      x_end: 189
    },
    0
  )
  const left_columns = ['Akceptacja regulaminu', 'Akceptacja klauzuli informacyjnej']
  const right_columns = ['Tak', 'Tak']

  draw_table_body(doc, left_columns, right_columns, 225)
}

function render_footer(doc: jsPDF, subscriber: Subscriber) {
  const dateAdded = new Date(subscriber.dateAdded)

  // Format the date to Polish locale
  const formattedDate = dateAdded.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  doc.setLineDashPattern([1, 1], 0)

  doc.setFontSize(14)
  doc.setFont('times', 'italic')

  doc.text(formattedDate, 50, 255, { align: 'center' })
  doc.line(20, 257, 87, 257)
  doc.text('Data', 45, 262)
  doc.text(subscriber.name, 150, 255, { align: 'center' })
  doc.line(105, 257, 189, 257)
  doc.text('Popis uczestnika projektu', 123, 262)

  doc.addImage(footerData, 'PNG', 20, 273, 58, 17)

  doc.setFont('DarkerGrotesque-Bold', 'bold')
  doc.setFontSize(9)

  doc.text('„Kompleksowo aktywni - rehabilitacja osób pracujących (z czynnikami', 105, 273)
  doc.text('ryzyka kardiologicznego) z województwa lubelskiego”', 105, 278)
  doc.text('Program Fundusze Europejskie dla Lubelskiego 2021-2027', 105, 283)
  doc.text('Priorytet IX Działanie 9.5 Ochrona środowiska (typ projektu 2)', 105, 288)
  doc.text('Biuro projektu: USK Nr 4 w Lublinie, ul. Jaczewskiego 8, tel. 81 72 44 801', 105, 293)
}

function renderPageNumber(doc: jsPDF, pageNum: number) {
  doc.setFontSize(13)
  doc.setFont('helvetica', 'italic')
  doc.setTextColor(0, 0, 0)

  doc.saveGraphicsState()
  doc.text(`Strona`, 205, 250, {
    align: 'center',
    angle: 90
  })
  doc.setFontSize(16)
  doc.text(`${pageNum}`, 200, 235, {
    align: 'center',
    angle: 90
  })
  doc.restoreGraphicsState()
}
