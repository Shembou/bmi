export default function formatDateToPolishLocaleString(date: string) {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}
