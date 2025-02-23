export default function EventList({ events }) {
    return (
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <div className="event-date">
              <span className="block font-bold">{event.day}</span>
              <span>{event.month}</span>
            </div>
            <h3 className="text-primary">{event.title}</h3>
            <p className="text-dark">{event.time}</p>
            <p className="text-accent">{event.location}</p>
          </div>
        ))}
      </div>
    );
  }