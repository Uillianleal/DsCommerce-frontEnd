function FormInput(props: any) {
  const {
    validation,
    invalid = "false",
    dirty = "false",
    onTurnDirty,
    ...inputProps
  } = props;
  function handleBluer() {
    onTurnDirty(props.name);
  }
  return (
    <input
      {...inputProps}
      data-invalid={invalid}
      onBlur={handleBluer}
      data-dirty={dirty}
    />
  );
}

export default FormInput;
