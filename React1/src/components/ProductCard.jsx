const ProductCard = ({ product, del }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:bg-black hover:text-white cursor-pointer"
          aria-label="Add to wishlist"
        >
          ♡
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="mb-2 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-gray-900">
              {product.rating.rate}
            </span>

            <span className="text-sm text-yellow-500">★</span>
          </div>

          <span className="text-xs text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-12 text-lg font-semibold leading-6 text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Price
            </p>

            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>

          <button onClick={()=>{del(product.id)}} className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95 cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;