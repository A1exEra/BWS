import { styled, css } from 'styled-components';
import HeroSection from './HeroSection';
import DescriptionCard from './DescriptionCard';
import CatalogueCard from './CatalogueCard';
import FindADealer from './FindADealer';
import Trending from './Trending';
import WhoWeAre from './WhoWeAre';
import Reviews from './Reviews';
import { BWS_DATA } from '@/helpers/api-util';
import GetInTouch from './GetInTouch';
interface Data {
  title: string;
  description: string;
  about: string;
}
const data: Data[] = [
  {
    title: 'PAVERS',
    description: 'Ashford, Belgium, Manhattan Plank, Trevista 80 Smooth',
    about:
      'Interlocking pavers are known by many names including patio stones, garden paver, interlocking stone, segmental pavers.  Whatever it is called, these products are incredibly versatile in their use. ',
  },
  {
    title: 'WALLS',
    description:
      'Soho Wall, Ikon Wall, Hazelton Wall, Garden Lock, Antico Stacker',
    about:
      'A single dimensional stone with maximum versatility, the Antico® Stacker is ideal for almost any outdoor application including outdoor kitchens, garden walls, barbeques and decorative columns.',
  },
  {
    title: 'SLABS',
    description: 'Avari, Tresca, Balsam, OpusBW300, Richmond 50, Flagstone',
    about:
      'Combining the warm, classic look of natural stone walkways with the modern edges of machined tile, the Flagstone™ slab blends seamlessly into your oasis. The subtle texture awakens in low light.',
  },
];
interface Catalogue {
  title: string;
  description: string;
  image: string;
}
const catalogue: Catalogue[] = [
  {
    title: 'SUPPLIER CATALOGUES',
    description:
      'Being inspired to come up with an idea that you love and work for you should not be a difficult or hard task, it should be fun and enjoyable. There you can see our design gallery to getting inspired ',
    image: '/images/swimmingPool.jpg',
  },
  {
    title: 'DESIGN GALLERY',
    description:
      'Our curated products work together to help you achieve a landscape that is thoughtfully and creatively built for living, working and playing. There you can see some of our supplier catalogs.',
    image: '/images/granite.jpg',
  },
];
const MainPage = (props: { products: BWS_DATA[] }) => {
  return (
    <StyledMainPage>
      <HeroSection />
      <div className="cards_container">
        {data.map((item: Data) => (
          <DescriptionCard key={item.title} data={item} />
        ))}
      </div>
      <div className="catalogue_container">
        {catalogue.map((item: Catalogue) => (
          <CatalogueCard key={item.title} data={item} />
        ))}
      </div>
      <FindADealer />
      <Trending products={props.products} />
      <WhoWeAre />
      <Reviews />
      <GetInTouch />
    </StyledMainPage>
  );
};
const StyledMainPage = styled.div`
  .cards_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .catalogue_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 100px 64px;
    background-color: ${({ theme }) => theme.colors.whiteSecondary};
  }
  @media (max-width: 768px) {
    .catalogue_container {
      padding: 100px 10px;
    }
  }
`;
export default MainPage;
