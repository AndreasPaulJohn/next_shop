import Link from 'next/link'
import Image from "next/image"
import { Badge } from 'react-bootstrap'

export default function Navigation() {
  return (
    <div className="shadow sticky-top p-2 mb-2 bg-danger">
      <div className="d-flex justify-content-between align-items-center">
        <Link href="/">
          <Image src={'/images/logo-m.png'} alt="logo" width={180} height={75} />
        </Link>
        <Link href="/warenkorb">
          <div>
            <Image src={'/images/warenkorb.png'} alt="warenkorb" width={30} height={30} />
            <Badge pill bg="success">2</Badge>
          </div>
        </Link>
      </div>
    </div>
  );
}