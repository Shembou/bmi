import { useEffect } from "react"

export default async function SubscribersPage() {
  const [subscribers,setSubscribers] = useEffect<ISubscribers[]>(null)

  useEffect(() => {
    try {
      const getData = await fetch('/api/subscribers', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }
    }
    catch (error) {
      console.error((error as Error).message)
  },[])

  return <main>
    <section>
      
      </section>
      </main>
}
