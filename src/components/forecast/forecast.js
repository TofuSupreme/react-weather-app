import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemHeading
} from 'react-accessible-accordion';
import './forecast.css';

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//This code calculates today's date and the rest of the week within the WEEK_DAYS array //

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title"> Daily </label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img alt="weather" className="item-small" src={`icons/${item.weather[0].icon}.png`} />
                  <label className="day">{forecastDays[index]}</label>
                  {" "}
                  <label className="description">{item.weather[0].description}</label>
                  {""}
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C / {" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                  </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
  </>
)
}
export default Forecast;
