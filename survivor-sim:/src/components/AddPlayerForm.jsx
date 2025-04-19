{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ useState \} from "react";\
\
function AddPlayerForm(\{ addPlayer \}) \{\
  const [name, setName] = useState("");\
  const [image, setImage] = useState("");\
\
  const handleSubmit = (e) => \{\
    e.preventDefault();\
    if (name && image) \{\
      addPlayer(\{ name, image \});\
      setName("");\
      setImage("");\
    \}\
  \};\
\
  return (\
    <form onSubmit=\{handleSubmit\} className="mb-4 flex gap-2">\
      <input\
        type="text"\
        placeholder="Name"\
        value=\{name\}\
        onChange=\{(e) => setName(e.target.value)\}\
        className="border p-2 rounded w-40"\
      />\
      <input\
        type="text"\
        placeholder="Image URL"\
        value=\{image\}\
        onChange=\{(e) => setImage(e.target.value)\}\
        className="border p-2 rounded w-64"\
      />\
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">\
        Add\
      </button>\
    </form>\
  );\
\}\
\
export default AddPlayerForm;}