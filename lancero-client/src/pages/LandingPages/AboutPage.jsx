import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';
const lace = '/assets/img/lace.jpg';
const review = '/assets/img/review.jpg';
const shirt = '/assets/img/shirt.jpg';
const tumbler = '/assets/img/jug.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="bg-[#34418f] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-[#34418f]">\
            <img src={logo} alt="BulldogEx" className="h-32 w-32 object-contain scale-200" />
            </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-100 sm:text-4xl">
              Your streamlined campus commerce solution.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-300 sm:text-base">
              BulldogEx Shop is a dedicated marketplace designed to make finding campus essentials easy, fast, and secure. Focusing on providing a straightforward platform where students can buy they need for success.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="drop-shadow-md bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Summary
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick Overview</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-yellow-400 p-5">
            <p className="text-2xl font-bold text-blue-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-900">
              Items
            </p>
          </div>
          <div className="rounded-3xl bg-yellow-400 p-5">
            <p className="text-2xl font-bold text-blue-900">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-900">
              Categories
            </p>
          </div>
          <div className="rounded-3xl bg-yellow-400 p-5">
            <p className="text-2xl font-bold text-blue-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-900">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl bg-yellow-400 p-5">
            <p className="text-2xl font-bold text-blue-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-900">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="drop-shadow-md bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Stacked Shopping</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl bg-yellow-400 p-5">
                <h3 className="text-lg font-semibold text-blue-900">Curated Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-900">
                  Products are grouped by daily need so shoppers can scan faster.
                </p>
              </article>

              <article className="rounded-3xl bg-yellow-400 p-5">
                <h3 className="text-lg font-semibold text-blue-900">Simple Checkout</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-900">
                  Product pages keep price, stock, and action buttons easy to find.
                </p>
              </article>

              <article className="rounded-3xl bg-yellow-400 p-5">
                <h3 className="text-lg font-semibold text-blue-900">Pickup Ready</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-900">
                  Store information stays direct for students who need quick order updates.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl bg-[#34418f] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-100">
              Available Items
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
                <img 
                src={lace}
                alt=" "
                className="object-cover"
                />
                </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
                <img 
                src={review}
                alt=" "
                className="object-cover"
                />
                </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
                <img 
                src={shirt}
                alt=" "
                className="object-cover"
                />
                </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-100 overflow-hidden">
                <img 
                src={tumbler}
                alt=" "
                className="object-cover"
                />
                </div>
            </div>
            <Button to="/products" className="mt-5">View Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
