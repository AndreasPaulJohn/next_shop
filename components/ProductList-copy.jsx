import jsondb from "../jsondb/products"
import {Card, Button} from 'react-bootstrap'
import Link from 'next/link'

export default function ProductList() {
  return (
    <div>
        <div className="row row-cols-3">
            {jsondb.products.map((product) =>(
                <div key={product.name} className="mt-3 col">
                    <Card>
                        <Link href={`/products/${product.url}`} passHref>
                      
                                <Card.Img variant="top" src={product.image} />
                      
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                {product.name} {product.price} €
                            </Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button variant="danger">zum Warenkorb</Button> 
                        </Card.Body>
                    </Card>
                </div>    
            ))}
        </div>
        <br></br>
    </div>
  )
}
