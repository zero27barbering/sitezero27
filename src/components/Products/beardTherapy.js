import products from '../../../products.json'
import Button from '../button'

export default function BeardTherapy() {
  return (
    <>
      <h1>{products.beardTherapy.name} - {products.beardTherapy.price}</h1>
      <a href="https://calendly.com/angeli_me/15min">
        <Button>Book</Button>
      </a>
    </>
  );
}