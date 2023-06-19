import "./styles.css";

type Props = {
  name: string;
};

function Productcategory({ name }: Props) {
  return <div className="dsc-category">{name}</div>;
}

export default Productcategory;
