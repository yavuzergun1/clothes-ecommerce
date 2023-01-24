
    import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../components/button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.prevenDefault();

    if (!stripe || !elements) {
      return;
      }
      

  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Payment Section</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
