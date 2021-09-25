import React, { useState } from "react";
import "./styles.css";
const travelDictionary = {
  Uttarakhand: [
    {
      place: "Rishikesh",
      famousFor:
        "Rishikesh is a city in India’s northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River. The river is considered holy, and the city is renowned as a center for studying yoga and meditation. ",
      Ratings: "4.8/5"
    },
    {
      place: "Dehradun",
      famousFor:
        "Dehradun is the capital of the Indian state of Uttarakhand, near the Himalayan foothills. At its core is the 6-sided Ghanta Ghar clock tower. To the southwest is Paltan Bazaar, a busy shopping area. Just east is the Sikh temple Gurdwara Nanaksar, topped with ornate white and golden domes",
      Ratings: "4.6/5"
    },
    {
      place: "Haridwar",
      famousFor:
        "Haridwar is an ancient city and important Hindu pilgrimage site in North India's Uttarakhand state, where the River Ganges exits the Himalayan foothills. The largest of several sacred ghats (bathing steps), Har Ki Pauri hosts a nightly Ganga Aarti (river-worshipping ceremony) in which tiny flickering lamps are floated off the steps. Worshipers fill the city during major festivals including the annual Kanwar Mela.",
      Ratings: "4.9/5"
    }
  ],
  MadhyaPradesh: [
    {
      place: "Indore",
      famousFor:
        "Indore is a city in west-central India. It’s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty. The Holkar rulers are honored by a cluster of tombs and cenotaphs at Chhatri Baag. The night market Sarafa Bazar sells street food. East is the Indo-Gothic Gandhi Hall and clock tower. The Jain temple Kanch Mandir has a mirrored mosaic interior.",
      Ratings: "4.9/5"
    },
    {
      place: "Pachmarhi",
      famousFor:
        "Pachmarhi, also known as Satpura ki Rani, is a hill station in the central Indian state of Madhya Pradesh. Its many waterfalls include Apsara Vihar, with its calm pool, and soaring, single-drop Silver Fall nearby. The Bee Fall tumbles over a jagged rock face to the northwest. Leopards and Indian bison live in Satpura National Park. The ancient Pandav Caves are a group of 5 dwellings cut out of sandstone on a hil",
      Ratings: "4.8/5"
    },
    {
      place: "Hanumantiya",
      famousFor:
        "Hanumantiya Island is developed by MP Tourism & maintains a tourist complex. Its situated in reservoir of Indira Sagar Dam on Narmada River bank in Khandwa district & 130-140 kms from Indore. ... It is around 150km from Indore. It is best to come from Khandwa which is around 60 km",
      Ratings: "4.7/5"
    }
  ],
  Bihar: [
    {
      place: "Vaishali",
      famousFor:
        "Vaishali derives its name from King Vishal. Even before the advent of Buddhism and Jainism, Vaishali was the capital of the vibrant Vajji confederation, since before the birth of Mahavira (c. 599 BC), which suggests that it was the first republic in the world, similar to those later found in ancient Greece.[5] In that period, Vaishali was an ancient metropolis and the capital city of the republic of the Vajji confederation of Mithila, which covered most of the Himalayan Gangetic region of present-day Bihar.",
      Ratings: "4.7/5"
    },
    {
      place: "Gaya",
      famousFor:
        "Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar. It’s known for 18th-century Vishnupad Mandir, a riverside temple with an octagonal shrine. Close by, ancient Mangla Gauri Temple is set on a hilltop. To the north, Hindu devotees bath in a Brahma Kund pond before honoring their deceased ancestors atop Pretshila Hill. To the south lies the Hindu pilgrimage center of Bodh Gaya",
      Ratings: "4.8/5"
    },
    {
      place: "Rajgir",
      famousFor:
        "Rajgir is an ancient city in the northeast Indian state of Bihar. Surrounded by hills, it's known for its holy sites. Remains of the Cyclopean Wall, which encircled the city centuries ago, still stand in the center. Close by, Venu Vana park was once home to a monastery built for Buddha. The shield-shaped Japanese Temple contains a huge Buddha statue. Nearby there are hot springs believed to have medicinal properties",
      Ratings: "4.2/5"
    }
  ]
};
var travelList = Object.keys(travelDictionary);

export default function App() {
  const [states, setStates] = useState("Uttarakhand");
  function statesClickHandler(states) {
    setStates(states);
  }

  return (
    <div className="App">
      <h1>Your Indian Tourist</h1>

      <p>Select the state and we will suggest you best places to visit</p>

      {travelList.map((states) => (
        <button
          id="btn-place"
          onClick={() => statesClickHandler(states)}
          key={states}
        >
          {states}
        </button>
      ))}

      <div>
        <div>The places you must visit in {states} are: </div>
        <ul>
          {" "}
          {travelDictionary[states].map((travelState) => (
            <li className="state-list" key={travelState.place}>
              <div id="travel-state-place">{travelState.place}</div>

              <div id="description">Known For: {travelState.famousFor}</div>

              <br />

              <div id="rating">Ratings: {travelState.Ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
