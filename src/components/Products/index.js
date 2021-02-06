import products from '../../../products.json'
import Button from '../button'

export default function Hair() {
  return (
    <>
      <h1>{products.Produto1.name} - {products.Produto1.price}</h1>
      <a href="https://calendly.com/angeli_me/15min">
        <Button>Book</Button>
      </a>
    </>
  );
}