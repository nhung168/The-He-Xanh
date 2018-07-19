{\rtf1\ansi\ansicpg1252\cocoartf1348\cocoasubrtf170
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red67\green89\blue108;\red245\green245\blue245;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720

\f0\fs30 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function initializeViz() \{\
  var placeholderDiv = document.getElementById("tableauViz");\
  var url = "https://public.tableau.com/shared/YSTZSKXXD?:display_count=yes";\
  var options = \{\
    width: placeholderDiv.offsetWidth,\
    height: placeholderDiv.offsetHeight,\
    hideTabs: true,\
    hideToolbar: true,\
    onFirstInteractive: function () \{\
      workbook = viz.getWorkbook();\
      activeSheet = workbook.getActiveSheet();\
    \}\
  \};\
  viz = new tableau.Viz(placeholderDiv, url, options);\
\}  \
}