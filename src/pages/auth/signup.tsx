import { z } from "zod";

import { AuthForm } from "./auth-form";

const signupSchema = z.object({
  email: z.email("E-email inválido").nonempty("Por favor, insira um e-mail"),
  password: z
    .string()
    .nonempty("Insira uma senha")
    .min(8, "A senha deve ter 8 caracteres ou mais.")
    .max(32, "A senha deve ter no máximo 32 carácteres")
    .regex(/[A-Z]/, "A senha deve incluir pelo menos 1 letra maiúscula.")
    .regex(/[a-z]/, "A senha deve incluir pelo menos 1 letra minúscula.")
    .regex(/\d/, "A senha deve incluir pelo menos 1 número.")
    .regex(/[^a-zA-Z0-9]/, "A senha deve incluir pelo menos 1 símbolo."),
});

type SignUpForm = z.infer<typeof signupSchema>;

export function PageSignUp() {
  const handleFormSubmit = (_: SignUpForm) => {
    // console.log(data);
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
