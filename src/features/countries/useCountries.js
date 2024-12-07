import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectControls } from "../controls/controlsSlice";
import { loadCountries, selectCountriesInfo, selectVisibleCountries } from "./countrySlice";

export const useCountries = () => {
    const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector(state => selectVisibleCountries(state, controls));
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, {status, error, qty}]
}