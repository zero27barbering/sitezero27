import products from '../../../products.json'
import Button from '../button'

export default function ComboHairBeardTherapyEyeBrows() {
  return (
    <>
      <h1>{products.comboHairBeardTherapyEyeBrows.name} - {products.comboHairBeardTherapyEyeBrows.price}</h1>
      <a href="https://calendly.com/angeli_me/15min">
        <Button>Book</Button>
      </a>
    </>
  );
}