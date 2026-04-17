import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="drop-shadow-md px-4 py-6 sm:px-6 sm:py-8 lg:px-8 bg-[#34418f]">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
            Error
          </p>
          <h1 className="text-6xl font-bold leading-tight text-zinc-100 sm:text-7xl">
            404
          </h1>
          <p className="mt-4 text-lg leading-7 text-zinc-300">
            Page not found. The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6 flex gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/products">View Products</Button>
          </div>
        </div>
      </section>

      <section className="drop-shadow-md bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Explore the site</h2>
          
          <div className="mt-6 space-y-3">
            <div className="rounded-3xl p-4 bg-[#34418f]">
              <h3 className="font-semibold text-zinc-100">Home</h3>
              <p className="mt-1 text-sm text-zinc-300">Return to the homepage</p>
              <Button to="/" className="mt-3">Go Home</Button>
            </div>
            
            <div className="rounded-3xl p-4 bg-[#34418f]">
              <h3 className="font-semibold text-zinc-100">Products</h3>
              <p className="mt-1 text-sm text-zinc-300">Browse all featured store items</p>
              <Button to="/products" className="mt-3">View Products</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
