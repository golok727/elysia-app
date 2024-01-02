export const home = () => {
  return {
    message: "Radhey Shyam",
    routes: ["/hello", "/health-check", "/users", "/users/id"],
  };
};

interface RouteProps<Params extends Record<string, any>> {
  params: Params;
}

const baseUrl = "https://jsonplaceholder.typicode.com";

type HelloProps = RouteProps<{ name: string }>;

export const hello = ({ params: { name } }: HelloProps) => {
  return `Hello ${name}`;
};

export const users = async () => {
  const res = await fetch(`${baseUrl}/users`);
  const users = await res.json();
  return users;
};

export const usersWithId = async (props: RouteProps<{ id: number }>) => {
  const {
    params: { id },
  } = props;

  const res = await fetch(`${baseUrl}/users/${id}`);
  const user = await res.json();
  return user;
};

export const healthcheck = () => {
  return 1;
};
