import products from '../../../products.json'
import Button from '../button'

export default function ComboHairEyebrows() {
  return (
    <>
      <h1>{products.comboHairEyebrows.name} - {products.comboHairEyebrows.price}</h1>
      <a href="https://calendly.com/angeli_me/15min">
        <Button>Book</Button>
      </a>
    </>
  );
}