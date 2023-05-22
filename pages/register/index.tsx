import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supaBase } from "@/lib/supabase";
import { File } from "buffer";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5mb
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

function firstWordToUpperCase(name: string) {
  return name
    .trim()
    .split(" ")
    .map((word) => {
      return word[0].toLocaleUpperCase().concat(word.substring(1));
    })
    .join(" ");
}

const createUserFormSchema = z.object({
  avatar: z
    .any()
    .refine((files) => !!files.item(0), "A imagem do perfil é obrigatória")
    .refine(
      (files) => files.length && files.item(0).size <= MAX_FILE_SIZE,
      "O arquivo precisa ter no máximo 5Mb"
    )
    .refine(
      (files) => files.length && ACCEPTED_IMAGE_TYPES.includes(files.item(0)!.type),
      "Formato de imagem inválido"
    )
    .transform((list) => list.item(0)!),
  name: z
    .string()
    .nonempty("O campo nome é obrigatório")
    .transform(firstWordToUpperCase),
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Formato de e-mail inválido")
    // Caso você queira fazer uma validação usando alguma lógica, tbm existe o super refine, quando você precisa validar mais de um campo
    .refine((email) => {
      return email.endsWith("@walker.com.br");
    }, "O e-mail precisa ser da @walker.com.br"),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
  techs: z
    .array(
      z.object({
        title: z.string().nonempty("O título é obrigatório."),
        knowledge: z.coerce
          .number()
          .min(1, "Mínimo 1.")
          .max(100, "Máximo 100."),
      })
    )
    .min(2, "Insira pelo menos duas tecnologias"),
});

/* Aqui você pode usar esse approach para determinar um formulário baseado em um schema e assim ele tipar os campos
   Baseado no que você precisa para sua lógica.
*/
type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function Register() {
  const [output, setOutput] = useState("");
  /*
    Register: Serve para gente informara quais vão ser os campos do nosso formulário, basicamente para mapear.
    hadnleSubmit: action que vai ser usada pelo formulário esperando outra função para ser passada e passar os valores.
    */
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "techs",
    control,
  });

  async function createUser(data: any) {
    const { data: uploadData, error } = await supaBase.storage
    .from("forms-react")
    .upload(`avatar/${data.avatar?.name}`, data.avatar, {
      cacheControl: '3600',
      upsert: false
    })
   
    console.log(error);
    console.log(uploadData);

  }

  function addNewTech() {
    append({ title: "", knowledge: 0 });
  }

  return (
    <main className="h-screen flex flex-col items-center text-zinc-300 justify-center gap-10">
      <form
        className="flex flex-col gap-4 w-full max-w-xs"
        onSubmit={handleSubmit(createUser)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="Nome">Nome</label>
          <input
            type="text"
            className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="avatar">Avatar</label>
          <input type="file" accept="image/*" {...register("avatar")} />
          {errors.avatar && (
            <span className="text-red-500 text-sm">
              {/* {errors.avatar.message} */}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="flex item items-center justify-between">
            Tecnologias
            <button
              type="button"
              onClick={addNewTech}
              className="text-emerald-500 text-sm"
            >
              Adicionar
            </button>
          </label>

          {fields.map((field, index) => {
            return (
              <div className="flex gap-4" key={field.id}>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
                    {...register(`techs.${index}.title`)}
                  />

                  {errors.techs
                    ? [index] && (
                        <span className="text-red-500 text-sm">
                          {errors.techs[index]?.title?.message}
                        </span>
                      )
                    : null}
                </div>

                <div className="flex flex-col gap-1">
                  <div>
                    <input
                      type="number"
                      className="w-16 border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
                      {...register(`techs.${index}.knowledge`)}
                    />
                    <button
                      className="text-white bg-red-600 ml-2 p-1 rounded"
                      type="button"
                      onClick={() => remove(index)}
                    >
                      X
                    </button>
                  </div>
                  {errors.techs
                    ? [index] && (
                        <span className="text-red-500 text-sm">
                          {errors.techs[index]?.knowledge?.message}
                        </span>
                      )
                    : null}
                </div>
              </div>
            );
          })}

          {errors.techs && (
            <span className="text-red-500 text-sm">{errors.techs.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600"
        >
          Cadastrar
        </button>
      </form>

      <pre>{output}</pre>
    </main>
  );
}
