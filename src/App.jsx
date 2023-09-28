import { useState } from 'react'
import './App.css'
import './index.css'

const allData = [{
  question: "Start",
  answer: "Press the next arrow to start the flashcards :)"
}, {
  question: "A flashing red traffic light signifies that a driver should do what?",
  answer: "stop"
}, {
  question: "A knish is traditionally stuffed with what filling?",
  answer: "potato"
}, {
  question: "A pita is a type of what?",
  answer: "flat bread"
}, {
  question: "A portrait that comically exaggerates a person's physical traits is called a what?",
  answer: "caricature"
}, {
  question: "A second-year college student is usually called a what?",
  answer: "sophomore"
}, {
  question: "A student who earns a J.D. can begin his or her career as a what?",
  answer: "lawyer"
}, {
  question: "A triptych is a work of art that is painted on how many panels?",
  answer: "three"
}, {
  question: "According to a famous line from the existentialist play 'No Exit' what is hell?",
  answer: "other people"
}, {
  question: "According to a popular slogan, what state should people not 'mess with'?",
  answer: "Texas"
}, {
  question: "According to a Yale University study, what smell is the most recognizable to American adults?",
  answer: "coffee"
}, {
  question: "According to folklore, the 'jackalope' is an antlered version of what animal?",
  answer: "rabbit"
}, {
  question: "According to Greek mythology, who was Apollo's twin sister?",
  answer: "Artemis"
}, {
  question: "According to legend, if you give someone the 'evil eye' what are you doing?",
  answer: "cursing them"
}, {
  question: "According to legend, in what country are you most likely to meet a leprechaun?",
  answer: "Ireland"
}, {
  question: "According to the American Kennel Club, what is the most popular breed of dog in the US as of 1999?",
  answer: "Labrador retriever"
}, {
  question: "According to the Bible, Moses and Aaron had a sister named what?",
  answer: "Miriam"
}, {
  question: "According to the children's nursery rhyme, what type of ocean did Columbus sail in 1492?",
  answer: "blue"
}, {
  question: "According to the Mother Goose nursery rhyme, which child is full of woe?",
  answer: "Wednesday's child"
}, {
  question: "According to the popular saying, what should you do 'when in Rome'?",
  answer: "as the Romans do"
}, {
  question: "According to the proverb, necessity is the mother of what?",
  answer: "Invention"
}, {
  question: "According to the title of a popular children's TV show, what color is Bear's big house?",
  answer: "blue"
}, {
  question: "According to the USDA, which food group should you eat the most servings of per day?",
  answer: "breads"
}, {
  question: "Ada Lovelace is credited with being the first person to have made what?",
  answer: "a computer program"
}, {
  question: "After Prince Charles, who is next in line to be the king of England?",
  answer: "Prince William"
}, {
  question: "An airplane's black box is usually what color?",
  answer: "orange"
}, {
  question: "As of 1999, which state has the most Girl Scouts?",
  answer: "California"
}, {
  question: "Astronaut John Glenn served as a pilot in what branch of the military?",
  answer: "Marines"
}, {
  question: "At the equator, how fast is the earth's surface turning?",
  answer: "about 1000 miles per hour"
}, {
  question: "At what age can someone first attend an R-rated movie without an accompanying adult?",
  answer: "18"
}, {
  question: "Backgammon is a how many player game?",
  answer: "Two"
}, {
  question: "Before he went into coaching, Phil Jackson played for which of the following NBA teams?",
  answer: "New York Knicks"
}, {
  question: "By what name is Bob Keeshan better known?",
  answer: "Captain Kangaroo"
}, {
  question: "By what collective name do Christians refer to God the Father, God the Son and the Holy Ghost?",
  answer: "the Trinity"
}, {
  question: "By what nickname is the Federal National Mortgage Association known?",
  answer: "Fannie Mae"
}, {
  question: "Cheddar cheese got its name from a village in what country?",
  answer: "England"
}, {
  question: "Cheese is a necessary ingredient in which of these dishes?",
  answer: "veal parmigiano"
}, {
  question: "During what war did Francis Scott Key write the words to 'The Star-Spangled Banner'?",
  answer: "War of 1812"
}, {
  question: "During which war did US troops fight the Battle of New Orleans?",
  answer: "War of 1812"
}, {
  question: "Each year in pro baseball, the player voted as the best fielder at his position wins what?",
  answer: "the Gold Glove"
}, {
  question: "Elephant tusks are made of what material?",
  answer: "ivory"
}, {
  question: "Excluding wisdom teeth, how many adult teeth do humans have?",
  answer: "28"
}, {
  question: "For a man and woman on a date, 'dutch treat' means what?",
  answer: "each pays their own way"
}, {
  question: "For what purpose would you use an awl?",
  answer: "to make holes"
}, {
  question: "From 1971 to 1997, the Democratic Republic of Congo was known as what?",
  answer: "Zaire"
}, {
  question: "From what language does the term 'R.S.V.P.' originate?",
  answer: "French"
}, {
  question: "From whom does the Lutheran Church get its name?",
  answer: "Martin Luther"
}, {
  question: "End of quiz",
  answer: "Click the arrow to restart"
}];


function App() {
  const [q_num, set_q_num] = useState(0);
  const [q, setq] = useState('question')
  const showAnswer = () => {
    if (q == 'answer') {
      setq('question')
    } else {
      setq('answer')
      console.log(q)
    }
  }
  const next = () => {
    if (q_num < 47) {
      set_q_num(q_num + 1)
    } else {
      set_q_num(1)
    } setq('question')
  }
  return (
    <div className="container">
      <h1>Test your knowlege of history</h1>
      <h2>How much of history do you know about</h2>
      <h3>Number of cards: 46</h3>
      <div onClick={showAnswer} className="card">
        <h2>{allData[q_num][q]}</h2>
      </div>
      <button onClick={next} className="nextCard">⭢</button>
    </div>
  )
}

export default App
