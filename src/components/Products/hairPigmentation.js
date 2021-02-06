import products from '../../../products.json'
import Button from '../button'

export default function HairPigmentation() {
  return (
    <>
      <h1>{products.hairPigmentation.name} - {products.hairPigmentation.price}</h1>
      <div>
        <a href="https://calendly.com/angeli_me/15min">
          <Button>Book</Button>
        </a>
      </div>    
    </>
  );
}