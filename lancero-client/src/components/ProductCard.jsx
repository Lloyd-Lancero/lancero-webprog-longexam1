import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="drop-shadow-xl rounded-3xl bg-[#34418f] p-4">
      <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
        <img 
        src={product.img}
        alt={product.title}
        className="object-contain"
        />
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-300">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-zinc-100">{product.title}</h3>
      <p className="mt-2 text-base font-bold text-zinc-100">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-300">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button to={`/products/${product.name}`} className="mt-4">View Product</Button>
    </article>
  );
};

export default ProductCard;
