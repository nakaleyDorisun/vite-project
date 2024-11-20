type PropsType = {
  title: string;
  action?: () => void;
};

export const Button = ({ title, action }: PropsType) => {
  return <button onClick={action}>{title}</button>;
};
