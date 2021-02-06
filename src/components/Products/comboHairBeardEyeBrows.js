import products from '../../../products.json'
import Button from '../button'

export default function ComboHairBeardEyeBrows() {
  return (
    <>
      <h1>{products.comboHairBeardEyeBrows.name} - {products.comboHairBeardEyeBrows.price}</h1>
      <a href="https://calendly.com/angeli_me/15min">
        <Button>Book</Button>
      </a>
    </>
  );
}