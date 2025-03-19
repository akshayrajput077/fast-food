
export default function NotFound({ title }) {
  return (
    <>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>
          <p className="mt-4 text-gray-500">{title}</p>
          <a
            href="/shop"
            className="mt-6 inline-block rounded-sm bg-orange-600 px-5 py-3 text-sm font-medium text-white hover:bg-orange-700 focus:ring-3 focus:outline-hidden"
          >
            Go To Shop
          </a>
        </div>
      </div>
    </>
  )
}