import { CustomButton } from "../components/CustomButton";
import { useCountHook } from "../hooks/useCountHook";

export const Count = () => {
  const { increment, decrement, count } = useCountHook();
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h1 style={{ fontSize: "120px", marginTop: "6px" }}>{count}</h1>
        <CustomButton onClick={increment} text="Incrementar" />
        <CustomButton onClick={decrement} text="Decrementar" />
      </div>
    </>
  );
};
