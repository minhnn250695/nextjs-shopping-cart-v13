// export async function fetchProduct() {
//   return (await fetch('http://localhost:5000/items?page=1&&_limit=20')).json();
// }

import { NextResponse } from 'next/server';

export async function fetchProduct() {
  const res = await fetch('http://localhost:5000/items?page=1&&_limit=20', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const product = await res.json();
  console.log(product);
  
  return NextResponse.json({ product });
}
