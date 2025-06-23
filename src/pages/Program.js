import Calendar from "../components/Calendar";

function Program() {
  return (
    <div className="program">
      <h1>Les événements à venir</h1>
      <section className="listeEvenement"></section>
      <section className="calendarProgram">
        <Calendar />
      </section>
    </div>
  );
}

export default Program;
