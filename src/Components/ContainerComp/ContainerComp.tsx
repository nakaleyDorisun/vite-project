import style from "./ContainerComp.module.css";

type PropsType = { children: React.ReactNode };

export const ContainerComp = ({ children }: PropsType) => {
  return <div className={style.container}>{children}</div>;
};
