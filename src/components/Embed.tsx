import { memo } from "react";

import styles from "../styles/components/Embed.module.scss";

function EmbedComponent() {
  return (
    <div className={styles.embedContainer}>
      <h1>últimas atualizações: Twitter</h1>

      <article>
        <blockquote className="twitter-tweet">
          <p lang="pt" dir="ltr">
            A agenda esportiva desta SEXTA-FEIRA (23/07/2021), dia da abertura
            oficial de{" "}
            <a href="https://twitter.com/hashtag/Tokyo2020?src=hash&amp;ref_src=twsrc%5Etfw">
              #Tokyo2020
            </a>{" "}
            !<br />
            <br />
            ** A programação olímpica do 1º dia dos Jogos (dia 24 no Japão,
            noite de sexta/manhã de sábado por aqui) será postada nesta
            sexta-feira, após a Cerimônia de Abertura **{" "}
            <a href="https://t.co/j7OXqe0gyv">pic.twitter.com/j7OXqe0gyv</a>
          </p>
          &mdash; Esportes Na TV 📺 (@EsportesNaTV){" "}
          <a href="https://twitter.com/EsportesNaTV/status/1418325644971319296?ref_src=twsrc%5Etfw">
            July 22, 2021
          </a>
        </blockquote>
        <blockquote className="twitter-tweet">
          <p lang="pt" dir="ltr">
            A agenda esportiva desta SEXTA-FEIRA (23/07/2021), dia da abertura
            oficial de{" "}
            <a href="https://twitter.com/hashtag/Tokyo2020?src=hash&amp;ref_src=twsrc%5Etfw">
              #Tokyo2020
            </a>{" "}
            !<br />
            <br />
            ** A programação olímpica do 1º dia dos Jogos (dia 24 no Japão,
            noite de sexta/manhã de sábado por aqui) será postada nesta
            sexta-feira, após a Cerimônia de Abertura **{" "}
            <a href="https://t.co/j7OXqe0gyv">pic.twitter.com/j7OXqe0gyv</a>
          </p>
          &mdash; Esportes Na TV 📺 (@EsportesNaTV){" "}
          <a href="https://twitter.com/EsportesNaTV/status/1418325644971319296?ref_src=twsrc%5Etfw">
            July 22, 2021
          </a>
        </blockquote>
        <blockquote className="twitter-tweet">
          <p lang="pt" dir="ltr">
            A agenda esportiva desta SEXTA-FEIRA (23/07/2021), dia da abertura
            oficial de{" "}
            <a href="https://twitter.com/hashtag/Tokyo2020?src=hash&amp;ref_src=twsrc%5Etfw">
              #Tokyo2020
            </a>{" "}
            !<br />
            <br />
            ** A programação olímpica do 1º dia dos Jogos (dia 24 no Japão,
            noite de sexta/manhã de sábado por aqui) será postada nesta
            sexta-feira, após a Cerimônia de Abertura **{" "}
            <a href="https://t.co/j7OXqe0gyv">pic.twitter.com/j7OXqe0gyv</a>
          </p>
          &mdash; Esportes Na TV 📺 (@EsportesNaTV){" "}
          <a href="https://twitter.com/EsportesNaTV/status/1418325644971319296?ref_src=twsrc%5Etfw">
            July 22, 2021
          </a>
        </blockquote>
      </article>
    </div>
  );
}

// export { EmbedComponent as Embed };

export const Embed = memo(EmbedComponent);
