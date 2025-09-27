import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { AuthForm } from "./auth-form";

import { useAuthStore } from "@/stores";

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
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleFormSubmit = (_: SignUpForm) => {
    // console.log(data);

    // await
    login({
      id: "1",
      ..._,
    });

    navigate("/", { replace: true });
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
