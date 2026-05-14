import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../services/auth-services";

const signUpShema = z.object({
  username: z
    .string()
    .min(3, "O nome precisa ter pelo menos 3 caracteres")
    .max(30, "O nome tem limite de 30 caracteres"),
  email: z
    .string()
    .email({ pattern: z.regexes.email })
    .min(1, "E-mail é obrigatório"),
  password: z.string().min(6, "A senha deve possuir mais de 6 caracteres"),
});

export type SignUpFormData = z.infer<typeof signUpShema>;

const useSignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpShema),
  });

  //    Função responsável por chamar o método de cadastro
  const onSubmit = async (data: SignUpFormData) => {
    try {
      await authService
        .signUp(data.email, data.password, data.username)
        .then(() => {
          router.replace("/home/page");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    isSubmitting,
    errors,
  };
};

export default useSignUp;
