import React from 'react';
import jsondb from "../jsondb/products";
import { Card, Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const MAX_WORDS = 15; // Maximale Anzahl der Wörter für die Beschreibung

export default function ProductList() {
  // Funktion zum Kürzen der Beschreibung
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > MAX_WORDS) {
      return words.slice(0, MAX_WORDS).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className="product-list">
      <Row xs={1} md={2} lg={3} className="g-4">
        {jsondb.products.map((product) => (
          <Col key={product.name}>
            <Card className="h-100 d-flex flex-column">
              <Link href={`/products/${product.url}`}>
                <Image 
                  src={product.image} 
                  alt={product.name}
                  width={200}
                  height={180}
                  style={{ objectFit: 'cover', height: '250px', width: '100%' }}
                />
              </Link>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-2">
                  {product.name} - {product.price} €
                </Card.Title>
                <Card.Text className="flex-grow-1">
                  {truncateDescription(product.description)}
                  {product.description.split(' ').length > MAX_WORDS && (
                    <Link href={`/products/${product.url}`} className="read-more mt-2">
                      Read more...
                    </Link>
                  )}
                </Card.Text>
                <Button variant="danger" className="mt-auto">zum Warenkorb</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <style jsx>{`
        .product-list :global(.card) {
          height: 100%;
        }
        .product-list :global(.card-body) {
          display: flex;
          flex-direction: column;
        }
        .product-list :global(.card-text) {
          flex-grow: 1;
        }
        .read-more {
          color: blue;
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
