import { IProps } from './type';

const Divider = ({
    type,
    color = 'bg-gray-base',
    size = 'mx-[0.8rem]',
    length = 'h-[1.3rem]',
    ...rest
}: IProps) => {
    const dividerStyle = {
        horizontal: `border-none ${color} block h-px ${size}`,
        vertical: `border-none ${color} inline-block w-px ${length} align-middle ${size}`,
    };

    return (
        <hr
            className={dividerStyle[type]}
            {...rest}
        />
    );
};

export default Divider;
