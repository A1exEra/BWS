import { styled, css } from 'styled-components';
import HeroSection from './HeroSection';
import DescriptionCard from './DescriptionCard';

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
const MainPage = () => {
  return (
    <StyledMainPage>
      <HeroSection />
      <div className="cards_container">
        {data.map((item: Data) => (
          <DescriptionCard data={item} />
        ))}
      </div>
    </StyledMainPage>
  );
};
const StyledMainPage = styled.div`
  .cards_container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  }
  @media (max-width: 768px) {
    .cards_container {
      display: block;
    }
  }
`;
export default MainPage;
