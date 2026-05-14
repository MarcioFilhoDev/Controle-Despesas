import useSignIn from "@/src/hooks/useSignIn";
import SignInScreen from "@/src/screens/signin";

export default function SignIn() {
  const { control, errors, handleSubmit, isSubmitting, onSubmit } = useSignIn();

  return (
    <SignInScreen
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
    />
  );
}
