import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type Form = {
  age: number;
};

const HookForm: React.FC = () => {
  const { register, handleSubmit, watch } = useForm();
  const [result, setResult] = useState("");

  const onSubmit: SubmitHandler<any> = (data) =>
    setResult(JSON.stringify(data));

  const watchUser = watch("name", "default");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="'User name" {...register("name")} />
      <input
        type="password"
        placeholder="'Password"
        {...register("password")}
      />
      <input type="submit" />
      <p>{watchUser}</p>
      <p>{result}</p>
    </form>
  );
};

export default HookForm;
