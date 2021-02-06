import products from '../../../products.json'
import Button from '../button'

export default function ComboHairBeard() {
  return (
    <>
      <h1>{products.comboHairBeard.name} - {products.comboHairBeard.price}</h1>
      <a href="https://calendly.com/angeli_me/15min">
        <Button>Book</Button>
      </a>
    </>
  );
}