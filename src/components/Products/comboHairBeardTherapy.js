import products from '../../../products.json'
import Button from '../button'

export default function ComboHairBeardTherapy() {
  return (
    <>
      <h1>{products.comboHairBeardTherapy.name} - {products.comboHairBeardTherapy.price}</h1>
      <a href="https://calendly.com/angeli_me/15min">
        <Button>Book</Button>
      </a>
    </>
  );
}