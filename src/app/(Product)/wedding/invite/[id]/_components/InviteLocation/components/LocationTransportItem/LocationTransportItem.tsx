import { LocationTransportsProps } from './LocationTransportItem.type';

const LocationTransportItem = ({ kind, detail }: LocationTransportsProps) => {
  return (
    <li className='w-full flex flex-col gap-[0.8rem]'>
      <h5 className='text-size16 font-bold'>{kind}</h5>
      <p className='text-size14'>{detail}</p>
    </li>
  );
};

export default LocationTransportItem;
