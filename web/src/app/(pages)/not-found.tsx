export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <p className="text-2xl font-medium mb-6">Nie znaleziono strony</p>
        <a href="/" className="text-blue-500 hover:underline text-lg">
          Wróć do strony głównej
        </a>
      </div>
    </section>
  )
}
