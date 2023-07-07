import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
  message: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onDialogAnswe: Function;
};

function DialogConfimation({ message, onDialogAnswe }: Props) {
  return (
    <div className="dsc-dialog-background" onClick={() => onDialogAnswe(false)}>
      <div
        className="dsc-dialog-box"
        onClick={(event) => event.stopPropagation()}
      >
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-container">
          <div onClick={() => onDialogAnswe(false)}>
            <ButtonInverse text="Não" />
          </div>
          <div onClick={() => onDialogAnswe(true)}>
            <ButtonPrimary text="Sim" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogConfimation;
