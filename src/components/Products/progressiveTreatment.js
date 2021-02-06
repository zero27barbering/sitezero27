import products from '../../../products.json'
import Button from '../button'

export default function ProgressiveTreatmentHair() {
  return (
    <>
      <h1>{products.progressiveTreatment.name} - {products.progressiveTreatment.price}</h1>
      <a href="https://calendly.com/angeli_me/15min">
        <Button>Book</Button>
      </a>
    </>
  );
}