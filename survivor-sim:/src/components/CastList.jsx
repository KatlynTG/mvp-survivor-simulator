{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function CastList(\{ cast \}) \{\
  return (\
    <div className="grid grid-cols-3 gap-4">\
      \{cast.map((player, index) => (\
        <div key=\{index\} className="text-center p-2 border rounded">\
          <img src=\{player.image\} alt=\{player.name\} className="w-24 h-24 mx-auto rounded-full object-cover" />\
          <p className="mt-2 font-medium">\{player.name\}</p>\
        </div>\
      ))\}\
    </div>\
  );\
\}\
\
export default CastList;}