const FilteredProductsPage = () => {
  return <div>FilteredProductsPage</div>;
};

export default FilteredProductsPage;

export const getServerSideProps = async (ctx: any) => {
  const { params } = ctx;
  return {
    props: {},
  };
};
