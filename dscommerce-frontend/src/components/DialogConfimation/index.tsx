import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
  id: number;
  message: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onDialogAnswer: Function;
};

function DialogConfimation({ id, message, onDialogAnswer }: Props) {
  return (
    <div
      className="dsc-dialog-background"
      onClick={() => onDialogAnswer(false, id)}
    >
      <div
        className="dsc-dialog-box"
        onClick={(event) => event.stopPropagation()}
      >
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-container">
          <div onClick={() => onDialogAnswer(false, id)}>
            <ButtonPrimary text="Não" />
          </div>
          <div onClick={() => onDialogAnswer(true, id)}>
            <ButtonInverse text="Sim" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogConfimation;
