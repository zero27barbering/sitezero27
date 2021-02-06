import products from '../../../products.json'
import Button from '../button'

export default function BeardPigmentation() {
  return (
    <>
      <h1>{products.beardPigmentation.name} - {products.beardPigmentation.price}</h1>
      <div>
        <a href="https://calendly.com/angeli_me/15min">
          <Button>Book</Button>
        </a>
      </div>    
    </>
  );
}