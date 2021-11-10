import { TabsContainer } from "./styles";

export const PlanetSelector = ({ planetIndex, selectPlanet, planets }) => (
  <TabsContainer>
    {planets.map((planet, index) => (
      <p
        className={index === planetIndex ? "active" : null}
        key={planet.name}
        onClick={() => selectPlanet(index)}
      >
        {planet.name}
      </p>
    ))}
  </TabsContainer>
);
