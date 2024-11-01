import { IFormValues } from '@/components/Calculator/Instruction/IFormValues'
const polScoreTable: Record<string, Record<string, Record<number, Record<number, number[]>>>> = {
  female: {
    nonsmoker: {
      70: {
        180: [17, 20, 24, 28, 32],
        160: [12, 14, 17, 20, 24],
        140: [8, 10, 12, 14, 17],
        120: [6, 7, 8, 10, 12]
      },
      65: {
        180: [9, 10, 12, 15, 17],
        160: [6, 7, 9, 10, 12],
        140: [4, 5, 6, 7, 9],
        120: [3, 3, 4, 5, 6]
      },
      60: {
        180: [5, 6, 7, 8, 9],
        160: [3, 4, 5, 5, 7],
        140: [2, 3, 3, 4, 5],
        120: [2, 2, 2, 3, 3]
      },
      55: {
        180: [3, 3, 4, 4, 5],
        160: [2, 2, 3, 3, 4],
        140: [1, 1, 2, 2, 3],
        120: [1, 1, 1, 1, 2]
      },
      50: {
        180: [2, 2, 2, 3, 3],
        160: [1, 1, 2, 2, 2],
        140: [1, 1, 1, 1, 2],
        120: [1, 1, 1, 1, 1]
      },
      40: {
        180: [1, 1, 1, 1, 1],
        160: [0, 1, 1, 1, 1],
        140: [0, 0, 0, 1, 1],
        120: [0, 0, 0, 0, 0]
      }
    },
    smoker: {
      70: {
        180: [32, 37, 43, 49, 55],
        160: [23, 27, 32, 37, 42],
        140: [17, 20, 23, 27, 32],
        120: [12, 14, 17, 20, 23]
      },
      65: {
        180: [17, 20, 24, 28, 32],
        160: [12, 14, 17, 20, 23],
        140: [8, 10, 12, 14, 17],
        120: [6, 7, 8, 10, 12]
      },
      60: {
        180: [9, 11, 13, 15, 18],
        160: [6, 8, 9, 11, 13],
        140: [5, 5, 6, 8, 9],
        120: [3, 4, 4, 5, 6]
      },
      55: {
        180: [5, 6, 8, 9, 11],
        160: [4, 4, 5, 6, 7],
        140: [3, 3, 4, 4, 5],
        120: [2, 2, 3, 3, 4]
      },
      50: {
        180: [3, 4, 5, 5, 7],
        160: [2, 3, 3, 4, 5],
        140: [2, 2, 2, 3, 3],
        120: [1, 1, 2, 2, 2]
      },
      40: {
        180: [1, 2, 2, 2, 3],
        160: [1, 1, 1, 2, 2],
        140: [1, 1, 1, 1, 1],
        120: [0, 1, 1, 1, 1]
      }
    }
  },
  male: {
    nonsmoker: {
      70: {
        180: [28, 33, 38, 43, 50],
        160: [20, 24, 28, 32, 38],
        140: [14, 17, 20, 24, 28],
        120: [10, 12, 14, 17, 20]
      },
      65: {
        180: [17, 20, 24, 28, 32],
        160: [12, 14, 17, 20, 24],
        140: [9, 10, 12, 14, 17],
        120: [6, 7, 9, 10, 12]
      },
      60: {
        180: [11, 13, 15, 18, 21],
        160: [8, 9, 11, 13, 15],
        140: [5, 6, 8, 9, 11],
        120: [4, 4, 5, 6, 8]
      },
      55: {
        180: [7, 8, 10, 12, 14],
        160: [5, 6, 7, 8, 10],
        140: [3, 4, 5, 6, 7],
        120: [2, 3, 3, 4, 5]
      },
      50: {
        180: [5, 6, 7, 8, 9],
        160: [3, 4, 5, 6, 7],
        140: [2, 3, 3, 4, 5],
        120: [2, 2, 2, 3, 3]
      },
      40: {
        180: [2, 2, 3, 3, 4],
        160: [1, 2, 2, 2, 3],
        140: [1, 1, 1, 2, 2],
        120: [1, 1, 1, 1, 1]
      }
    },
    smoker: {
      70: {
        180: [49, 56, 62, 69, 76],
        160: [37, 43, 49, 55, 62],
        140: [27, 32, 37, 43, 49],
        120: [20, 23, 27, 32, 37]
      },
      65: {
        180: [32, 37, 43, 49, 55],
        160: [23, 27, 32, 37, 43],
        140: [17, 20, 23, 27, 32],
        120: [12, 14, 17, 20, 23]
      },
      60: {
        180: [21, 25, 29, 34, 39],
        160: [15, 18, 21, 25, 29],
        140: [11, 13, 15, 18, 21],
        120: [7, 9, 11, 13, 15]
      },
      55: {
        180: [14, 17, 20, 23, 27],
        160: [10, 12, 14, 17, 20],
        140: [7, 8, 10, 12, 14],
        120: [5, 6, 7, 8, 10]
      },
      50: {
        180: [9, 11, 13, 16, 18],
        160: [6, 8, 9, 11, 13],
        140: [5, 5, 6, 8, 9],
        120: [3, 4, 5, 5, 6]
      },
      40: {
        180: [4, 4, 5, 6, 8],
        160: [3, 3, 4, 4, 5],
        140: [2, 2, 3, 3, 4],
        120: [1, 1, 2, 2, 3]
      }
    }
  }
}

const ageRanges = [40, 50, 55, 60, 65, 70]
const pressureRanges = [120, 140, 160, 180]
const cholesterolRanges = [150, 190, 230, 270, 310]

function findClosestValue(value: number, ranges: number[]): number {
  return ranges.reduce((prev, curr) =>
    Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
  )
}

export function calculatePolScore(formValues: IFormValues): number {
  const { gender, isSmoking, age, pressure, cholesterol } = formValues

  const genderKey = gender === 'male' ? 'male' : 'female'
  const smokingKey = isSmoking == 'yes' ? 'smoker' : 'nonsmoker'

  const ageClosest = findClosestValue(Number(age), ageRanges)
  const pressureClosest = findClosestValue(Number(pressure), pressureRanges)
  const cholesterolClosest = findClosestValue(Number(cholesterol), cholesterolRanges)

  const riskScores = polScoreTable[genderKey]?.[smokingKey]?.[ageClosest]?.[pressureClosest]

  const cholesterolIndex = cholesterolRanges.indexOf(cholesterolClosest)
  return riskScores[cholesterolIndex]
}
