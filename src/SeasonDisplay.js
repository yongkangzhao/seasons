import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is chilly!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    let season = '';
    if (month > 2 && month <9){
        season = lat > 0 ? 'summer' : 'winter';
    }else{
        season = lat < 0 ? 'summer' : 'winter';
    }
    return season;
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div>
            <i className={`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;