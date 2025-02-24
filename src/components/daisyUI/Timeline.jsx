import './Timeline.css';

function Timeline() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timelineContainer p-2">
      <li>
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
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">
            {' '}
            March 7,2025 | 9:00 AM-10:00 AM
          </time>
          <div className="text-lg font-black">
            Hackathon Kickoff & Problem Statement Reveal
          </div>
          🔹 Participants will receive the problem statements via email. <br />
          🔹 The Hackathon will officially kick off with a briefing session
          covering rules, guidelines, and expectations.
        </div>
        <hr />
      </li>
      <li>
        <hr />
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
        <div className="timeline-end md:mb-10">
          <time className="font-mono italic">
            March 7,2025 | 12:00 PM-1:00 PM
          </time>
          <div className="text-lg font-black">First Evaluation</div>
          🔹 Mentors will review the selected topics and project ideas. <br />
          🔹 Teams must validate their ideas and ensure feasibility before
          proceeding.
        </div>
        <hr />
      </li>
      <li>
        <hr />
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
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">
            {' '}
            March 7,2025 | 10:00 PM-11:00 PM
          </time>
          <div className="text-lg font-black">Second Evaluation</div>
          🔹 Mentors will assess project progress. <br />
          🔹 Teams will receive feedback to refine their implementation.
        </div>
        <hr />
      </li>
      <li>
        <hr />
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
        <div className="timeline-end md:mb-10">
          <time className="font-mono italic">
            March 8,2025 | 8:00 AM-9:00 AM
          </time>
          <div className="text-lg font-black">
            Third Evaluation (Final Touches & Code Freeze)
          </div>
          🔹 Teams must finalize their code. <br />
          🔹 No further modifications will be allowed after this stage.
        </div>
        <hr />
      </li>
      <li>
        <hr />
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
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">Final Presentation & Judging</time>
          <div className="text-lg font-black">
            {' '}
            March 8,2025 | 10:00 AM-11:00 AM
          </div>
          🔹 The top 5 teams will present their projects. <br />
          🔹 Each team will have 5-7 minutes to showcase their solution. <br />
          🔹 Winners will be announced during the closing ceremony.
        </div>
      </li>
    </ul>
  );
}

export default Timeline;
