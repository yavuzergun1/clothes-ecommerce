import "./form-input.styles.jsx";
import { Group, Input, FormInputLabel } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {" "}
          {/* IF otherProps.value.length = 0, THEN shrink WILL BE FALSY; IF MORE THAN 0, IT WILL BE TRUTHY  */}
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
