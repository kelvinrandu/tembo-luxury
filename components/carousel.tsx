'use client'
import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import React,{useRef} from "react";
import { GridTileImage } from './grid/tile';
import { motion,useScroll,useTransform } from "framer-motion"
import logo from '../app/1.jpeg'


export async function Carousel() {
  const targetRef= useRef(null)
  const {scrollYProgress}= useScroll({target:targetRef})
  const x= useTransform(scrollYProgress,[0,1],["0%","-55%"])
  // Collections that start with `hidden-*` are hidden from the search page.
  // const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });
  const products:any = [
    { handle:'nicki',featuredImage:'/album.jpeg',title:'nicki',amount:400,currencyCode:'ksh'},
    {handle:'nicki',featuredImage:'/mercy.jpeg',title:'nicki',amount:400,currencyCode:'ksh'},
    {handle:'nicki',featuredImage:'/mercy.jpeg',title:'nicki',amount:400,currencyCode:'ksh'},
    {handle:'nicki',featuredImage:'/mercy.jpeg',title:'nicki',amount:400,currencyCode:'ksh'},
    {handle:'nicki',featuredImage:'/mercy.jpeg',title:'nicki',amount:400,currencyCode:'ksh'},
    { handle:'nicki',featuredImage:'/mercy.jpeg',title:'nicki',amount:400,currencyCode:'ksh'}
    ]

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  

  return (
    <div ref={targetRef} className="w-full overflow-x-hidden
 pb-6 pt-1">
      <motion.div style={{x}}>
      <ul  className="flex animate-carousel gap-4">
        
        {
          //@ts-expect-error:fix
        products.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            {/* <Link href={`/product/${product.handle}`} className="relative h-full w-full"> */}
            <Link href={'#'} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: 'model',
                  amount: '400',
                  currencyCode: 'ksh'
                  // title: product.title,
                  // amount: product.priceRange.maxVariantPrice.amount,
                  // currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={logo}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
      </motion.div>

    </div>
  );
}
