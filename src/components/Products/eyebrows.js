import products from '../../../products.json'
import Button from '../button'

export default function Eyebrows() {
  return (
    <>
      <h1>{products.eyebrows.name} - {products.eyebrows.price}</h1>
      <a href="https://calendly.com/angeli_me/15min">
        <Button>Book</Button>
      </a>
    </>
  );
}