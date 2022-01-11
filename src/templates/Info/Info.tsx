/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FC } from "react";
import { InfoWrapper } from "./Info.styles";

const InfoTemplate: FC = () => {
  return (
    <InfoWrapper>
      <br />
      <Link href="/">Back</Link>
      <h1>Cirno_tv gacha game</h1>
      <h5>that ins&apos;t really a game, just the gacha with twitch emotes</h5>
      <br />
      <h4>
        Created by :{" "}
        <a
          href="https://twitter.com/dudubtway"
          rel="noreferrer"
          target="_blank"
        >
          duduBTW
        </a>
      </h4>

      <br />
      <h1>Sources</h1>
      <a
        href="https://www.pixiv.net/en/artworks/77448253"
        rel="noreferrer"
        target="_blank"
      >
        Home screen art
      </a>
      <br />
      <br />
      <a
        href="https://github.com/duduBTW/cirno_gacha"
        rel="noreferrer"
        target="_blank"
      >
        Code
      </a>
      <br />
      <br />
      <a
        href="https://www.zerochan.net/1345130"
        rel="noreferrer"
        target="_blank"
      >
        404 page
      </a>
      <br />
      <br />
      <a href="https://www.twitch.tv/cirno_tv" target="_blank" rel="noreferrer">
        Emotes
      </a>

      <br />
      <br />
      <br />

      <h1>Raritys</h1>
      <p>Taken from the emote tournament</p>

      <img src="/pullRates.png" alt="Pull rates" />

      <br />
      <br />
      <br />

      <h1>Pull rates</h1>
      <ul>
        <li>5 stars = 2%</li>
        <li>4 stars = 8%</li>
        <li>3 stars = 40%</li>
        <li>2 stars = 50%</li>
      </ul>
      <br />
      <br />
      <br />
    </InfoWrapper>
  );
};

export default InfoTemplate;
