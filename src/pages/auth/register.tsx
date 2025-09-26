import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Form } from "@heroui/form";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { FormEvent, useState } from "react";

export function PageRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const data = Object.fromEntries(new FormData(event.currentTarget)) as {
    //   email: string;
    //   password: string;
    // };
  };

  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        <Card className="max-w-[400px] mx-auto">
          <Form className="w-full" onSubmit={handleFormSubmit}>
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
              <Input
                isRequired
                autoComplete="off"
                errorMessage={({ validationDetails }) => {
                  if (validationDetails.valueMissing) {
                    return "Por favor, insira um e-mail";
                  }
                  if (validationDetails.typeMismatch) {
                    return "Por favor, insira um email válido";
                  }
                }}
                label="E-email"
                name={"email"}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                isRequired
                autoComplete="new-password"
                label="Senha"
                name={"password"}
                type="password"
                validate={(value) => {
                  if (value.length < 4 && value.length > 0) {
                    return "A senha deve ter 4 caracteres ou mais.";
                  }

                  if (
                    (value.match(/[A-Z]/g) || []).length < 1 &&
                    value.length > 0
                  ) {
                    return "A senha deve incluir pelo menos 1 letra maiúscula.";
                  }

                  if (
                    (value.match(/[^a-z]/gi) || []).length < 1 &&
                    value.length > 0
                  ) {
                    return "A senha deve incluir pelo menos 1 símbolo.";
                  }

                  return null;
                }}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
