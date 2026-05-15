import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../services/auth-services";

const signInSchema = z.object({
  email: z
    .string()
    .email({ pattern: z.regexes.email })
    .min(1, "E-mail é obrigatório"),
  password: z.string().min(6, "A senha deve possuir mais de 6 caracteres"),
});

export type SignInFormData = z.infer<typeof signInSchema>;

const useSignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      await authService.signIn(data.email, data.password);

      router.replace("/home/page");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
};

export default useSignIn;
