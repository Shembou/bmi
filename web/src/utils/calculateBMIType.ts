export const calculateBmiType = (bmi: number): string => {
  if (bmi < 18.5) return 'Niedowaga'
  if (bmi >= 18.5 && bmi <= 24.9) return 'Prawidłowa waga'
  if (bmi >= 25 && bmi <= 29.9) return 'Nadwaga'
  if (bmi >= 30 && bmi <= 34.9) return 'Otyłość I stopnia'
  if (bmi >= 35 && bmi <= 39.9) return 'Otyłość II stopnia'
  return 'Otyłość III stopnia'
}
