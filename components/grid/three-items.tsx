import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';
import logo from '../../app/1.jpeg'

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link
        className="relative block aspect-square h-full w-full"
        // href={`/product/${item.handle}`}
        href={'#'}
        prefetch={true}
      >
        <GridTileImage
          src={logo}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: '3 Br',
            amount: 'Nyali',
            currencyCode: 'ksh'
            // title: item.title as string,
            // amount: item.priceRange.maxVariantPrice.amount,
            // currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  
  const homepageItems:any = [{ handle:'nicki',featuredImage:'/album.jpeg',title:'nicki',amount:400,currencyCode:'ksh'},{handle:'nicki',featuredImage:'/mercy.jpeg',title:'nicki',amount:400,currencyCode:'ksh'},{handle:'nicki',featuredImage:'/mercy.jpeg',title:'nicki',amount:400,currencyCode:'ksh'}]
  console.log('items')
  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  // const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-(--breakpoint-2xl) gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      <ThreeItemGridItem size="full" item={homepageItems[0]} priority={true} />
      <ThreeItemGridItem size="half" item={homepageItems[1]} priority={true} />
      <ThreeItemGridItem size="half" item={homepageItems[2]} />
    </section>
  );
}
