function FormTextArea(props: any) {
  const {
    validation,
    invalid = "false",
    dirty = "false",
    onTurnDirty,
    ...textAreaProps
  } = props;
  function handleBluer() {
    onTurnDirty(props.name);
  }
  return (
    <textarea
      {...textAreaProps}
      data-invalid={invalid}
      onBlur={handleBluer}
      data-dirty={dirty}
    />
  );
}

export default FormTextArea;
