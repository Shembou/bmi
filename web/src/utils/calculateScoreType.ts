export const calculateScoreType = (score: number): string => {
  if (score < 1) return 'Niskie ryzyko'
  if (score >= 1 && score <= 5) return 'Umiarkowane ryzyko'
  if (score >= 5 && score <= 10) return 'Wysokie ryzyko'
  return 'Bardzo wysokie ryzyko'
}
