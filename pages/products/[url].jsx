import { useRouter } from "next/router";
import jsondb from "@/jsondb/products";
import Link from "next/link";
import Image from "next/image";
import { ListGroup, Button, ListGroupItem, Container, Row, Col } from "react-bootstrap";

export default function Productside() {
  const router = useRouter();
  const { url } = router.query;
  const product = jsondb.products.find((a) => a.url === url);

  if (!product) {
    return (
      <Container>
        <h2>Product not found</h2>
      </Container>
    );
  }
  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Link href="/">
            <div className="text-dark">🠔 back</div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <div style={{ width: '100%', height: '330px', position: 'relative' }}>
            <Image
              className="rounded-3"
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3 className="text-danger">{product.price} €</h3>
            </ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
            <ListGroupItem>
              <span className="ms-2">Extras: Gratis Shoe Care Product</span>
              <input className="form-check-input me-2 ms-3" type="checkbox" />
            </ListGroupItem>
            <ListGroupItem>
              <label htmlFor="quantity" className="form-label">Number of articles</label>
              <input
                id="quantity"
                className="form-control"
                type="number"
                placeholder="1"
                min="1"
              />
            </ListGroupItem>
            <ListGroupItem>
              <Button variant="danger" className="w-100">to basket of goods</Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
