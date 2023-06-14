import { NextResponse } from 'next/server';

export async function fetchProduct() {
  const res = await fetch('http://localhost:5000/items?page=1&&_limit=20', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const product = await res.json();
  return NextResponse.json({ product });
}
