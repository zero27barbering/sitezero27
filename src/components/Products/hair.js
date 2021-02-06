import products from '../../../products.json'
import Button from '../button'

export default function Hair() {
  return (
    <>
      <h1>{products.hair.name} - {products.hair.price}</h1>
      <a href="https://calendly.com/angeli_me/15min">
        <Button>Book</Button>
      </a>
    </>
  );
}