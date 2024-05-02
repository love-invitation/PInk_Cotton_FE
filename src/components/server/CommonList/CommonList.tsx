import { CommonListProps } from './CommonList.type';

const CommonList = <T,>({ data, className, children }: CommonListProps<T>) => {
  return (
    <ul className={className}>
      {data.map((value, index) => {
        return children(value, index);
      })}
    </ul>
  );
};

export default CommonList;
