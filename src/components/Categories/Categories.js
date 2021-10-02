import { Wrapper } from './styles';

const Categories = (categories) => {
  return (
    <Wrapper>
      {categories.categories &&
        categories.categories.map((category) => (
          <div key={category.idCategory}>
            <img src={category.strCategoryThumb} />
            <label>{category.strCategory}</label>
            <input type="checkbox" />
          </div>
        ))}
    </Wrapper>
  );
};

export default Categories;
