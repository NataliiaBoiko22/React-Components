import React, { useState } from "react";
import "./styles.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface Animal {
  name: string;
  species: string;
  image: string;
  info: string;
}
export const animals: Animal[] = [
  {
    name: "Lion",
    species: "Wild Animal(mammal)",
    info: "Living in the grasslands, scrub, and open woodlands of sub-Saharan Africa, the lion is the second largest cat in the world. It is dwarfed slightly by the tiger, which is closely related and has a very similar body typeUnlike other cats, lions are very social animals. They live in groups, called prides, of around 30 lions. A pride consists of up to three males, a dozen related females, and their young. The size of the pride is determined by the availability of food and water. If resources are scarce, the pride becomes smallerPride members keep track of one another by roaring. Both males and females have a very powerful roar that can be heard up to 8 km (5 mi. away.Males and females take on very different roles in the pride. Male lions spend their time guarding their territory and their cubs. They maintain the boundaries of their territory, which can be as large as 260 sq. km (100 sq. mi.), by roaring, marking it with urine, and chasing off intruders. Their thick manes, a unique trait to male lions, protect their necks when they fight with challengers.",
    image: "https://source.unsplash.com/800x600/?lion",
  },
  {
    name: "Monkey",
    species: "Placental Mammals",
    info: "There are currently 264 known monkey species.Monkeys can be divided into two groups, Old World monkeys that live in Africa and Asia, and New World monkeys that live in South America.A baboon is an example of an Old World monkey, while a marmoset is an example of a New World monkey.Apes are not monkeys.Some monkeys live on the ground, while others live in trees.Different monkey species eat a variety of foods, such as fruit, insects, flowers, leaves and reptiles.Most monkeys have tails.Groups of monkeys are known as a ‘tribe’, ‘troop’ or ‘mission’.The Pygmy Marmoset is the smallest type of monkey, with adults weighing between 120 and 140 grams.The Mandrill is the largest type of monkey, with adult males weighing up to 35 kg.Capuchin monkeys are believed to be one of the smartest New World monkey species. They have the ability to use tools, learn new skills and show various signs of self-awareness.Spider monkeys get their name because of their long arms, legs and tail.The monkey is the 9th animal that appears on the Chinese zodiac, appearing as the zodiac sign in 2016.",
    image: "https://source.unsplash.com/800x600/?monkey",
  },
  {
    name: "Tiger",
    species: "Wild Animal(mammal)",
    info: "The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat to support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years and then become independent, leaving their mother's home range to establish their own.",
    image: "https://source.unsplash.com/800x600/?tiger",
  },

  {
    name: "Peacock",
    species: "Bird",
    info: "Peacocks are large, colorful pheasants (typically blue and green) known for their iridescent tails. These tail feathers, or coverts, spread out in a distinctive train that is more than 60 percent of the bird’s total body length and boast colorful eye markings of blue, gold, red, and other hues. The large train is used in mating rituals and courtship displays. It can be arched into a magnificent fan that reaches across the bird's back and touches the ground on either side. Females are believed to choose their mates according to the size, color, and quality of these outrageous feather trains.Peacocks are ground-feeders that eat insects, plants, and small creatures. There are two familiar peacock species. The blue peacock lives in India and Sri Lanka, while the green peacock is found in Java and Myanmar (Burma). A more distinct and little-known species, the Congo peacock, inhabits African rain forests.Peafowl such as the blue peacock have been admired by humans and kept as pets for thousands of years. Selective breeding has created some unusual color combinations, but wild birds are themselves bursting with vibrant hues. They can be testy and do not mix well with other domestic birds.",
    image: "https://source.unsplash.com/800x600/?peacock",
  },

  {
    name: "Spider",
    species: "Arachnids",
    info: "Spiders are arachnids, not insects.Other members of the arachnid family include scorpions, mites, ticks and harvestmen.Spiders have 8 legs while insects have 6.Spiders don’t have antennae while insects do.Spiders are found on every continent of the world except Antarctica.There are around 40000 different species of spider.Most spiders make silk which they use to create spider webs and capture prey.Abandoned spider webs are called cobwebs.Most spiders are harmless to humans but a few spider species, such as the black widow, can bite humans and inject venom. Deaths from spider bites are rare however.An abnormal fear of spiders is called ‘arachnophobia’.Tarantulas are large and often hairy spiders, the biggest species have been known to kill mice, lizards and birds.Most tarantula species pose no threat to humans.The largest specie of tarantula is the Goliath Birdeater.Giant Huntsman spiders have leg-spans of around 30cm (12 in).",
    image: "https://source.unsplash.com/800x600/?spider",
  },
  {
    name: "Tortoise",
    species: "Reptilia",
    info: "A tortoise's shell is made up of 60 different bones all connected to each other The top of a tortoise's shell is called a “carapace” The underside of the shell is called a “plastron” The carapace and the plastron of a tortoises shell is connected by what is known as a bridge Tortoises can retract their heads and all their limbs including their tails into their shells when they feel threatened or attacked by predators Tortoises have extremely strong mouths but no teeth instead they have horny type beaks Tortoises have good all round vision and a very good sense of smell Tortoises are cold-blooded – they draw heat from their environment and are more active during the day than at night Tortoises can live a very long time, some to the ripe old age of 150. However, the average age a tortoise can live to ranges from 90 to 150 years Tortoises are what is known as herbivores, they eat grass, ferns, flowers, tree leaves and fruit Female tortoises are usually larger than their male counterparts Females dig burrows in which they can lay up anything from 1 to 30 eggs A male tortoise has a longer tail than that of a female, which is one way of sexing them When baby tortoises break out of their shells they are called hatchlingsTortoise eggs incubate between 90 to 120 days to hatch out Tortoises hibernate in the winter time and before they do, they starve themselves so their stomachs are empty ready for hibernation",
    image: "https://source.unsplash.com/800x600/?tortoise",
  },
  {
    name: "Zebra",
    species: "Mammal",
    info: "Zebra are part of the equidae family along with horse and donkeys.Every zebra has a unique pattern of black and white stripes.There are a number of different theories which attempt to explain zebra’s unique stripes with most relating to camouflage.Wild zebras live in Africa.Common plain zebras have tails around half a metre in length (18 inches).Zebra crossings (pedestrian crossings) are named after the black and white stripes of zebras.Zebras run from side to side to being chased by a predator.Zebras have excellent eyesight and hearing.Zebras stand up while sleeping.Zebras eat mostly grass.The ears of a zebra show its mood.A zebra named Marty starred in the 2005 animated film Madagascar.",
    image: "https://source.unsplash.com/800x600/?zebra",
  },
  {
    name: "Hippo",
    species: "Hippopotamus",
    info: "After elephants and rhinos, the hippopotamus is the next largest land mammal. It is also the largest extant land artiodactyl. Despite their physical resemblance to pigs and other terrestrial even-toed ungulates, the closest living relatives of the hippopotamids are cetaceans (whales, dolphins, porpoises, etc.), from which they diverged about 55 million years ago.",
    image: "https://source.unsplash.com/800x600/?hippo",
  },
  {
    name: "Elephant",
    species: "Mammal",
    info: "Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea. The order was formerly much more diverse during the Pleistocene, but most species became extinct during the Late Pleistocene epoch. Distinctive features of elephants include a long proboscis called a trunk, tusks, large ear flaps, pillar-like legs, and tough but sensitive skin. ",
    image: "https://source.unsplash.com/800x600/?elephant",
  },
  {
    name: "Piegon",
    species: "Bird",
    info: "Most of our domesticated pigeons have a common ancestor, the Rock Dove pigeon.Racing Homing Pigeons have been clocked flying 92.5 mph average speed on a 400 mile race.Homing Pigeons have been known to fly 700 miles in a day.Pigeons have flown in many wars, including both WWI & WWII.  They have saved countless lives.Pigeons achieved a 98% success rate in the missions flown in WW II, despite enemy fire, and often with mortal injuries to themselves.In the World Wars, flying pilots carried pigeons in case they had to ditch their plane, they would release the bird for help.  Many pilots owe their lives to a pigeon.Pigeons are still used today by the French, Swiss, Israeli, Iraqi and Chinese Armies.Pigeons proved valuable in the Gulf War, as their messaging was not affected by the electronic jamming.Pigeons have been bought for as much as $132,000.00 by Louella Pigeon World in 1992. Invincible Spirit They have been proposed to be used by the Project Sea Hunt (U.S. Coast Guard) to spot life jackets out in the open sea.Noah's Dove was most likely a homing pigeon.They were used by many for communication before the telegraph was invented.They were used by the Greeks more than 5,000 years ago.They can and are ready to breed at the age of 5 to 6 months.They can breed as old as 10 years of age, and have been helped to breed past that.They are bred, raised and trained as good as Thoroughbred Horses.",
    image: "https://source.unsplash.com/800x600/?piegon",
  },
];
const Main: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>(animals);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchResultsEmpty, setSearchResultsEmpty] = useState<boolean>(false);

  const handleSearch = () => {
    const filteredAnimals = animals.filter((animal) =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAnimals(filteredAnimals);
    setShowSearchResults(filteredAnimals.length > 0);
    setSearchResultsEmpty(filteredAnimals.length === 0);
  };

  const handleBack = () => {
    setShowSearchResults(false);
    setSearchTerm("");
    setSearchResultsEmpty(false);
  };

  const toggleInfo = () => {
    setIsExpanded((prev) => !prev);
  };
  const navigate = useNavigate();

  const togglePage = () => {
    navigate("/forms");
  };
  return (
    <div className="main-wrapper">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by animal name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {searchResultsEmpty ? (
        <Navigate to="/404" />
      ) : showSearchResults ? (
        <div className="card-field-small">
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
          {filteredAnimals.map((animal) => (
            <div
              className={`main-card ${isExpanded ? "expanded" : ""}`}
              key={animal.name}
            >
              <img
                src={animal.image}
                alt={animal.name}
                width="300"
                height="250"
              />
              <h3>{animal.name}</h3>
              <p>{animal.species}</p>
              <p className="info">
                {isExpanded ? animal.info : `${animal.info.slice(0, 100)}...`}
              </p>
              <button className="animal-info-button" onClick={toggleInfo}>
                {isExpanded ? "Hide info" : "Show more"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="main-wrapper">
          <div className="support">
            <p>
              You can support the development of our website by clicking on the
              button
            </p>
            <img title="arrow" src="../../assets/right-arrow.svg"></img>
            <button
              title="button"
              className="support-button"
              onClick={togglePage}
            >
              Support
            </button>
          </div>
          <div className="card-field">
            {animals.map((animal) => (
              <div
                className={`main-card ${isExpanded ? "expanded" : ""}`}
                key={animal.name}
              >
                <img
                  src={animal.image}
                  alt={animal.name}
                  width="300"
                  height="250"
                />
                <h3>{animal.name}</h3>
                <p>{animal.species}</p>
                <p className="info">
                  {isExpanded ? animal.info : `${animal.info.slice(0, 60)}...`}
                </p>

                <button className="animal-info-button" onClick={toggleInfo}>
                  {isExpanded ? "Hide info" : "Show more"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Main;
