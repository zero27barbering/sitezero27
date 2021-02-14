import Products from '../src/components/Products';
import Combos from '../src/components/Combos';
import Infobar from '../src/components/Infobar';
import ServiceArea from '../src/components/ServiceArea';
import Header from '../src/components/Header';
import ComboArea from '../src/components/ComboArea';

export default function Home() {
  return (
    <>
      <Header />
      <Infobar />
      <ServiceArea>
        <Products />
      </ServiceArea>
      <ComboArea>
        <Combos />
      </ComboArea>
    </>
  );
}
