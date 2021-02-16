import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'
import { IconContext } from "react-icons"

const stateByName = {
    cloud : WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
}
//Cuando tratamos de renderizar + de una linea nos combiene separar en una funcion

const renderState = state => {
    const Icon = stateByName[state] !== undefined ? stateByName[state] : stateByName["sunny"];
    return <Icon/>
};

const Weather = ( { temperature, state } ) => {
    return (
        <div>
            <IconContext.Provider value={{size: '5em'}}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography variant="h2" display="inline">{temperature}</Typography>
        </div>
    );
};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string,
};

export default Weather;
