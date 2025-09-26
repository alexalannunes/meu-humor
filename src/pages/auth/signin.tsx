import { z } from "zod";

import { AuthForm } from "./auth-form";

const signInFormSchema = z.object({
  email: z.email("E-email inválido").nonempty("Por favor, insira um e-mail"),
  password: z.string().nonempty("Insira uma senha"),
});

type SignInForm = z.infer<typeof signInFormSchema>;

export function PageSignIn() {
  const handleFormSubmit = (_: SignInForm) => {
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
