import React, { useEffect, useState } from "react";
import axios from "axios";
const DependentDropdown = () => {
  const [countries, setCountry] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [states, setState] = useState([]);

  useEffect(() => {
    // Fetch countries from API
    const fetchCountries = async () => {
      const response = await axios.get("https://freeapi.miniprojectideas.com/api/youtube/GetAllCountry");
      console.log(response.data.data);
      setCountry(response.data.data);
    };
    fetchCountries();
  }, []);

  const onCountryChange = (event) => {
    const countryId = event.target.value;
    setSelectedCountryId(countryId); 
  };

  useEffect(() => {
    // Fetch states from API
    const fetchStates = async () => {
      const response = await axios.get(`https://freeapi.miniprojectideas.com/api/youtube/GetAllStateByCountryId?id=${selectedCountryId}`);
      setState(response.data.data);
    }
    fetchStates();
  }, [selectedCountryId]);

  return (
    <>
      <div>DependentDropdown</div>
      <div>
        <label>Select Country </label>
        <select onChange={(event) => onCountryChange(event)}>
          <option>Select Country</option>
          {countries.map((country) => {
            return (
            <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
          )})}
        </select>
      </div>
      <div>
        <label>Select State </label>
        <select>
          <option>Select State</option>
          {states.map((state) => {
            return (
            <option key={state.stateId} value={state.stateId}>{state.stateName}</option>
          )})}
        </select>
      </div>
    </>
  );
};

export default DependentDropdown;
