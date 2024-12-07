import { CountriesList } from "../features/countries/countriesList";
import {Controls} from '../features/controls/Controls'

export const HomePage = () => {
  return (
    <>
      <Controls />
      <CountriesList />
    </>
  );
};
