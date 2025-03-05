import React, { useState } from 'react';
import { schedule } from '../../data/data';

function Schedule() {
  const [filteredData, setFilteredData] = useState(
    schedule.filter((value) => value.date == '06/03/25')
  );
  const [filterType, setFilterType] = useState('06/03/25');

  const triggerFilter = (date) => {
    setFilterType(date);
    if (date == '06/03/25') {
      setFilteredData(schedule.filter((value) => value.date == '06/03/25'));
    } else if (date == '07/03/25') {
      setFilteredData(schedule.filter((value) => value.date == '07/03/25'));
    } else if (date == '08/03/25') {
      setFilteredData(schedule.filter((value) => value.date == '08/03/25'));
    }
  };
  return (
    <div
      style={{
        margin: '6rem 2rem 6rem 2rem',
        width: 'content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: '900' }}>Fest Schedule</h1>
        </div>
        <div>
          <button
            style={{
              padding: '0.5rem 1rem 0.5rem 1rem',
              backgroundColor: filterType == '06/03/25' ? '#ff5454' : '#ffffff',
              color: filterType == '06/03/25' ? '#ffffff' : '#000000',
              borderRadius: '0.5rem',
            }}
            onClick={() => triggerFilter('06/03/25')}
          >
            Day 1
          </button>
          <button
            style={{
              padding: '0.5rem 1rem 0.5rem 1rem',
              backgroundColor: filterType == '07/03/25' ? '#ff5454' : '#ffffff',
              color: filterType == '07/03/25' ? '#ffffff' : '#000000',
              margin: '1rem',
              borderRadius: '0.5rem',
            }}
            onClick={() => triggerFilter('07/03/25')}
          >
            Day 2
          </button>
          <button
            style={{
              padding: '0.5rem 1rem 0.5rem 1rem',
              backgroundColor: filterType == '08/03/25' ? '#ff5454' : '#ffffff',
              color: filterType == '08/03/25' ? '#ffffff' : '#000000',
              borderRadius: '0.5rem',
              borderRadius: '0.5rem',
            }}
            onClick={() => triggerFilter('08/03/25')}
          >
            Day 3
          </button>
        </div>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {filteredData.map((value, index) => {
          return (
            <>
              <li key={index}>
                {index != 0 && <hr className="bg-success" />}
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  className={`${index % 2 == 0 ? 'timeline-start' : 'timeline-end'} md:text-end timeline-box`}
                  style={{
                    width: '100%',
                    margin: '1rem 0rem 1rem 0rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textTransform: 'capitalize',
                  }}
                >
                  <div className="text-2xl font-black">{value.event}</div>
                  <time className="font-mono text-lg">{value.venue}</time>
                  <div className="text-sm font-black">
                    {value.time.start} to {value.time.end}
                  </div>
                </div>
                <hr className="bg-success" />
              </li>
              {/* {index + 1 == filteredData.length && (
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )} */}
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Schedule;
