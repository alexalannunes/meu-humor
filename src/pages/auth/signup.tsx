import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { AuthForm } from "./auth-form";

import { api } from "@/lib/api";
import { IUser } from "@/types/user";

const signupSchema = z.object({
  name: z.string().nonempty("Por favor, insira um nome"),
  email: z.email("E-email inválido").nonempty("Por favor, insira um e-mail"),
  password: z
    .string()
    .nonempty("Insira uma senha")
    .min(8, "A senha deve ter 8 caracteres ou mais.")
    .max(50, "A senha deve ter no máximo 50 carácteres")
    .regex(/[A-Z]/, "A senha deve incluir pelo menos 1 letra maiúscula.")
    .regex(/[a-z]/, "A senha deve incluir pelo menos 1 letra minúscula.")
    .regex(/\d/, "A senha deve incluir pelo menos 1 número.")
    .regex(/[^a-zA-Z0-9]/, "A senha deve incluir pelo menos 1 símbolo."),
});

type SignUpForm = z.infer<typeof signupSchema>;

export function PageSignUp() {
  const navigate = useNavigate();

  const signup = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (payload: SignUpForm) => {
      // add try catch here
      const request = await api.post<Omit<IUser, "token">>(
        "/register",
        payload,
      );

      return request.data;
    },
  });

  const handleFormSubmit = async (data: SignUpForm) => {
    signup.mutate(data, {
      onSuccess: () => {
        navigate("/signin", { replace: true });
      },
      onError: () => {
        addToast({
          title: "Error!",
        });
      },
    });
  };

  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        <AuthForm
          defaultValues={{
            name: "",
            email: "",
            password: "",
          }}
          isLoading={false} // when submitting, set from variable
          linkHref="/signin"
          linkLabel="Entre"
          questionLabel="Já tem uma conta?"
          schema={signupSchema}
          submitLabel="Criar conta"
          title="meu humor - Criar conta"
          onSubmit={handleFormSubmit}
        />
      </main>
    </div>
  );
}
