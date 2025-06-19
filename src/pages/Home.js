function Home() {
  return (
    <div className="home">
      <section className="bande1">
        <h1>La pâtisserie de la semaine</h1>
        <div className="row sousBande1">
          <div className="col Bande1Col1"></div>
          <div className="col Bande1Col2"></div>
          <div className="col Bande1Col3"></div>
        </div>
      </section>
      <section className="bande2">
        <h2>Actualités</h2>
      </section>
      <section className="bande3">
        <h2>Le Caméo, c'est quoi ?</h2>
        <div className="row cadreDef">
          <div className="col">
            <h3>La Création du Caméo</h3>
            <p className="sousTitre">Une histoire de passion</p>
            <p>
              Au départ, le projet de Mathilde a été de créer un endroit qui lui
              ressemble à tous les niveaux et où elle pourrait exposer sa
              créativité et celles des autres et assouvir son besoin de partage.
            </p>
            <p>
              La passion de Mathilde pour le cinéma a toujours été importante et
              elle n’a pas cessé de réfléchir à un rapprochement possible entre
              cette dernière et son métier.
            </p>
            <p>
              Depuis maintenant quelques années, des livres de cuisine
              thématique voient le jour et notamment autour du cinéma. L’attrait
              est véritablement présent et rapproche plusieurs générations. Lui
              vient l’idée d’un lieu pour rassembler ces cinéphiles de tout âge.
            </p>
          </div>
          <div className="col"></div>
        </div>
      </section>
      <section className="bande4">
        <h2>Le Caméo, c'est où ?</h2>
      </section>
    </div>
  );
}

export default Home;
