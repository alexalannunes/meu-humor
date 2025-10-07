import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { addToast } from "@heroui/toast";

import { AuthForm } from "./auth-form";

import { api } from "@/lib/api";
import { useAuthStore } from "@/stores";
import { IUser } from "@/types/user";

const signInFormSchema = z.object({
  email: z.email("E-email inválido").nonempty("Por favor, insira um e-mail"),
  password: z.string().nonempty("Insira uma senha"),
});

type SignInForm = z.infer<typeof signInFormSchema>;

export function PageSignIn() {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const signin = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (payload: SignInForm) => {
      // add try catch here
      const request = await api.post<IUser>("/sessions", payload);

      return request.data;
    },
  });

  const handleFormSubmit = async (data: SignInForm) => {
    const user = await signin.mutateAsync(data, {
      onSuccess: () => {
        navigate("/", { replace: true });
      },
      onError: () => {
        addToast({
          title: "Error!",
        });
      },
    });

    login(user);
    navigate("/", { replace: true });
  };

  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        <AuthForm
          defaultValues={{
            email: "",
            password: "",
          }}
          isLoading={false} // when submitting, set from variable
          linkHref="/signup"
          linkLabel="Crie uma conta"
          questionLabel="Não tem uma conta?"
          schema={signInFormSchema}
          submitLabel="Entrar"
          title="meu humor - Entrar"
          onSubmit={handleFormSubmit}
        />
      </main>
    </div>
  );
}
