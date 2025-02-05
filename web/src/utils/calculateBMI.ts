import { Subscriber } from '@/entities/Subscriber'

export const calculateBMI = (subscriber: Subscriber) => {
  const division = Number(Math.pow(Number(subscriber.height) / 100, 2).toFixed(2))
  const result = Math.floor((Number(subscriber.weight) / division) * 10) / 10
  return result
}
