import useSignUp from "@/src/hooks/useSignUp";
import SignUpScreen from "@/src/screens/signup";

export default function SignUp() {
  const { control, errors, handleSubmit, isSubmitting, onSubmit } = useSignUp();

  return (
    <SignUpScreen
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
    />
  );
}
