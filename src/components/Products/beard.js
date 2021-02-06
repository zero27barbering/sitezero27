import products from '../../../products.json'
import Button from '../button'

export default function Beard() {
  return (
    <>
      <h1>{products.Produto2.name} - {products.Produto2.price}</h1>
      <a href="https://calendly.com/angeli_me/15min">
        <Button>Book</Button>
      </a>
    </>
  );
}