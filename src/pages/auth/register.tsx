import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Form } from "@heroui/form";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
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

type RegisterForm = z.infer<typeof registerSchema>;

export function PageRegister() {
  const form = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const handleFormSubmit = (data: RegisterForm) => {
    console.log(data);
  };

  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        <Card className="max-w-[400px] mx-auto">
          <Form
            className="w-full"
            validationBehavior="aria"
            onSubmit={form.handleSubmit(handleFormSubmit)}
          >
            <CardHeader className="flex gap-3">
              <Image
                alt="heroui logo"
                height={40}
                radius="sm"
                // change this
                src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/75-generic-logos-to-impress-your-market/square-link-monoline-by-azus-brandcrowd.png"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">meu humor</p>
                <p className="text-small text-default-500">
                  meu-humor.com (em breve)
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-4">
              <Controller
                control={form.control}
                name="email"
                render={({ field, fieldState: { invalid, error } }) => (
                  <Input
                    isRequired
                    autoComplete="off"
                    errorMessage={error?.message}
                    isInvalid={invalid}
                    label="E-email"
                    type="email"
                    {...field}
                  />
                )}
              />
              <Controller
                control={form.control}
                name="password"
                render={({ field, fieldState: { invalid, error } }) => (
                  <Input
                    isRequired
                    autoComplete="new-password"
                    errorMessage={error?.message}
                    isInvalid={invalid}
                    label="Senha"
                    type="password"
                    {...field}
                  />
                )}
              />
            </CardBody>
            <Divider />
            <CardFooter className="flex flex-col">
              <Button color="primary" type="submit">
                Criar conta
              </Button>
              <p className="mt-3 text-center text-small text-default-500">
                Ja tem uma conta? <Link href="/login">Faça login</Link>
              </p>
            </CardFooter>
          </Form>
        </Card>
      </main>
    </div>
  );
}
