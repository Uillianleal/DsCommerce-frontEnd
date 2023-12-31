import "./styles.css";

type Props = {
  onNextPage: () => void;
};

function ButtonNextPage({ onNextPage }: Props) {
  return (
    <div onClick={() => onNextPage()} className="dsc-btn-next-page">
      Carregar mais
    </div>
  );
}

export default ButtonNextPage;
