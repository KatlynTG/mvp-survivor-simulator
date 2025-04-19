{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ useState \} from "react";\
import AddPlayerForm from "./components/AddPlayerForm";\
import CastList from "./components/CastList";\
import VoteOff from "./components/VoteOff";\
\
function App() \{\
  const [cast, setCast] = useState([]);\
  const [votedOff, setVotedOff] = useState(null);\
\
  const addPlayer = (player) => \{\
    setCast([...cast, player]);\
  \};\
\
  const voteOff = () => \{\
    const randomIndex = Math.floor(Math.random() * cast.length);\
    const eliminated = cast[randomIndex];\
    setVotedOff(eliminated);\
    setCast(cast.filter((_, idx) => idx !== randomIndex));\
  \};\
\
  return (\
    <div className="p-4 max-w-4xl mx-auto">\
      <h1 className="text-3xl font-bold mb-4">Custom Survivor Simulator</h1>\
      <AddPlayerForm addPlayer=\{addPlayer\} />\
      <CastList cast=\{cast\} />\
      \{cast.length > 1 && (\
        <VoteOff voteOff=\{voteOff\} />\
      )\}\
      \{votedOff && (\
        <div className="mt-4 p-4 bg-red-200 rounded-xl">\
          <h2 className="text-xl font-semibold">Voted Off:</h2>\
          <p>\{votedOff.name\}</p>\
          <img src=\{votedOff.image\} alt=\{votedOff.name\} className="w-32 rounded mt-2" />\
        </div>\
      )\}\
    </div>\
  );\
\}\
\
export default App;\
}