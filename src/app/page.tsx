import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href='about'>About</Link>
        <Link href='product/list'>Product List</Link>
        <Link href='product/detail'>Detail</Link>
      </li>
    </ul>
  )
}
