import { useAppSelector } from "./reduxHooks";

export function useAuth() {
  const { email, phone } = useAppSelector((state) => state);

  console.log(
    "!!email || !!phone, phone, email: ",
    !!email || !!phone,
    phone,
    email
  );
  return { isAuth: !!email || !!phone, phone, email };
}
