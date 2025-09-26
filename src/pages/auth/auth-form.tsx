import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Form } from "@heroui/form";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  DefaultValues,
  FieldValues,
  Path,
  useForm,
} from "react-hook-form";
import { z } from "zod";

interface AuthFormProps<T extends FieldValues> {
  schema: z.ZodType<T, any, any>;
  onSubmit: (data: T) => void;
  isLoading?: boolean;
  title: string;
  submitLabel: string;
  linkLabel: string;
  linkHref: string;
  defaultValues: DefaultValues<T>;
  questionLabel: string;
}

export function AuthForm<T extends FieldValues>({
  defaultValues,
  isLoading,
  linkHref,
  linkLabel,
  onSubmit,
  schema,
  submitLabel,
  title,
  questionLabel,
}: AuthFormProps<T>) {
  const form = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <Card className="max-w-[400px] mx-auto">
      <Form
        className="w-full"
        validationBehavior="aria"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CardHeader className="flex gap-3">
          <Image
            alt="meu humor logo"
            height={40}
            radius="sm"
            src="/logo.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{title}</p>
            <p className="text-small text-default-500">
              meu-humor.com (em breve)
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-4">
          {Object.keys(defaultValues).map((key) => (
            <Controller
              key={key}
              control={form.control}
              name={key as Path<T>}
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
          ))}
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-col">
          <Button color="primary" isLoading={isLoading} type="submit">
            {submitLabel}
          </Button>
          <p className="mt-3 text-center text-small text-default-500">
            {questionLabel} <Link href={linkHref}>{linkLabel}</Link>
          </p>
        </CardFooter>
      </Form>
    </Card>
  );
}
