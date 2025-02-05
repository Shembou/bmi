import { IFormValues } from '@/components/Calculator/Instruction/IFormValues'
import { Subscriber } from '@/entities/Subscriber'
import { calculatePolScore } from './calculatePolScore'

export const calculateScore = (subscriber: Subscriber) => {
  const score = calculatePolScore(subscriber as unknown as IFormValues)
  return score
}
